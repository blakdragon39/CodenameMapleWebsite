import React from 'react'
import PropTypes from 'prop-types'

import usePendingState from '../hooks/usePendingState'
import shopService from '../../services/shops'

import Error from '../common/Error'
import Pending from '../common/Pending'
import Visibility from '../common/Visibility'

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
    console.log('shop', shop)
    return (
        <>
            { shop.name }
            {
                shop.items.map((item, index) => <div key={index}>{ item.displayName }</div>)
            }
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
