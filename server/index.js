console.time('electron-start');

const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
let mainWnd = null;

const SocketServer = require('wsbash-node-server');
const SocketClient = require('wsbash-node-client');
const PortTest = require('portscanner');
const processArgs = require('minimist')(process.argv.slice(2));

const registerSocketServer = require('./socketBridge');
const dialogConfig = require('./configs/dialog');

let server, client, port;

app.on('ready', ()=>{
  PortTest.findAPortNotInUse(4097, 32768, 'localhost', function(error, p) {
    if(error) console.error(error);
    port = p;
    server = new SocketServer(port);
    client = new SocketClient('ws://localhost:9233');
    registerSocketServer(server, client).then(() => {
      mainWnd = new BrowserWindow(dialogConfig);
    
      mainWnd.loadURL('http://127.0.0.1:16000/public/index.html?port=' + port);
    
      mainWnd.on('ready-to-show', ()=>{
        Menu.setApplicationMenu(null);
        mainWnd.show();
        console.log(processArgs);
        if(processArgs.dev) mainWnd.webContents.openDevTools({ detach:true });
        console.timeEnd('electron-start');
      });
    
      mainWnd.on('closed', () => {
        mainWnd = null;
        process.exit();
      });
    });
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

