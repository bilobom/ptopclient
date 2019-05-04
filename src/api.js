import io from 'socket.io-client'
const url = 'https://ptopc.herokuapp.com/'
let socket;

export const connectIO =()=>{
        socket = io(url)
        return socket;
}

