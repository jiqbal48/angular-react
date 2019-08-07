import { module } from "angular";
import React from "react";
import { react2angular } from "react2angular";

const Box = () => <h1>hello world!!</h1>;

module("HelloWorldApp", [])
  .controller("HelloWorldController", function($scope) {
    $scope.greeting = "Hello World";
  })
  .component("box", react2angular(Box));
