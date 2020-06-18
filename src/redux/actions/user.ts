import {
  REQUEST_USER,
  REQUEST_USER_ERROR,
  REQUEST_USER_SUCCESS,
} from "../constants/user";
import IUser from '../../interfaces/User';


export const requestUser = (name : string) => ({
  type: REQUEST_USER,
  payload : name
});

export const requestUserSuccess = (payload: IUser) => ({
  type: REQUEST_USER_SUCCESS,
  payload,
});

export const requestUserError = () => ({
  type: REQUEST_USER_ERROR,
});
