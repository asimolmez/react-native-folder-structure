export const types = {
  AUTO_LOGIN: 'AUTH/AUTH_AUTO_LOGIN',
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE'
}

export const initialState = {
  user: null,
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return { ...state, isLoading: true, error: null }

    case types.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, user: action.user }

    case types.SIGNUP_FAILURE:
      return { ...state, isLoading: false, error: action.error }

    default:
      return state
  }
}

export const actions = {
  signIn: (email, password) => ({ type: SIGNUP_REQUEST, email, password })
}