import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './Sagas'
import rootReducer from './Reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store