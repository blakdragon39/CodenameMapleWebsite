import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useUser } from '../hooks/userHooks'
import usePendingState from '../hooks/usePendingState'
import userPetsService from '../../services/userPets'
import userItemsService from '../../services/userItems'
import routes from '../../routes'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal'
import Error from '../common/Error'
import Pending from '../common/Pending'
import Surround from '../common/Surround'
import VerticalSpace from '../common/VerticalSpace'

import './UseItemModal.css'
import Visibility from '../common/Visibility'

const UseItemModal = ({ item, visible, setVisible}) => {
    const history = useHistory()
    const user = useUser()
    const petState = usePendingState([], () => userPetsService.getPets(user.id))
    const [selectedPet, setSelectedPet] = useState(null)

    const [useItemPending, setUseItemPending] = useState(false)
    const [useItemError, setUseItemError] = useState(null)

    const dismissModal = () => {
        setSelectedPet(null)
        setVisible(false)
    }

    const useItem = async () => {
        setUseItemPending(true)

        try {
            await userItemsService.useItemOnPet(user.token, user.id, item.id, selectedPet.id)
            dismissModal()
            history.replace(routes.withReload(routes.myItems))
            history.replace(routes.myItems)
            //todo reload pet in navbar
        } catch (e) {
            console.e(e)
            setUseItemPending(false)
            setUseItemError(e.response.data.message)
        }
    }

    return (
        <Modal
            show={visible}
            onHide={dismissModal}
            centered={true}>
            <Surround>
                Use this item on who?
                <VerticalSpace height={16} />
                <Error error={petState.error} />
                <Error error={useItemError} />
                <Pending pending={petState.pending} />
                <ListGroup>
                    {
                        petState.state.map(pet =>
                            <PetChoice
                                pet={pet}
                                selectedPet={selectedPet}
                                setSelectedPet={setSelectedPet}
                                key={pet.id} />
                        )
                    }
                </ListGroup>
                <Visibility isVisible={selectedPet}>
                    <VerticalSpace height={16} />
                    <Button
                        onClick={useItem}
                        disabled={useItemPending}>
                        { `Use on ${selectedPet ? selectedPet.name : ''}?` }
                    </Button>
                </Visibility>
            </Surround>
        </Modal>
    )
}

UseItemModal.propTypes = {
    item: PropTypes.object,
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
}

const PetChoice = ({ pet, selectedPet, setSelectedPet }) => {
    return (
        <ListGroup.Item
            active={selectedPet && pet.id === selectedPet.id}
            action
            onClick={() => setSelectedPet(pet)}>
            { pet.name }
        </ListGroup.Item>
    )

}

PetChoice.propTypes = {
    pet: PropTypes.object.isRequired,
    selectedPet: PropTypes.object,
    setSelectedPet: PropTypes.func.isRequired
}

export default UseItemModal
