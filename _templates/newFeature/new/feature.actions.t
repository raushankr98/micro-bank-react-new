---
to: src/features/<%= role %>/<%= h.changeCase.camel(name) %>/store/actions.ts
---
import { AppDispatch } from '../../../../store/store';

export const GET_<%= h.changeCase.upper(role) %>_<%= h.changeCase.upper(name) %>_DATA = 'GET_<%= h.changeCase.upper(name) %>_DATA';

export function Get<%= h.changeCase.pascal(role) %><%= h.changeCase.pascal(name) %> () {
  return (dispatch: AppDispatch) => {
    // perform actions
    dispatch({
      type: GET_<%= h.changeCase.upper(role) %>_<%= h.changeCase.upper(name) %>_DATA,
      payload: {
        // add payload here
      },
    });
  };
};
