import actionTypes from "../../actionTypes"
import {createReducer} from "../../helpers/utility";
import {formReducerObject} from "../../helpers/formReducers"


const initialLoginFormState = {
  fields: {
    email: "",
    password: "",
  },
  locked: false,
  hidden: true
}

const reducer = createReducer(initialLoginFormState, formReducerObject(actionTypes.loginForm));

export default reducer;