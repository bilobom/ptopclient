import { combineReducers } from 'redux';

const socketReducer = (socket = {}, action) => {
    switch (action.type) {
        case 'UPDATE_ID':
            return {
                ...socket,
                id: action.payload,
            };
        case 'UPDATE_REMOTE_ID':
            return {
                ...socket,
                remoteId: action.payload
            }
        case 'UPDATE_DATA':
            return {
                ...socket,
                data: action.payload
            }
        default:
            return socket;
    }
};

const rootReducer = combineReducers({
    socket: socketReducer,
});
export default rootReducer
