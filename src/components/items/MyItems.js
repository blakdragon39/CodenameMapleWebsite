import React, { useState } from 'react'
import PropTypes from 'prop-types'
import usePendingState from '../hooks/usePendingState'
import userItemsService from '../../services/userItems'
import { useUser } from '../hooks/userHooks'

import Button from 'react-bootstrap/Button'

import Error from '../common/Error'
import Pending from '../common/Pending'
import UseItemModal from './UseItemModal'
import VerticalSpace from '../common/VerticalSpace'
import Visibility from '../common/Visibility'

import './MyItems.css'

const MyItems = () => {
    const user = useUser()
    const itemState = usePendingState([], () => userItemsService.getItems(user.token, user.id))
    const [selectedItemIndex, setSelectedItemIndex] = useState()
    const [useItemModalVisible, setUseItemModalVisible] = useState(false)

    return (
        <div>
            <Error error={itemState.error} />
            <Pending pending={itemState.pending} />
            <div>
                {
                    itemState.state.map((item, index) =>
                        <Item
                            item={item}
                            index={index}
                            selectedItemIndex={selectedItemIndex}
                            setSelectedItemIndex={setSelectedItemIndex}
                            setUseItemModalVisible={setUseItemModalVisible}
                            key={index} />)
                }
            </div>
            <UseItemModal setVisible={setUseItemModalVisible} visible={useItemModalVisible} />
        </div>
    )
}

const Item = ({ item, index, selectedItemIndex, setSelectedItemIndex, setUseItemModalVisible }) => {
    const className = index === selectedItemIndex ? 'myItem selectedItem' : 'myItem'

    return (
        <div className={className} onClick={() => setSelectedItemIndex(index)}>
            <div><b>{ item.displayName }</b></div>
            <div className='myItemDescription'>
                - { item.description }
            </div>
            <Visibility isVisible={index === selectedItemIndex}>
                <VerticalSpace height={16} />
                <Button onClick={() => setUseItemModalVisible(true)}>Use this item!</Button>
            </Visibility>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    selectedItemIndex: PropTypes.number.isRequired,
    setSelectedItemIndex: PropTypes.func.isRequired,
    setUseItemModalVisible: PropTypes.func.isRequired
}

export default MyItems
