import React, { useEffect } from 'react'

import usePendingState from '../hooks/usePendingState'
import userItemsService from '../../services/userItems'
import { useUser } from '../hooks/userHooks'

import Error from '../common/Error'
import Pending from '../common/Pending'

const MyItems = () => {
    const user = useUser()
    const itemState = usePendingState([])

    useEffect(async () => {
        itemState.setPending(true)

        itemState.setState(await userItemsService.getItems(user.token, user.id))

        itemState.setPending(false)
    }, [])

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
