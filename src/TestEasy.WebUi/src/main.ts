const url = require("url");
const path = require("path");
const { ConnectionBuilder } = require("electron-cgi");
import { protocol, app, BrowserWindow } from "electron";

// let connection = new ConnectionBuilder()
//   .connectTo(
//     "dotnet",
//     "run",
//     "--project",
//     "../TestEasy.WebApi/TestEasy.WebApi.csproj"
//   )
//   .build();

  let connection = new ConnectionBuilder()
  .connectTo(
    "./backend/netcoreapp3.1/TestEasy.WebApi.exe"
  )
  .build();

connection.onDisconnect = () => {
  console.log("ipc connection lost");
};

connection.send("ipc-ack", "TestEasy-WebUI", (response: any) => {
  console.log(response);
  //connection.close();
});

let window: BrowserWindow | null;

const createWindow = () => {
  const WEB_FOLDER = "";
  const PROTOCOL = "file";

  const isRelativePath = (url: string): Boolean => {
    let normalPath = path.normalize(url).substr(1);
    if (normalPath.length < __dirname.length) return true;
    return normalPath.substr(0, __dirname.length) !== __dirname;
  };

  protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
    // // Strip protocol
    let url = request.url.substr(PROTOCOL.length + 1);

    // Build complete path for node require function
    if (isRelativePath(url) === true) {
      url = path.join(__dirname, WEB_FOLDER, url.substr(6));
    }
    // Replace backslashes by forward slashes (windows)
    // url = url.replace(/\\/g, '/');
    url = path.normalize(url);
    callback(url);
  });

  window = new BrowserWindow({ width: 800, height: 600 });

  window.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: PROTOCOL + ":",
      slashes: true
    })
  );

  window.on("closed", () => {
    window = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (window === null) {
    createWindow();
  }
});
