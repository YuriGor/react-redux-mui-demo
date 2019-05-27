import { BMI_SET } from "../actions/bmi";

const initialState = {
  weight: "",
  height: "",
  age: "",
  sex: "",
  nicotine: false,
  alcohol: false
};

export default function bmi(state = initialState, action) {
  switch (action.type) {
    case BMI_SET:
      // console.log(action);
      let patch = {};
      patch[action.name] = action.value;
      return {
        ...state,
        ...patch
      };
    default:
      return state;
  }
}
