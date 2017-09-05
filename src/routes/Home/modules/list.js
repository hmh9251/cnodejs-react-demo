// ------------------------------------ Constants
// ------------------------------------
export const SELECT_TAB = 'SELECT_TAB'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CURRENT_PAGE = 'CURRENT_PAGE'

// ------------------------------------ Actions
// ------------------------------------
export function selectTab(tab) {
  return {type: SELECT_TAB, tab}
}

export function setCurrentPage(page) {
  return {type: CURRENT_PAGE, page}
}

function receivePosts(list) {
  return {type: RECEIVE_POSTS, list}
}



export function fetchPosts(tab, page) {
  let limit = 20;
  return dispatch => {
    dispatch(setCurrentPage(page));
    return fetch('http://cnodejs.org/api/v1/topics?limit=' + limit + '&tab=' + tab + '&page=' + page)
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
  page: 1,
  success: false,
  list: []
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return Object.assign({}, state, {
        tab: action.tab
      });
    case CURRENT_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        success: true,
        list: action.list
      });

    default:
      return state;
  }
}