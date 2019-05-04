import React, { Component } from 'react'
import '../App.css';
import QrCode from 'qrcode.react'
import { initIO } from '../redux/actionCreators'
import { connect } from "react-redux";

class QrViewer extends Component {
    state = {
        id: null,
        data: null
    }
    componentWillMount() {
        this.props.initIO()
    }
    componentDidMount(){
        console.log('qrViewer did mount')
    }
    componentWillReceiveProps(nextProps) {
        const { id, data,remoteId } = nextProps.socket
        if (id) this.setState({ id })
        if (data!==undefined) this.setState({ data })
        if(remoteId) this.props.history.push('transfer')
    }
    render() {
        const { id, data } = this.state
        return (
            <div className="App">
                <header className="App-header" size={200}>
                    {id && (<QrCode includeMargin renderAs='svg' value={id} />)}
                    <p>
                        Scan Qr Code to coppy
        </p>
                    {data && (
                        <p>
                            {data}
                        </p>
                    )}
                </header>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    socket: state.socket
})
const mapDispatchToProps = {
    initIO
}
export default connect(mapStateToProps, mapDispatchToProps)(QrViewer)

