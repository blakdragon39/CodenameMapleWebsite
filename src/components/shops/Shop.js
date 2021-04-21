import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

import usePendingState from '../hooks/usePendingState'
import shopService from '../../services/shops'

import Error from '../common/Error'
import Pending from '../common/Pending'
import Visibility from '../common/Visibility'
import VerticalSpace from '../common/VerticalSpace'
import ItemList from '../items/ItemList'
import './Shop.css'

const Shop = ({ shopId }) => {
    const shopState = usePendingState(null, () => shopService.get(shopId))

    const addMoreShopItems = async () => {
        await shopService.addMoreItems(shopId)
        await shopState.refreshState()
    }

    return (
        <>
            <Error error={shopState.error} />
            <Pending pending={shopState.pending} />
            <Visibility isVisible={shopState.state}>
                <ShopComponent shop={shopState.state} />
                <Button style={{ marginTop: 16 }} onClick={addMoreShopItems}>Add More Items</Button>
            </Visibility>
        </>
    )
}

const ShopComponent = ({ shop }) => {
    return (
        <>
            <h3>{ shop.name }</h3>
            <VerticalSpace height={8} />
            <ItemList items={shop.items} itemComponent={ShopItem} />
        </>
    )
}

const ShopItem = ({ item }) => {
    return (
        <div className='shopItem'>
            <b>{ item.displayName }</b>
            <Button>Buy this!</Button>
        </div>
    )
}

Shop.propTypes = {
    shopId: PropTypes.string.isRequired
}

ShopComponent.propTypes = {
    shop: PropTypes.object
}

ShopItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default Shop
