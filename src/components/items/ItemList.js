import React from 'react'
import PropTypes from 'prop-types'

import './ItemList.css'

const ItemList = ({ items, itemComponent }) => {
    return (
        <div>
            {
                items.map((item, index) => itemComponent
                    ? { itemComponent }
                    : <Item item={item} key={index} />)
            }
        </div>
    )
}

const Item = ({ item }) => {
    return (
        <div className='item'>
            <div><b>{ item.displayName }</b></div>
            <div className='itemDescription'>
                - { item.description }
            </div>
        </div>
    )
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    itemComponent: PropTypes.node
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default ItemList
