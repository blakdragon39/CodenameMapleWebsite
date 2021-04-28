import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'react-bootstrap/Modal'

import Surround from '../common/Surround'

import './UseItemModal.css'

const UseItemModal = ({ visible, setVisible}) => {

    return (
        <Modal
            show={visible}
            onHide={() => setVisible(false)}
            centered={true}>
            <Surround>
                Use this item on who?
            </Surround>
        </Modal>
    )
}

UseItemModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
}

export default UseItemModal
