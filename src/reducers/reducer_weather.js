import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    console.log('Action Recieved', action)
    if(action.type === FETCH_WEATHER) {
        // dont push. return a new complete array. always.
        // return state.push( action.payload.data )

        // dosent mutate old. makes new array with old and new. new preffered
        return state.concat([ action.payload.data ])
    }
    return state;
}