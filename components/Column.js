import React from "react";
import { View } from "react-native";
import { PropTypes } from "prop-types";
import AnotherStyle from "./AnotherStyle";

export default function Column({children}) {
    return <View style={AnotherStyle.column}>{children}</View>;
}
Column.propTypes = {
    children: PropTypes.node.isRequired
};