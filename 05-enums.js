// enum Action {
//     CHANGE_PASSWORD, EDIT_PROFILE, DEFAULT
// }
// let action: Action;
// action = Action.DEFAULT;
// action = Action.CHANGE_PASSWORD;
// action = Action.EDIT_PROFILE;
// console.log(action);
// let value = Action[1];
// console.log(value);
var Action;
(function (Action) {
    Action["CHANGE_PASSWORD"] = "change password";
    Action["EDIT_PROFILE"] = "update profile";
    Action["DEFAULT"] = "default";
})(Action || (Action = {}));
var action = Action.EDIT_PROFILE;
console.log(action);
