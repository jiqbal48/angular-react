import {module} from "angular";
import React from "react";
import {react2angular} from "react2angular";
import {ThemeProvider, Box, Text} from "pcln-design-system";

const controller = ($scope) => {
    const name = "bob";
    const url = "news.ycombinator.com";
    const sayHi = (name) => {
        alert('Hi ' + name + '!');
    };
    $scope.config = {
        name,
        url,
        sayHi
    };
};


const SurveyCards = ({config}) => {
    console.log('config in react comp:', config);
    return (
        <ThemeProvider>
            <Box p={3} bg='#fff6da'>
                <Text color="blue" onClick={(name) => config.sayHi(name)}>hi {config.name}</Text>
            </Box>
        </ThemeProvider>
    );
};


module("HelloWorldApp", [])
    .controller("HelloWorldController", controller)
    .component("surveyCards", react2angular(SurveyCards, ['config']));
