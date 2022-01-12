import Button from "./Button";
import Header from "./Header";

import ThemeContext from "./themeContext";

function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => <Button theme={theme} />}
            </ThemeContext.Consumer>

            <Button theme="light" />
        </div>
    );
}

export default App;
