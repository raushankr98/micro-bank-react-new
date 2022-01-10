---
to: src/features/<%= role %>/<%= h.changeCase.camel(name) %>/store/reducers.ts
---
import { ReducerActionProps } from '../../../../shared/utilities/interfaces';
import {
  GET_<%= h.changeCase.upper(role) %>_<%= h.changeCase.upper(name) %>_DATA
} from './actions';

const initialState = {
  // add initial state variables
};

const <%= h.changeCase.camel(role) %><%= h.changeCase.pascal(name) %>Reducer = (state = initialState, action: ReducerActionProps) => {
  switch (action.type) {
    case GET_<%= h.changeCase.upper(role) %>_<%= h.changeCase.upper(name) %>_DATA:
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

export default <%= h.changeCase.camel(role) %><%= h.changeCase.pascal(name) %>Reducer;
