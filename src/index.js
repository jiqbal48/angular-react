import {module} from "angular";
import React from "react";
import {react2angular} from "react2angular";
import {ThemeProvider, Box, Text} from "pcln-design-system";

const controller = ($scope) => {
    $scope.data = {url: 'https://news.ycombinator.com'};
};


const SurveyCards = ({config}) => {
    console.log('config:', config);
    return (
        <ThemeProvider>
            <Box p={3} bg='#589167'>
                <Text color="blue">hi no config</Text>
            </Box>
        </ThemeProvider>
    );
};


module("HelloWorldApp", [])
    .controller("HelloWorldController", controller)
    .component("surveyCards", react2angular(SurveyCards, ['config']));
