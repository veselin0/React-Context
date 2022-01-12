import {createContext, Component} from "react";

const {Provider, Consumer} = createContext();

class ThemeContextProvider extends Component {
    render() {
        return (
            <Provider value={"dark"}>
                {this.props.children}
            </Provider>
        );
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer};