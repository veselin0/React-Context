import React, {createContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const ThemeContext = createContext();
const {Provider, Consumer} = ThemeContext;

ReactDOM.render(
    <Provider value={"light"}>
        <App />
    </Provider>,
    document.getElementById("root")
);
