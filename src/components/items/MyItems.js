import React  from 'react'

import usePendingState from '../hooks/usePendingState'
import userItemsService from '../../services/userItems'
import { useUser } from '../hooks/userHooks'

import Error from '../common/Error'
import Pending from '../common/Pending'

const MyItems = () => {
    const user = useUser()
    const itemState = usePendingState([], () => userItemsService.getItems(user.token, user.id))

    return (
        <div>
            <Error error={itemState.error} />
            <Pending pending={itemState.pending} />
            {
                itemState.state.map((item, index) => <div key={index}>{ item.displayName }</div>)
            }
        </div>
    )
}

export default MyItems
