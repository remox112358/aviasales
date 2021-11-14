import { 
  Sort,
  Filter, 
  AppActions, 
  AppActionType 
} from './type'

export const appSetSort = (payload: Sort): AppActionType => {
  return {
    type: AppActions.APP_SET_SORT,
    payload,
  }
}

export const appSetError = (payload: boolean): AppActionType => {
  return {
    type: AppActions.APP_SET_ERROR,
    payload,
  }
}

export const appSetLoading = (payload: boolean): AppActionType => {
  return {
    type: AppActions.APP_SET_LOADING,
    payload,
  }
}

export const appToggleFilter = (payload: Filter): AppActionType => {
  return {
    type: AppActions.APP_TOGGLE_FILTER,
    payload,
  }
}