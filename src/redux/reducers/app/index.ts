import { AppState, AppActions, AppActionType } from './type'

export const initialState: AppState = {
  filters: [],
  tickets: [],
  error: false,
  sort: 'cheap',
  loading: false,
}

export const appReducer = (state: AppState = initialState, action: AppActionType): AppState => {
  switch (action.type) {
    case AppActions.APP_SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    }
    default: {
      return state
    }
  }
}