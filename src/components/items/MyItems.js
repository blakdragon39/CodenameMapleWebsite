import React, { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

import usePendingState from '../hooks/usePendingState'
import userItemsService from '../../services/userItems'
import { useUser } from '../hooks/userHooks'

import Visibility from '../common/Visibility'

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
            <Visibility isVisible={itemState.error}>
                <Alert variant='danger'>{ itemState.error }</Alert>
            </Visibility>
            <Visibility isVisible={itemState.pending}>
                <Spinner animation='border' variant='secondary'/>
            </Visibility>
            {
                itemState.state.map((item, index) => <div key={index}>{ item.displayName }</div>)
            }
        </div>
    )
}

export default MyItems
