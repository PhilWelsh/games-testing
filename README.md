# Running this app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `logos, fonts and favicons`

Adding these files into the src folder and referencing them in manifest.json will show them in the browser tab.
fonts and icons are closest to the correct versions that could be found at this time.

### `further development`

For real development, adding a unique key to the data.json would be preferred, rather than using surnames as the key which could easily reference more than one person.

Tests would be created accordingly

Images have been renamed to better actively load them.

### `CORS server problems`

CORS problems with the hosting server have been resolved by passing URLs through "https://cors-anywhere.herokuapp.com/"
