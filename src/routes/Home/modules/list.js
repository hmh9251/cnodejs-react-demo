// ------------------------------------ Constants
// ------------------------------------
export const SELECT_TAB = 'SELECT_TAB'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

// ------------------------------------ Actions
// ------------------------------------
export function selectTab(tab) {
  return {type: SELECT_TAB, tab}
}

function receivePosts(list) {
  return {type: RECEIVE_POSTS, list}
}

export function fetchPosts(tab) {
  return dispatch => {
    return fetch('http://cnodejs.org/api/v1/topics?tab=' + tab)
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          dispatch(receivePosts(response.data))
        } else {
          dispatch(receivePosts([]))
        }
      })
  }
}

const initialState = {
  tab: 'all',
  success: false,
  list: []
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return Object.assign({}, state, {
        tab: action.tab
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        success: true,
        list: action.list
      });

    default:
      return state;
  }
}