# OnTheFly-Text-Editor: Progressive Web Applications (PWA)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [User Story/Acceptance Criteria](#user-story-and-acceptance-criteria)
7. [Questions](#questions)

## Description

This application is a single-page deployed text editor that runs in the browser. It implements methods for getting and storing data to an IndexedDB database. It is deployed via Heroku at the link below:

[OTF-Text-Editor: JATE - Just Another Text Editor (Deployed with Heroku)](https://otf-text-editor.herokuapp.com/)

This project features a number of data persistence techniques which serve as redundancy in case one of the options is not supported by the browser. As such, it will also function offline. This application will use a Node.js back end and will emphasize the use of PWA. Using a package called idb (a lightweight wrapper around the IndexedDB API), this project features methods that are useful for storing and retrieving data, just like what it used by companies like Google and other big names. 

### Task Completed

The challenge here was to build a text editor application that would still function, even when offline. By using IndexedDB to create an object store and includes both GET and PUT methods, the application can work without an internet connection. Additionally, it allows it to automatically save content inside the text editor when the DOM window is unfocused. 

This project also uses a service worker with workbox that Caches static assets, babel in order to use async / await, and generates manifest.json using the WebpackPwaManifest plug-in, allowing it to be installed as a Progressive Web Application. It’s important to understand how to build and structure these types of applications. The criteria are documented in the Acceptance Criteria section. 

## Installation

This project is deployed on Heroku, but a local installation can easily be downloaded through said deployement. With that download, it can function offline!

## Usage

This project is meant to provide an easy solution to handling text on the fly. It can save data, delete them, and update them, all done locally. It uses an API used to save the data to persist. 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT license.

## Contributing

To contribute to this repository, simply create a pull request, create issues, or reach out to me (see [Questions](#questions) below). I do my best to ensure that pull requests are up to date. 

## User Story and Acceptance Criteria

### User Story
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

### Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## Questions

If you have any questions, reach out to me through either of the methods below:
- [GitHub - J03B](https://github.com/J03B/)
- [email - (byucrazyfan@gmail.com)](mailto:byucrazyfan@gmail.com)
