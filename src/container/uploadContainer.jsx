import React, { Component } from 'react'
import { connect } from 'react-redux'
import UploadComponent from '../component/uploadComponent'

export class uploadContainer extends Component {
    render() {
        return (
            <>
                <UploadComponent {...this.props}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(uploadContainer)