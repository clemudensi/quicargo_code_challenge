### App structure
The e2e directory serves as the central point for cypress test. The cypress directory hold all cypress related assets.
The integration directory will contain test files for the quicargo app.

### Running Tests
The commands in e2e/package.json assume the app is already running on the correct port, so start running the app and then from the e2e folder run the command to run that app's test:


cd frontend
yarn start

cd e2e

To run with browser ui
`yarn test:quicargo:ui`

To run headlessly
`yarn test:quicargo`