import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const endpoint = 'https://free-to-play-games-database.p.rapidapi.com/api/game'

function* getList(){
    const delay = time => new Promise(resolve => setTimeout(resolve, time))
    try{
        const res = yield axios.get(endpoint + 's', {
            headers: {
                'X-RapidAPI-Key': 'dc690cb938msh800a5ef150e0519p1fc572jsn90dbc2352187', 
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        yield call(delay, 2000)
        yield put({type : 'GET_SUCCESS', payload: res.data}) 
    }
    catch(e){
        yield call(delay, 2000)
        yield put({type: 'GET_FAILED'})
    }
}

function* getDetails(action){
    const { payload } = action
    console.log(payload)
    try{
        const res = yield axios.get(`${endpoint}?id=${payload}`, {
            headers: {
                'X-RapidAPI-Key': 'dc690cb938msh800a5ef150e0519p1fc572jsn90dbc2352187', 
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        yield put({type: 'DETAIL_SUCCESS', payload: res.data})
    }catch(e){
        yield put({type: 'DETAIL_FAILED', payload: e})
    }
}

export function* watchGetData(){
    yield takeEvery('GET_LIST', getList)
}

export function* watchGetDetail(){
    yield takeEvery('GET_DETAIL', getDetails)
}