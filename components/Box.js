import React from "react";
import { Text, View } from "react-native";
import { PropTypes } from "prop-types";
import AnotherStyle from "./AnotherStyle";

export default function Box({children}) {
    return (
        <View style={AnotherStyle.box}>
          <Text style={AnotherStyle.boxText}>{children}</Text>
        </View>
    );
}
Box.propTypes = {
    children: PropTypes.node.isRequired
};