import { AppDispatch } from '../../../../store/store';

export const GET_CREATOR_PROFILE_DATA = 'GET_PROFILE_DATA';

export function GetCreatorProfile () {
  return (dispatch: AppDispatch) => {
    // perform actions
    dispatch({
      type: GET_CREATOR_PROFILE_DATA,
      payload: {
        // add payload here
      },
    });
  };
};
