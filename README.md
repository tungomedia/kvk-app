# kvk-app

## Requirements
* Homepage -> layout + logo + searchbar + results
* Result page -> layout + detail view of the company

## Technical directions
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
V Handle 500 error in the rest service (so it works everywhere, not only on the search)

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


# problems along the way:

-   In general i mostly ran into the issue of finding out how something should be done in react, as I have told in my motivation, I have a lot of experience with Vuejs, not so much with react.
    Still i think i came quite far considering i really didn't spend more then 3 hours. I mainly tried to focus on showing how to split code into logical places (at least where i found them logical in this react setup :)).

- Choose not to use redux, because of time issues. I am familiar with the vuejs variant (vuex). For now
    I choose to store the data with the component, ideally i would store it in redux.

- My data fetch in the componentDidMount function inside the app.js is called twice, i don't know why that is.

- I have installed toast to be able to nicely show an error when the api results in a 500 error, it became an alert because of a lack of time..


# REACT APP DIRECTIONS

## Available Scripts

In the project directory, you can run:

### `npm start`