ReadME for [nText](http://djmblog.com/ntext) MongoDB version

nText [henceforth ntext] is a text editor written in JavaScript by [Dan McKeown](http://danmckeown.info).  
ntext requires [NodeJS](https://nodejs.org/en/) 4+ and [MongoDB](https://www.mongodb.com/) 3+.
AngularJS and angular-route 1.5.x are also required and are currently included in the /client directory.
In order to set it up, make sure the code is unpacked in your file system.
Now use your command line to go to the directory where the ntext code is.
Run this command to make sure you have your server-side dependencies:
`sudo npm install`
Once you have done that, you need to get the Mongo database server running:
`mongod`
Now you will need to open another window in your command line terminal at the ntext directory, and type in this to start the NodeJS server:
`sudo npm run start`
Once this is running, you can go to [local host 7387](http://localhost:7387) in your browser and use the ntext app to create and update texts and take advantage of the DOM clipboard.
