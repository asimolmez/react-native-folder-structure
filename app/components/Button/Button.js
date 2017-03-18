import React, { PropTypes } from 'react'
import { TouchableOpacity } from "react-native";
import style from "./style";

const Button = props => {

    const { text, onPress } = props;

    return (
        <TouchableOpacity style={props.style} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    style: React.PropTypes.object,
    onPress: React.PropTypes.func.isRequired,
    text: React.PropTypes.string
}

Button.defaultProps = {
    style: style.button,
    text: "BUTTON DEFAULT TEXT"
}

export default Button