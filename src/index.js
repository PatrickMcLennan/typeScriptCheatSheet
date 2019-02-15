"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
var isOpen = false;
var myName = 'pat';
var myAge = 32.04;
var list = [0, 1, 2];
var me = ['pat', 32, false];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDeigner"] = 1] = "WebDeigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
var job = Job.WebDev;
var phone = 'any god damn thing we want';
// Functions in typeScript
var sayWord = function (word) {
    console.log(word || 'hello');
    return word || 'hello';
};
// sayWord('Pat');
// Default parameters
var defaultSayWord = function (word) {
    if (word === void 0) { word = 'hello'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
};
// defaultSayWord('Pat', 'Patrick');
// Implicit Types
var newName = 'pat';
newName = 'Patrick';
newName = 10;
var newNameTwo = newName;
newNameTwo = 10;
// Union Types
var unionType = 'Pat';
unionType = 'Patrick';
unionType = 10;
var makeMargin = function (x) { return "margin: " + x + "px"; };
// null types
var dog;
dog = 'Lucie';
dog = null;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    return { name: name, age: age };
};
sayName({ name: 'Pat', age: 32 });
sayName({ age: 21, name: 'Pat' });
// Enums
var createNumeric = function (contentType) { return console.log(contentType); };
createNumeric(interfaces_1.TypeNumeric.Quiz);
createNumeric(0);
var createString = function (contentType) { return console.log(contentType); };
createString(interfaces_1.TypeString.Quiz);
// Classes
var Team = /** @class */ (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        var goal = 'goal';
        return goal;
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
