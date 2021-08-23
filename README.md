<div align="center">
  <img src="docs/img/gadgit.png" alt="Inspector Gadgit Logo" width="400" />
  <br>
  <p>
    A test Node.js library for searching the <a href="https://docs.github.com/en/rest">GitHub Rest API</a>.
  </p>
</div>

---

# Inspector Gadgit


- [Installation](#installation)
  - [Dependencies](#dependencies)
- [Usage](#usage)
  - [Rest APIs](#rest-apis)
  - [HTTP Client](#http-client)
- [CLI](#cli)
  - [Schemas](#schemas)
  - [API](#api)

# Installation

This library is not currently published to NPM and must be installed from GitHub.

``` sh
npm install github:SteveByerly/inspector_gadgit
```

## Dependencies

- [openapi-typescript](https://github.com/drwpow/openapi-typescript)
  - Converts the TypeScript interfaces from OpenAPI schemas
- [Got](https://github.com/sindresorhus/got)
  - The backing HTTP request library
- [Commander.js](https://github.com/tj/commander.js)
  - Generates the CLI interface

# Usage

## Rest APIs

The `rest-api` module defines a base `GitHubService` class and a few entity-specific subclasses (`PullRequestService`, `OrganizationService`). The `GitHubService` class handles the common configuration while the entity subclasses define the typings and values for their specific endpoints and methods.

``` typescript
import { PullRequestService } from 'inspector_gadgit';

const service = new PullRequestService({ authToken: 'ghp_abcd1234' });

const pathParams = { owner: 'ramda', repo: 'ramda' };
const searchParams = { per_page: 100, state: 'all' };

const paginator = service.fetch(pathParams, searchParams);)

const pullRequests = [];

for await (const pullRequest of paginator) {
  pullRequests.push(pullRequest);
}
```

## HTTP Client

The `http-client` module provides an `HttpClient` class for managing HTTP requests, with the majority of functionality coming from the [Got](https://github.com/sindresorhus/got) library. The goal of this module is to provide a decoupled interface that lets us define our own interface and overlay typings that may be better-suited for our usage.

``` typescript
import { HttpClient } from 'inspector_gadgit';

const client = new HttpClient({
  baseUrl: 'https://api.github.com',
  headers: {
    accept: `application/vnd.github.v3+json`,
    authorization: 'token ghp_abcd1234',
    'user-agent': 'https://github.com/stevebyerly/inspector_gadgit',
  },
});

const pathParams = { owner: 'ramda', repo: 'ramda' };
const pathname = `repos/${pathParams.owner}/${pathParams.repo}/pulls`;
return client.get(pathname);
```


# CLI

A basic CLI has been added to facilitate testing and demonstrating the application and only provides a limited set of commands/options in relation to the GitHub API.

```sh
# Basic Usage
npx gogo-gadgit [options] [command]

# Get help with any command
npx gogo-gadgit --help

# Usage: gogo-gadgit [options] [command]
#
# CLI application for inspecting GitHub resources
#
# Options:
#   --version         output the version number
#   --verbose         Show verbose logging
#   -h, --help        display help for command
#
# Commands:
#   api               Interact with the GitHub Rest API
#   schema [options]  Update the OpenAPI schema and TypeScript typings
#   help [command]    display help for command

```

## Schemas

Download versions of the GitHub OpenAPI schema and convert them into TypeScript typings files.

```sh
npx gogo-gadgit schema --help

# Update the OpenAPI schema and TypeScript typings
#
# Options:
#   --overwrite         Overwrite existing files (default: false)
#   -h, --help          display help for command
#
# Commands:
#   download [options]  Download the GitHub OpenAPI schema
#   generate [options]  Generate typings from an OpenAPI schema
#   help [command]      display help for command


npx gogo-gadgit schema download --dest ./github-rest-api.json
# Downloading schema: https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json


npx gogo-gadgit schema generate
# Generating types: ./schemas/github-rest-api.json
```

**`download [options]`**

| Options | Default | Description |
|---|---|---|
| `--dest <filepath>` | `./schemas/github-rest-api.json` | Path to save OpenAPI schema (.json) |
| `--overwrite` |  `false` | Overwrite existing files |


**`generate [options]`**

| Options | Default | Description |
|---|---|---|
| `--src <filepath>` | `./schemas/github-rest-api.json` | Path of OpenAPI schema (.json) |
| `--dest <filepath>` | `./schemas/github-rest-api.ts` | Path to save TypeScript definition (.ts) |
| `--overwrite` |  `false` | Overwrite existing files |

## API

Run queries against the GitHub REST API

```sh
npx gogo-gadgit api --help

# Query the GitHub Rest API
#
# Options:
#   -h, --help       display help for command
#
# Commands:
#   orgs [options]   Get information about Organizations
#   pulls [options]  Get information about Pull Requests
#   help [command]   display help for command


npx gogo-gadgit api orgs get --name ramda
# [08/22/2021, 6:49:13 AM] [GET] https://api.github.com/orgs/ramda
# {
#   login: 'ramda',
#   id: 5298359,
#   node_id: 'MDEyOk9yZ2FuaXphdGlvbjUyOTgzNTk=',
#   url: 'https://api.github.com/orgs/ramda',
#   ...
#   type: 'Organization'
# }


npx gogo-gadgit api pulls search -q org:ramda --count
# [08/22/2021, 6:52:39 AM] [GET] https://api.github.com/search/issues?per_page=1&q=org%3Aramda+is%3Apull-request
# 1979
```

**`orgs [list|get] [options]`**

| Command | Options | Default | Description |
|---|---|---|---|
| list | `--authToken <token>` | - | GitHub personal access token |
| get | `--authToken <token>` | - | GitHub personal access token |
| | `--name <name>` | - | Name of the organization |

**`pulls [list|get|search] [options]`**

| Command | Options | Default | Description |
|---|---|---|---|
| list | `--authToken <token>` | - | GitHub personal access token |
| | `--owner <name>` | - | Name of the owner (user/org) |
| | `--repo <name>` | - | Name of the repository |
| get | `--authToken <token>` | - | GitHub personal access token |
| | `--owner <name>` | - | Name of the owner (user/org) |
| | `--repo <name>` | - | Name of the repository |
| | `--id <pull_number>` | - | Id of the pull request |
| search | `--authToken <token>` | - | GitHub personal access token |
| | `--count` | `false` | Get the count of search results |
| | `--term <term>` | - | Search term |
| | `-q, --qualifiers <qualifiers...>` | `[]` | Search qualifiers |
