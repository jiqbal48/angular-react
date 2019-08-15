import {module} from "angular";
import React, {useState} from "react";
import {react2angular} from "react2angular";
import {ThemeProvider, Box, Text} from "pcln-design-system";

const controller = ($scope) => {
    const name = "bob";
    const url = "news.ycombinator.com";
    const sayHi = (name) => {
        alert('whale hello there ' + name + '!');
    };
    $scope.config = {
        name,
        url,
        sayHi
    };
};


const SurveyCards = ({config}) => {
    const [name] = useState(config.name);
    console.log(name);

    return (
        <ThemeProvider>
            <Box p={3} bg='#fff6da' style={{border: '2px solid green', borderRadius: '10px'}}>
                <Text color="blue" onClick={() => config.sayHi(config.name + 'by')}>hi {config.name}</Text>
            </Box>
        </ThemeProvider>
    );
};


module("HelloWorldApp", [])
    .controller("HelloWorldController", controller)
    .component("surveyCards", react2angular(SurveyCards, ['config']));
