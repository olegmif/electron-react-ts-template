import path from "path";
import {isDev} from "./util.js";
import {app} from "electron";

export function getPreloadPath() {
    return path.join( app.getAppPath(), isDev() ? '.' : '..', 'dist-electron/preload.cjs' );
}

export function getIUPath() {
    return path.join(app.getAppPath() + '/dist-react/index.html')
}