

# Web - Angular Test Assignment - NxScalioApp
This project was generated using [Nx](https://nx.dev).

## Demo Link: https://nx-search-app.netlify.app/

## Overview

The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI. The app will consist of **two major components** - one **search** component and one **results** component.

## Detail

### Search Component

This component should contain two elements:

- 'Login' Text input for entering a String value
- 'Submit' Button for initiating a request to 
`https://api.github.com/search/users?q={login} in:login`, where {login} is the input value

### Results Component

This component should contain a single element:

- Results Table for displaying the results of the User search

The results table has the following requirements:

- Display three columns from the response:
    - `avatar_url`
    - `login`
    - `type`
- Use [Pagination](https://docs.github.com/en/rest/guides/traversing-with-pagination#basics-of-pagination), with **9** items displayed Per_Page
- Allow Sorting, with the `login` column being sorted by default

## UI

The UI should appear modern and simple while following best practices around HTML + CSS/SCSS. Creativity is encouraged, so feel free design the UI in any way you wish. However, the app must be functionally complete. 

## Use-Case

- After the app is launched, the **Search** component is displayed
- The user enters a random String value into to the 'Login' field and clicks the 'Submit' button
- The app sends a http request to `https://api.github.com/search/users?q={login} in:login`, where {login} is the String value entered by the user
- The app then parses the response from the server. If data is returned, the **Results** component should display the fetched values. If there is an issue with the request, then an error message should be displayed.


## Development server - Run the application 
  - `nx run admin:serve:development` or
  - `npm run start` 
  - Navigate to http://localhost:4200/.

## Running unit tests
  - `nx run admin-dashboard-search:test --codeCoverage`
  - `nx run admin-shared-mui:test --codeCoverage`
  
## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/apps/admin` directory. Use the `--prod` flag for a production build.
