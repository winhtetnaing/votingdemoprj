# votingdemoprj

# View Demo at https://votingdemo.herokuapp.com/

Voting Demo with Node.js

* clone with project
* go to folder directory 
* npm install ( node module will generate  after install)
* run >> node index.js

The directory structure as below:
 * The data/ folder holds the nedb database files. They are plain text files holding JSON documents - you can even open them in a text editor and edit them.
 * The node_modules/ folder is created automatically by npm when you run the npm install command. This is where the downloaded libraries are saved.
 * The public/ folder contains the JavaScript, CSS, images and other assets that should be accessible by a browser. Put only things that you want people to see there.
 * The views/ folder contains the templates that are used by the application. They are run through the handlebars templating engine beforehand, as you will see when we discuss the routes file next time.
 * The package.json file describes the dependencies of your app (which libraries from the npm registry have to be downloaded), the name, license of the code and other information. We will be creating this file in the next section.
 * The .js files contain the logic of the application. They are organized as node.js modules, and are included by index.js, which is also the entry point of the application. You run the app by executing the command node index.js.
