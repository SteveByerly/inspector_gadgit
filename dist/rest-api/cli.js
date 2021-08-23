"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPullsCommand = exports.getOrgsCommand = exports.getApiCommand = void 0;
const commander_1 = require("commander");
const organizations_1 = require("./organizations");
const pull_requests_1 = require("./pull-requests");
const getApiCommand = () => {
    const command = new commander_1.Command();
    command
        .name('api')
        .description('Query the GitHub Rest API')
        .showHelpAfterError(true)
        .addCommand(exports.getOrgsCommand())
        .addCommand(exports.getPullsCommand());
    return command;
};
exports.getApiCommand = getApiCommand;
const getOrgsCommand = () => {
    const command = new commander_1.Command();
    const buildService = () => {
        const rootOptions = command.opts();
        return new organizations_1.OrganizationService({ authToken: rootOptions.authToken });
    };
    command
        .name('orgs')
        .description('Get information about Organizations')
        .showHelpAfterError(true)
        .option('--authToken <token>', 'GitHub personal access token');
    command
        .command('list')
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
        .action(async (options) => {
        const svc = buildService();
        const org = await svc.get({ org: options.name });
        console.log(org);
    });
    return command;
};
exports.getOrgsCommand = getOrgsCommand;
const getPullsCommand = () => {
    const command = new commander_1.Command();
    const getRootOptions = () => command.opts();
    const buildService = (options) => {
        return new pull_requests_1.PullRequestService({ authToken: options.authToken });
    };
    command
        .name('pulls')
        .description('Get information about Pull Requests')
        .showHelpAfterError(true)
        .option('--authToken <token>', 'GitHub personal access token');
    command
        .command('search')
        .description('Get stats Pull Requests for a repository')
        .option('--count', 'Get the count of search results', false)
        .option('-t, --term <term>', 'Search term')
        .option('-q, --qualifiers <qualifiers...>', 'Search qualifiers')
        .action(async (options) => {
        const rootOptions = getRootOptions();
        const svc = buildService(rootOptions);
        const searchParams = {
            count: options.count,
            qualifiers: options.qualifiers ?? [],
            term: options.term,
        };
        if (searchParams.count) {
            const result = await svc.count(searchParams);
            console.log(`Totel Count: ${result}`);
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
        .action(async (options) => {
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
        .action(async (options) => {
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
exports.getPullsCommand = getPullsCommand;
