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

enum Action {
    CHANGE_PASSWORD = 'change password', EDIT_PROFILE = 'update profile', DEFAULT = 'default'
}

let action: Action = Action.EDIT_PROFILE;
console.log(action)
