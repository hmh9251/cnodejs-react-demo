// ------------------------------------ Constants
// ------------------------------------
export const TOPIC_ID = 'TOPIC_ID';
export const SHOW_DETAIL = 'SHOW_DETAIL';

// ------------------------------------ Actions
// ------------------------------------

export function setTopicId(id) {
  return {type: TOPIC_ID, id};
}

function getShowDetail(data) {
    return {type: SHOW_DETAIL, data};
}

export function getShowDetailFetch(id) {
  return dispatch => {
    return fetch('http://cnodejs.org/api/v1/topic/' + id)
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          dispatch(getShowDetail(response.data))
        } else {
          dispatch(getShowDetail({}))
        }
      })
  }
}

const initialState = {
  id: '',
  data: {}
}

export default function detailReducer(state = initialState,  action) {
  switch(action.type) {
    case TOPIC_ID:
      return Object.assign({}, state, {
        id: action.id
      })
    case SHOW_DETAIL:
      return Object.assign({}, state, {
        data: action.data
      });
    
    default:
      return state;
  }
}

