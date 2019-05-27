import { SHOW_WIP } from "../actions/main";

const initialState = {
  showWIP: true
};

export default function main(state = initialState, action) {
  switch (action.type) {
    case SHOW_WIP:
      // console.log(action);
      return {
        ...state,
        ...{
          showWIP: action.showWIP
        }
      };
    default:
      return state;
  }
}
