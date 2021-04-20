import React from 'react'
import PropTypes from 'prop-types'

import './ItemList.css'

const ItemList = ({ items }) => {
    return (
        <div>
            {
                items.map((item, index) => <Item item={item} key={index} />)
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
    items: PropTypes.array.isRequired
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default ItemList
