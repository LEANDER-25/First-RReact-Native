import React from "react";
import { View } from "react-native";
import { PropTypes } from "prop-types";
import AnotherStyle from "./AnotherStyle";

export default function Row({children}) {
    return <View style={AnotherStyle.row}>{children}</View>;
}
Row.propTypes = {
    children: PropTypes.node.isRequired
};