import axios from 'axios'
import { store } from '../redux/store'

import { 
  appSetLoading, 
  appSetSearchID, 
} from '../redux/reducers/app/actions'

const url = 'https://front-test.beta.aviasales.ru/'

type ApiType = {
  init: () => Promise<void>,
  load: () => Promise<void>,
}

/**
 * Application API service.
 */
const API: ApiType = {

  /**
   * Initialization.
   */
  init: (): Promise<void> => {
    store.dispatch(appSetLoading(true))

    return new Promise((resolve, reject) => {
      axios
        .get(url + 'search')
        .then(response => {
          store.dispatch(appSetSearchID(response.data.searchId))

          resolve()
        })
        .catch(error => {
          reject()
        })
        .finally(() => {
          store.dispatch(appSetLoading(false))
        })
    })
  },

  /**
   * Tickets loading.
   */
  load: (): Promise<void> => {
    store.dispatch(appSetLoading(true))
    
    return new Promise((resolve, reject) => {  
      axios
        .get(url + 'tickets', {
          params: {
            searchId: store.getState().app.searchID,
          }
        })
        .then(response => {
          console.log(response.data)

          resolve()
        })
        .catch(error => {
          reject()
        })
        .finally(() => {
          store.dispatch(appSetLoading(false))
        })
    })
  }

}

export default API