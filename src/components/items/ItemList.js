import React from 'react'
import PropTypes from 'prop-types'

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
        <div>
            { item.displayName }
        </div>
    )
}

ItemList.propTypes = {
    items: PropTypes.object.isRequired
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default ItemList
