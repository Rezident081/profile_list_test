import {
  REQUEST_PROFILES,
  REQUEST_PROFILES_ERROR,
  REQUEST_PROFILES_SUCCESS,
} from "../constants/profiles";
import IProfile from '../../interfaces/Profile';

export const requestProfiles = () => ({
  type: REQUEST_PROFILES,
});

export const requestProfilesSuccess = (payload: IProfile[]) => ({
  type: REQUEST_PROFILES_SUCCESS,
  payload,
});

export const requestProfilesError = () => ({
  type: REQUEST_PROFILES_ERROR,
});
