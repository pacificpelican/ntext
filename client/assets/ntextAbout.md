# [nText](http://ntext.pacificio.com) Text Editor App by [Dan McKeown](http://danmckeown.info)

## About: June 2016


The nText (aka ntext) app is a simple text creation, editing and archiving tool written for the [NodeJS](https://nodejs.org/en/) platform.


### Branches

The [ntext GitHub repo](https://github.com/pacificpelican/ntext) has a few different branches:

[master](https://github.com/pacificpelican/ntext/tree/master): This is the main branch, used for ongoing development of the app.  This branch uses Angular 1, [ExpressJS](http://expressjs.com/), and [NeDB](https://github.com/louischatriot/nedb).

[mongo](https://github.com/pacificpelican/ntext/tree/mongo): This is the branch that represents the earlier state of the app.  It uses MongoDB instead of NeDB.

[nedb-040-beta1](https://github.com/pacificpelican/ntext/tree/nedb-040-beta1): Historical: this branch represents the master branch back when it was at rough parity with the mongo branch.

gh-pages: This is for the [project's web site](http://ntext.pacificio.com) code, hosted at ntext.pacificio.com.


### User Interface

ntext uses web technologies to create a simple UI for creating, updating, archiving and deleting chunks of text.  The front page lists all the posts in the database and gives the user buttons to view, edit and delete each post.

Clicking on the "compose" page takes the user to a text area with a monospace font where the user can enter (or drag) whatever text they want and when the user is done he or she can click the "save" button and the text will be added to the database.

The text creation view (and the "view" texts link aka the front page) has at the bottom of it an app-specific clipboard which uses DOM storage and jQuery to keep the text saved in that box on the client side, allowing the data to sometimes even persist between sessions.

Clicking on the view button takes the user to a perma-link page for the post where CSS is used to turn carriage returns to new lines.  The posts's page also gives the ID and date of creation.

Clicking on the edit button causes the app to grab the current content of the selected post and populate it into a compose form that looks much like the "compose" page but with info about the clicked post; when the user clicks "save" the edited version is saved as a new file.  This leaves it to the user to decide whether to delete the old version, which is not actually edited ('immutable') in this process.

Clicking on the delete button for a post behaves as expected, instantly and without further ado deleting the text from the database.

The UI is built with the [Ryukyu](http://danmckeown.info/code/ryukyu) front-end framework's CSS along with some slight color randomness JavaScript from [joeypc](http://danmckeown.info/code/joeypc).


### Running the app

Before using the app you need to make sure that your dependencies are in place:

`sudo npm install`

There are two ways to get the app running: as a NodeJS application, as mentioned in the [readme](../../../master/readme.md):

`sudo npm run start`

or as an [Electron](http://electron.atom.io/) app (this requires the Electron CLI):

`electron .`

[Due to file system issues, these two different ways of running the app may not always work well when alternating between them.]


### The app, packaged up

A beta version of the app has been packaged up as an Electron app for use on the desktop.

Keep in mind that getting data to come off of the app and into the desktop can be confusing: the typical ctrl-C clipboard maneuvers may not work, but one thing does: highlight the text you want to copy and drag it to the text entry area of a native Mac app like Sublime Text 3.

To download the Electron-packaged version check the [project web site](http://ntext.pacificio.com).

It should be possible for a coder to package up the latest version of the app code--more or less just the way it is--as an Electron app themselves.
