var React = require("react");
var reactDOM = require('react-dom');
var MonthRangePicker = require("react-monthrange-picker");
var moment = require('moment');
require('moment-range')

reactDOM.render(<MonthRangePicker />, document.getElementById('content'));


var selectedRange = moment.range(new Date(2015,1,1), new Date(2016,11, 31));

var restrictedRange = moment.range(new Date(2012, 0,1), new Date(2017, 2, 31));

var onApply = function onApply() {
  console.log("apply button clicked");
}

var onCancel = function onCancel() {
  console.log("cancel button clicked");
}

var onRender = function onRender() {
  console.log("app just got rendered");
}

var onYearChange = function onYearChange(year) {
  console.log("year changed to", year);
}


reactDOM.render(<MonthRangePicker direction="left" selectedDateRange={selectedRange} restrictionRange={restrictedRange} onApply={onApply} onCancel={onCancel} onYearChange={onYearChange} direction="left" />, document.getElementById("content1"))
