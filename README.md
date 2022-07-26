# kvk-app

## Requirements
* Homepage -> layout + logo + searchbar + results
* Result page -> layout + detail view of the company

## Technical
PART 1
V Install react
V Create a mockup of the homepage
V Create rest service (axios instance with optional the apikey baked into the service)
X Create local store (I think redux in react (vuex in vue))
V Get the information of the companies
V Create the overview of companies (pagination is optional but preferred)
* Create an UI test (haven't done this before but i think in cypress?)

PART 2
V Create Search functionality
* Handle 500 error in the rest service (so it works everywhere, not only on the search)

PART 3
* Create the result page
* Get the information of the company by ID in the URL.
* Show the company information on the page

PART 4
* Create a test to check if the search is working properly (haven't done this before, but i think a unit test?)

PART 5
V App optimization (already did this in step 1, don't call the server if it isn't necessary)
* Add pagination
* Add sorting on different columns
* Show last searches (with link to the search) (self made up UI improvement)
* Show last visited companies (with link to detail page) (self made up UI improvement)


# Found problems:

- Choose not to use redux, because of time issues. I am familiar with the vuejs variant (vuex). For now
    I choose to store the data with the component, ideally i would store it in redux.


- My data fetch in the componentDidMount function inside the app.js is called twice, i don;t know why that is.


# REACT APP DIRECTIONS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
