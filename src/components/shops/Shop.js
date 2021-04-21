import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

import usePendingState from '../hooks/usePendingState'
import { useUser } from '../hooks/userHooks'
import shopService from '../../services/shops'

import Error from '../common/Error'
import Pending from '../common/Pending'
import Visibility from '../common/Visibility'
import VerticalSpace from '../common/VerticalSpace'
import './Shop.css'

const Shop = ({ shopId }) => {
    const user = useUser()
    const shopState = usePendingState(null, () => shopService.get(shopId))

    const addMoreShopItems = async () => {
        await shopService.addMoreItems(shopId)
        await shopState.refreshState()
    }

    const buyItem = async (itemId) => {
        await shopService.buyItem(shopId, itemId, user.id, user.token)
        await shopState.refreshState()
    }

    return (
        <>
            <Error error={shopState.error} />
            <Pending pending={shopState.pending} />
            <Visibility isVisible={shopState.state}>
                <ShopComponent shop={shopState.state} buyItem={buyItem} />
                <Button style={{ marginTop: 16 }} onClick={addMoreShopItems}>Add More Items</Button>
            </Visibility>
        </>
    )
}

const ShopComponent = ({ shop, buyItem }) => {
    return (
        <div>
            <h3>{ shop.name }</h3>
            <VerticalSpace height={8} />
            {
                shop.items.map((item, index) => <ShopItem item={item} buyItem={buyItem} key={index} />)
            }
        </div>
    )
}

const ShopItem = ({ item, buyItem }) => {
    const onItemClick = () => buyItem(item.id)

    return (
        <div className='shopItem'>
            <b>{ item.displayName }</b>
            <Button onClick={onItemClick}>Buy this!</Button>
        </div>
    )
}

Shop.propTypes = {
    shopId: PropTypes.string.isRequired
}

ShopComponent.propTypes = {
    shop: PropTypes.object,
    buyItem: PropTypes.func.isRequired
}

ShopItem.propTypes = {
    item: PropTypes.object.isRequired,
    buyItem: PropTypes.func.isRequired
}

export default Shop
