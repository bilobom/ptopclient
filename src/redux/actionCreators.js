import io from 'socket.io-client';

let remoteServer = 'http://localhost:4000/';

if (process.env.NODE_ENV == 'production') {
    remoteServer = 'https://ptopc.herokuapp.com';
}
let socket;

export const initIO = () => dispatch => {
    socket = io(remoteServer, { transports: ['websocket', 'polling', 'flashsocket'] });
    socket.on('connect', () => {
        dispatch(updateSocketId(socket.id));
    });
    socket.on('disconnect', () => {
        dispatch(updateSocketId(null));
    });
    socket.on('error', error => {
        //updateSocketId(null);
        console.log('error', error);
    });
    socket.on('data', data => {
        dispatch(updateData(data))
    })
    socket.on('wantToConnect', receiverId => {
        dispatch(updateRemoteId(receiverId))
    })
};
const updateSocketId = socketId => {
    return {
        type: 'UPDATE_ID',
        payload: socketId,
    };
};
const updateRemoteId = (receiverId) => {
    return {
        type: 'UPDATE_REMOTE_ID',
        payload: receiverId
    }
}
const updateData = (data) => {
    return {
        type: 'UPDATE_DATA',
        payload: data
    }
}

// export const handleQrCode = receiverId => dispatch => {
//     socket.emit('wantToSend', receiverId, receiverId + 'want to connect')
//     dispatch({
//         type: 'UPDATE_REMOTE_ID',
//         payload: receiverId
//     })
// };


export const sendData = (receiverId, data) => dispatch => {
    socket.emit('wantToSend', receiverId, data)
    dispatch({ type: 'NOTHING' })
}
