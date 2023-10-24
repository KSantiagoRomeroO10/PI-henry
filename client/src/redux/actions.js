// actions.js
import axios from 'axios'

// Action Types
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS'
export const FETCH_DRIVERS_FAILURE = 'FETCH_DRIVERS_FAILURE'

// Action Creators
export const fetchDriversSuccess = (drivers) => ({
  type: FETCH_DRIVERS_SUCCESS,
  payload: drivers
})

export const fetchDriversFailure = (error) => ({
  type: FETCH_DRIVERS_FAILURE,
  payload: error
})

export const randomCard = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/get/drivers')
      .then(response => {
        const drivers = response.data.Dates
        const randomDriver = drivers[Math.floor(Math.random() * drivers.length)]
        dispatch(fetchDriversSuccess(randomDriver))
      })
      .catch(error => {
        dispatch(fetchDriversFailure(error.message))
      })
  }
}
