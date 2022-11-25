import { all } from 'redux-saga/effects'
import { watchGetData, watchGetDetail } from './data'

export default function* rootSaga(){
    yield all([
        watchGetData(),
        watchGetDetail()
    ])
}