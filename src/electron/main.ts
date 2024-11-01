import { app, BrowserWindow } from "electron";
import path from "path";
import {ipcMainHandle, isDev} from "./util.js";
import {getStaticData, pollResources} from "./resourceManager.js";
import {getIUPath, getPreloadPath} from "./pathResolver.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
        }
    });
    if (isDev()) {
        mainWindow.loadURL("http://localhost:5123");
    } else {
        mainWindow.loadFile(getIUPath());
    }

    pollResources(mainWindow);

    ipcMainHandle('getStaticData', () => {
        return getStaticData();
    })
})

