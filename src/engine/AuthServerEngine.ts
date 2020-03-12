import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { open } from 'openurl';

class AuthServerEngine {
  public async InitiateAuthServerWorkflowAndGetToken(): Promise<string | null> {
    const { CLIENT_ID: clientID, CLIENT_SECRET: clientSecret } = process.env;
    return new Promise(resolve => {
      passport.use(
        new GitHubStrategy(
          {
            clientID,
            clientSecret,
            callbackURL: 'https://localhost:9001/callback'
          },
          (accessToken: string, _refreshToken, _profile, done) => {
            return done(null, accessToken);
          }
        )
      );

      const app = express();
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(passport.initialize());
      app.use(passport.session());

      app.get(
        '/login',
        passport.authenticate('github', { scope: ['starred'] }),
        (_req, _res) => {
          console.log(_req, _res);
        }
      );

      app.get(
        '/callback',
        passport.authenticate('github', { failureRedirect: '/login' }),
        (_, res) => {
          console.log(_);
          res.send(_);
          res.end('Close it!');
          resolve();
        }
      );

      app.listen(9001);
      open('http://localhost:9001/login');
    });
  }
}

export default new AuthServerEngine();
