import actionTypes from "../../actionTypes"
import {createReducer} from "../../helpers/utility";
import {formReducerObject} from "../../helpers/formReducers"


const initialState = {
  fields: {
    password: "",
    passwordConfirm: "",
  },
  locked: false,
  hidden: false
}

const reducer = createReducer(initialState, formReducerObject(actionTypes.passwordResetSubmitForm));

export default reducer;