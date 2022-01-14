import { createContext, Component } from "react";

const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        theme: "dark",
    };

    toggleTheme = () => {
        this.setState((prevState) => {
            return { theme: prevState.theme === "light" ? "dark" : "light" };
        });
    };

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme,
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export { ThemeContextProvider, ThemeContext };
