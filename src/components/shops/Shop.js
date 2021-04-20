import React from 'react'
import PropTypes from 'prop-types'

import usePendingState from '../hooks/usePendingState'
import shopService from '../../services/shops'

import Error from '../common/Error'
import Pending from '../common/Pending'
import Visibility from '../common/Visibility'
import ItemList from '../items/ItemList'

const Shop = ({ shopId }) => {
    const shopState = usePendingState(null, () => shopService.get(shopId))

    return (
        <>
            <Error error={shopState.error} />
            <Pending pending={shopState.pending} />
            <Visibility isVisible={shopState.state}>
                <ShopComponent shop={shopState.state} />
            </Visibility>
        </>
    )
}

const ShopComponent = ({ shop }) => {
    return (
        <>
            { shop.name }
            <ItemList items={shop.items} />
        </>
    )
}

Shop.propTypes = {
    shopId: PropTypes.string.isRequired
}

ShopComponent.propTypes = {
    shop: PropTypes.object
}

export default Shop
