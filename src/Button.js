import React from "react";
import ThemeContext from "./themeContext";

const Button = () => {
    return (
        <ThemeContext>
            {(theme) => (
                <button className={`${theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContext>
    );
};

export default Button;
