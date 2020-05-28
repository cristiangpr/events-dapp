import { FETCH_EVENT, NEW_EVENT } from './types';

export const fetchEvent = () => dispatch => {
  fetch('http://localhost/api/updates')
    .then(res => res.json())
    .then(event =>
      dispatch({
        type: FETCH_EVENT,
        payload: event
      })
    );
};

export const createEvent = eventData => dispatch => {
  fetch('http://localhost/api/updates', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
    .then(res => res.json())
    .then(event =>
      dispatch({
        type: NEW_EVENT,
        payload: event
      })
    );
};