export enum AppActions {
  APP_SET_ERROR = 'APP_SET_ERROR',
  APP_SET_LOADING = 'APP_SET_LOADING',
}

export enum Filter {
  ALL = -1,
  NO_TRANSFERS = 0,
  ONE_TRANSFER = 1,
  TWO_TRANSFERS = 2,
  THREE_TRANSFERS = 3,
}

export type Sort = 'cheap' | 'quick'

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

export type AppSetErrorActionType = {
  type: AppActions.APP_SET_ERROR,
  payload: boolean,
}

export type AppSetLoadingActionType = {
  type: AppActions.APP_SET_LOADING,
  payload: boolean,
}

export type AppActionType = AppSetErrorActionType |
                            AppSetLoadingActionType