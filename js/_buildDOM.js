"use strict";

let currentDateTime = new Date();

let printDateTime = () => {
    console.log(currentDateTime);
    $('#dateTime').html(currentDateTime);
};

module.exports = { printDateTime };