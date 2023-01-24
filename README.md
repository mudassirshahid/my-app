# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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



<!-- COMMANDS -->

npx create-react-app my-app
cd my-app
npm start


<!-- NOTES -->

node modules for Install Packages

<!-- PUBLIC FOLDER -->
robot.txt file which is used for SEO
manifest.json file which is used to provide meta data to a device when you're react powered web app is installed on it.

Most imp file index.html

<!-- SRC FOLDER -->

index.js or app.js which are used torender the root components of the app.

app.css contains the styles for the app.js components.
index.css contains the styles to use in the entire app.
app.test.js and setuptests.js and the reportwebtitles.js are files related to the apps performance and testing.

The logo.svg file is displayed on the start page of the default app when the app is displayed in the browser on the local host.

<!-- MOST IMP FILE IN SRC FOLDER INDEX.JS -->

index.js this file imports everything that this react app needs to render a working react app.

<!-- EXPLORE ROOT FILES OF THE FOLDER  -->

Root files are additional files that are found in the root of the project folder itself and include a gitignore file, two json files and a readme file.

<!-- .gitignore file -->

.gitignore file is using version control and it's used to specify what files and folders must be excluded from a project. it's imp to note that this file is not specific to react. this means that other systems use this file too.

<!-- Readme.md file -->

Readme.md file is a markdown file that gives some basic information on this project.Developers use this when they want to share the project's code on sites like github.

<!-- package.json file -->

package.json file lists information pertaining to my app, which allows npm to run several scripts and performs various tasks in the app itself

<!-- package-lock.json file  -->

package-lock.json file holds the list of all dependencies with a specific versions. The package.json file helps npm rebuild the app on another machine. Or if we delete the node modules folder with all the files that our project needs to run, the package-lock.json file has all the information for npm to be able to rebuild those files reliably. This file is there to ensure the npm tracks all the modules installations properly.

<!-- BUILDING COMPONENTS -->

At this point, there's no need to complicate things. You have the Nav component, the Promo component, the Intro1, Intro2, and the Intro3 component. Finally, there's also a Footer.js component.

This means you've fully planned the app, based on some best practices as suggested by the official React docs website, and based on the level of complexity of the project itself. Since this project is relatively simple, this structure feels right.

In this reading, you’ll just build all the components inside the components folder, and then, in the upcoming lesson items, import them into the App.js file.

Building Components
For now, let’s just build those components. After you've added the components folder, you’ve also added all the functional component files. Since they are all currently empty, you can start adding them, one by one.

Heres' the contents of the Nav.js file:

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;


Next, you can focus on the Promo.js file:

function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;


Once you’ve finished the promo section, you can focus on the Intro components.

Here's Intro1.js:

function Intro1() {
    return (
        <div className="blog-post-intro">
            <h2>I've become a React developer!</h2>
            <div>
                <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro1;


Here's the code for the Intro2.js component:

function Intro2() {
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro2;

You can finish the previews for my blog posts with the code for Intro3.js component:

function Intro3() {
    return (
        <div className="blog-post-intro">
            <h2>What's the best way to style your React apps?</h2>
            <div>
                <p>There are so many options to choose from. Here's a high-level overview of the popular ones.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro3;

There's just one more thing left to code, the Footer component, so here it is:

function Footer() {
    return (
        <div className="copyright">
            <p>Made with love by Myself</p>
        </div>
    );
};

export default Footer;

Now that you have completed all the components for the app, here are a few more interesting things about the syntax.

These are:

The use of the className attribute in JSX

The use of separate components for repetitive code

Where are all the props?

Why was I not using the <a> element for empty links?

Discussing the Syntax
Now let’s briefly discuss the four bullet points above.

Why use the className attribute in the JSX syntax?

Well, with JSX, it looks like HTML so much that it's easy to forget that it's actually JavaScript code - not HTML.

While regular HTML does indeed have a class attribute, which is used to list one or more CSS classes to be used on a given HTML element, this cannot really work in JSX. The reason is that JSX is a special kind of JavaScript syntax, and the word class is a reserved keyword in JSX. That's why the React team had to make a compromise and so className is used in JSX to list one or more CSS classes to be used on a given element or component.

But why use Intro1.js, Intro2.js, and Intro3.js? Isn't one of the tenets of coding the DRY approach - that is, the "Don't repeat yourself" approach?

Indeed, it is. However, there are still a few concepts to discuss before you learn how to re-use a single component with variations in its content. This has to do with data in components, but don’t worry, we’ll be getting to that later.

The third question is about the props object. It has been mentioned before, but so far it hasn't been used. It hasn’t been used in this example either.

The answer to this question has to do with the next lesson, titled Component Use and Styling. In this lesson, you’ll see in practice how you can make components work better, with the help of props.

The final question is about not using the <a> element for empty links in my app.

The answer here depends on whether those links are "internal" - inside an app, or "external", meaning, leading to some external link, such as https://www.coursera.org. If the links are internal to the app - as they are envisioned here - using the <a> tag is simply not the React way of doing things. You'll learn why that is the case when discussing the use of React Router.


<!-- Conclusion: -->
Having finished this reading, you have now learned about the software development approach, detailing the creation of separate associated files, the requirements gathering, and the subsequent folder structure to be created.

<!-- TWO TYPES OF EXPORTS -->

like to export App.js file two ways:

<!-- Default exports -->

export default App;

The Default exports is used when the function name is the same as the file name.

<!-- Name exports  -->

export {App}

Name exports are used when you want the function name to be different from the the file name.

