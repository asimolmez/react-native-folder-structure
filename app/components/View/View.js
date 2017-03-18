import React, { PropTypes } from 'react'
import { View } from "react-native";
import style from "./style";

const View = props => {

    const { children, style } = props;

    return (
        <View style={style}>
            {style}
        </View>
    )
}

View.propTypes = {
    style: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}

View.defaultProps = {
    style: style.view
}

export default View