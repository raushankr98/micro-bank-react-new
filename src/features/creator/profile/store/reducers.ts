import { ReducerActionProps } from '../../../../shared/utilities/interfaces';
import {
  GET_CREATOR_PROFILE_DATA
} from './actions';

const initialState = {
  // add initial state variables
};

const creatorProfileReducer = (state = initialState, action: ReducerActionProps) => {
  switch (action.type) {
    case GET_CREATOR_PROFILE_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default creatorProfileReducer;
