import { combineReducers } from 'redux';

import reducer_weather from './reducer_weather.js';

const root_reducer = combineReducers({
    weather: reducer_weather
})

export default root_reducer