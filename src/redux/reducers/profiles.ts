import {
  REQUEST_PROFILES_SUCCESS,
  REQUEST_PROFILES_ERROR,
} from "../constants/profiles";

const initialState = {
  data: [],
  isRequestSuccess: false,
  isRequestError: false,
};

export default function todos(state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_PROFILES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isRequestSuccess: true,
        isRequestError: false,
      };
    case REQUEST_PROFILES_ERROR:
      return {
        ...state,
        data: [],
        isRequestSuccess: false,
        isRequestError: true,
      };
    default:
      return state;
  }
}
