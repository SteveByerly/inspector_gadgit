// Lib
import { Command } from 'commander';
// App
import { OrganizationService } from './organizations';
import { PullRequestService } from './pull-requests';

interface RootOptions {
  authToken?: string;
}

export const getApiCommand = (): Command => {
  const command = new Command();

  command
    .name('api')
    .description('Query the GitHub Rest API')
    .showHelpAfterError(true)
    .addCommand(getOrgsCommand())
    .addCommand(getPullsCommand());

  return command;
};

export const getOrgsCommand = (): Command => {
  const command = new Command();

  const buildService = () => {
    const rootOptions = command.opts() as RootOptions;
    return new OrganizationService({ authToken: rootOptions.authToken });
  };

  command
    .name('orgs')
    .description('Get information about Organizations')
    .option('--authToken <token>', 'GitHub personal access token');

  command
    .command('list', { isDefault: true })
    .description('List Organiztions')
    .action(async () => {
      const svc = buildService();
      const allOrgs = svc.fetch();

      for await (const org of allOrgs) {
        console.log(org);
      }
    });

  command
    .command('get')
    .description('Get details of an Organization')
    .requiredOption('--name <name>', 'Name of the organization')
    .action(async options => {
      const svc = buildService();
      const org = await svc.get({ org: options.name });
      console.log(org);
    });

  return command;
};

interface PullsOptions {
  authToken?: string;
}

export const getPullsCommand = (): Command => {
  const command = new Command();

  const getRootOptions = (): PullsOptions => command.opts() as PullsOptions;

  const buildService = (options: RootOptions) => {
    return new PullRequestService({ authToken: options.authToken });
  };

  command
    .name('pulls')
    .description('Get information about Pull Requests')
    .option('--authToken <token>', 'GitHub personal access token');

  command
    .command('search')
    .description('Get stats Pull Requests for a repository')
    .option('--count', 'Get the count of search results', false)
    .option('-t, --term <term>', 'Search term')
    .option('-q, --qualifiers <qualifiers...>', 'Search qualifiers')
    .action(async options => {
      const rootOptions = getRootOptions();
      const svc = buildService(rootOptions);

      const searchParams = {
        count: options.count,
        qualifiers: options.qualifiers ?? [],
        term: options.term,
      };

      if (searchParams.count) {
        const result = await svc.count(searchParams);
        console.log(result);
        return;
      }

      const searchResults = svc.search(searchParams);

      for await (const pullRequest of searchResults) {
        console.log(pullRequest);
      }
    });

  command
    .command('list')
    .description('List the Pull Requests for a repository')
    .requiredOption('--owner <name>', 'Name of the owner (user/org)')
    .requiredOption('--repo <name>', 'Name of the repository')
    .action(async options => {
      const rootOptions = getRootOptions();
      const svc = buildService(rootOptions);

      const allPulls = svc.fetch(options, { per_page: 100, state: 'all' });

      const collector = [];

      for await (const pullRequest of allPulls) {
        collector.push(pullRequest);
      }

      console.log(collector.length);
    });

  command
    .command('get')
    .description('Get details of a Pull Request')
    .requiredOption('--owner <name>', 'Name of the owner (user/org)')
    .requiredOption('--repo <name>', 'Name of the repository')
    .requiredOption('--id <pull_numner>', 'Id of the pull request')
    .action(async options => {
      const rootOptions = getRootOptions();
      const svc = buildService(rootOptions);

      const pullRequest = await svc.get({
        ...options,
        pull_number: options.id,
      });

      console.log(pullRequest);
    });

  return command;
};
