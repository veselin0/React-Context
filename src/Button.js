import React from "react";
import PropTypes from "prop-types";

const Button = ({theme}) => {
    return <button className={`${theme}-theme`}>Switch Theme</button>
}

Button.propTypes = {theme: PropTypes.oneOf(["light", "dark"])};

Button.defaultProps = {theme: "light"};


export default Button;
