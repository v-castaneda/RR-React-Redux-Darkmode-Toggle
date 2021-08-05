import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'

const logger = store => next => async action => {
    console.log('dispatching', store.getState())
    if (typeof action === 'function') {
        action(store.dispatch, store.getState)
    }
    next(action)
}

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})