import { ConnectStore } from "./connectStore";
import React from 'react'
import AppContext from "../../context";


export const appState = {
    connectStore: new ConnectStore()
}

const useAppState = () => React.useContext(AppContext);

export default useAppState;
