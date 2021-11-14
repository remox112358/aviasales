export enum AppActions {
  APP_SET_SORT = 'APP_SET_SORT',
  APP_SET_ERROR = 'APP_SET_ERROR',
  APP_SET_LOADING = 'APP_SET_LOADING',
  APP_TOGGLE_FILTER = 'APP_TOGGLE_FILTER',
}

export enum Filter {
  ALL,
  NO_TRANSFERS,
  ONE_TRANSFER,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
}

export enum Sort {
  CHEAP,
  QUICK,
  OPTIMAL,
}

export type Flight = {
  date: string,
  origin: string,
  duration: number,
  destination: string,
  stops: Array<string>,
}

export type Ticket = {
  price: number,
  carrier: string,
  segments: Array<Flight>,
}

export type AppState = {
  sort: Sort,
  error: boolean,
  loading: boolean,
  filters: Array<Filter>,
  tickets: Array<Ticket>,
}

export type AppSetSortActionType = {
  type: AppActions.APP_SET_SORT,
  payload: Sort,
}

export type AppSetErrorActionType = {
  type: AppActions.APP_SET_ERROR,
  payload: boolean,
}

export type AppSetLoadingActionType = {
  type: AppActions.APP_SET_LOADING,
  payload: boolean,
}

export type AppToggleFilterActionType = {
  type: AppActions.APP_TOGGLE_FILTER,
  payload: Filter,
}

export type AppActionType = AppSetSortActionType |
                            AppSetErrorActionType |
                            AppSetLoadingActionType |
                            AppToggleFilterActionType