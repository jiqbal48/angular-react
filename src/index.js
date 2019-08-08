import {module} from "angular";
import React from "react";
import {react2angular} from "react2angular";
import {ThemeProvider, Text} from "pcln-design-system";


const MyText = () => <Text color="blue">hmm..</Text>;
const Box = (props) => {
    console.log('props.color:', props);
    return (<h1 style={{color: props.color}}>what a wonderful world</h1>);
};


module("HelloWorldApp", [])
    .controller("HelloWorldController", function ($scope) {
        $scope.greeting = "Hello World";
    })
    .component("box", react2angular(Box, ['style']))
    .component("themeProvider", react2angular(ThemeProvider))
    .component("myText", react2angular(MyText, ['color']));
