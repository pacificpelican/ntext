var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//	This page is for launcing the nText app on a local server: npm run app
app.use(bodyParser.json());
//  var mainWindowLoc = express.static(path.join(__dirname, './client'));
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/nedb.js');
require('./server/config/routes.js')(app);

 app.listen(7387, function(){
 	console.log("Server is running at 7387");
 })

const electron = require('electron')
// Module to control application life.
const E_app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 800})

  // and load the index.html of the app.
  //    mainWindow.loadURL(`file://${__dirname}/index.html`)
//  mainWindow.loadURL(mainWindow.loadURL(mainWindowLoc));
//  mainWindow.loadURL('http://localhost:7387');
  mainWindow.loadURL('http://localhost:7387');
//  mainWindow.loadURL(`file://${__dirname}/client/index.html`)

  // Open the DevTools.
//  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
E_app.on('ready', createWindow)

// Quit when all windows are closed.
E_app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// E_app.on('activate', function () {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow()
//   }
// })

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
