import Button from "./Button";
import Header from "./Header";

import {ThemeContextConsumer} from "./themeContext";

function App() {
    return (
        <div>
            <Header />
            <ThemeContextConsumer>
                {theme => <Button theme={theme} />}
            </ThemeContextConsumer>
        </div>
    );
}

export default App;
