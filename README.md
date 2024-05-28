# Description
Briefly describe what the code is supposed to do.

This repo is prototype generated with chatGPT 3.5. It provide web interface for scraping certain infromation for programming from YMCA website. It basically input the link of website and output csv file in certain format.

Does the code work? If not, what's broken.

The start scrape button does not work as expected. It should scrape the data in format from website for example (https://www.ymcachicago.org/program-search/?locations=LV&locations=MT&locations=SS&programs=AQ-Aquatics&keywords=).

How is the code better than what the team currently has?

It has nice header at least?

How is the code worse?

It does not function at all.

How many tries did it take to get the code? Main struggles?

I try twice to fix bug, but it still gives what I commit to repo.

Overall impression of the experience

chatGPT is powerful tool to give a template but sometimes it does not work correctly. So developers have to examine the code, which costs more than just write component by themselves.

# React Vitest Template

A starter template for building React apps with Vite. Includes Vitest for unit testing and
a hefty .gitignore file.

# Requirements

Node 20 or greater.

## Usage

```
mkdir your-app-name
cd your-app-name
npx degit criesbeck/react-vitest
npm install
```
If the third step hangs after printing ``> cloned criesbeck/react-vitest#HEAD``, 
just control-C to exit then run ``npm install``.

## Test

Verify that the initial app works. Run

```
npm start
```

and open the URL displayed.

Verify that the unit tests work with

```
npm test
```

Two tests should run and pass. 

## Scripts

**package.json** defines the following scripts:

| Script           | Description                                         |
| -----------------| --------------------------------------------------- |
| npm start        | Runs the app in the development mode.               |
| npm run dev      | Runs the app in the development mode.               |
| npm run build    | Builds the app for production to the `dist` folder. |
| npm run serve    | Serves the production build from the `dist` folder. |
| npm test         | Starts a Jest-like test loop                        |
| npm run coverage | Runs the tests, displays code coverage results      |


## Git

If everything is working, set up [your local and remote repositories](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).

## Folder Structure

```
your-app-name
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Credits

React-Vitest built and maintained by [Chris Riesbeck](https://github.com/criesbeck).

Inspired by [SafdarJamal/vite-template-react](https://github.com/SafdarJamal/vite-template-react).
Expanded to include Vitest and some sample tests.

Thanks to Rich Harris for [degit](https://www.npmjs.com/package/degit).

Gitignore file created with [the Toptal tool](https://www.toptal.com/developers/gitignore/api/react,firebase,visualstudiocode,macos,windows).


## License

This project is licensed under the terms of the [MIT license](./LICENSE).
