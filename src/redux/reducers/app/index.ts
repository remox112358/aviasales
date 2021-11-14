import { 
  Sort,
  AppState, 
  AppActions, 
  AppActionType,
} from './type'

export const initialState: AppState = {
  filters: [],
  tickets: [],
  error: false,
  loading: false,
  sort: Sort.CHEAP,
}

export const appReducer = (state: AppState = initialState, action: AppActionType): AppState => {
  switch (action.type) {
    case AppActions.APP_SET_SORT: {
      return {
        ...state,
        sort: action.payload,
      }
    }
    case AppActions.APP_SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case AppActions.APP_SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    }
    case AppActions.APP_TOGGLE_FILTER: {
      let filters = [...state.filters]

      const filter = action.payload
      const filterIndex = filters.findIndex(item => item === filter)

      if (filterIndex === -1)
        filters.push(filter)
      else
        filters.splice(filterIndex, 1)

      return {
        ...state,
        filters: filters,
      }
    }
    default: {
      return state
    }
  }
}