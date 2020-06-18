import {
  REQUEST_USER_SUCCESS,
  REQUEST_USER_ERROR,
} from "../constants/user";

const initialState = {
  data: {},
  isRequestSuccess: false,
  isRequestError: false,
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isRequestSuccess: true,
        isRequestError: false,
      };
    case REQUEST_USER_ERROR:
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
