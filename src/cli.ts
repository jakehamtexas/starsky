import program from 'commander';
import ConfigurationManager from './manager/ConfigurationManager';
import { StarredRepoManager } from './manager';
import TokenManager from './manager/TokenManager';
import dotenv from 'dotenv';
dotenv.config({
  path: '../.env'
});

program
  .name('starsky')
  .version('0.1')
  .option(
    '-s, --setup',
    '-c, --set-credentials <username> <password>',
    'Sets the github username/password for authenticating requests to the GitHub API.'
  )
  .option('-u, --username <name>', 'Sets the GitHub username.')
  .option('-l, --list', 'Lists all starred repositories for the GitHub user.');
program.parse(process.argv);

if (true) {
  TokenManager.SetupToken();
}
if (program.setCredentials) {
  const { username, password } = program;
  ConfigurationManager.SetAuthCredentials(username, password).then(() =>
    console.log(username, password)
  );
}
if (program.username) {
  ConfigurationManager.SetQueryUsername(program.username).then(() =>
    console.log(program.username)
  );
}
if (program.list) {
  StarredRepoManager.ListStarred().then(list => console.log(list.length));
}
