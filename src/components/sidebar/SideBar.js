import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import { useUser, useCurrentPet } from '../hooks/userHooks'

import routes from '../../routes'
import Visibility from '../common/Visibility'
import CurrentPet from './CurrentPet'
import Wellbeing from '../pets/wellbeing/Wellbeing'
import './SideBar.css'

const SideBar = () => {
    const user = useUser()
    const currentPet = useCurrentPet()

    return (
        <Visibility isVisible={user != null}>
            <div className='sideBar'>
                <OverlayTrigger
                    placement='right-start'
                    overlay={<PopoverWellbeing wellbeing={currentPet ? currentPet.wellbeing : null} />}>
                    <SideBarCurrentPet currentPet={currentPet} />
                </OverlayTrigger>

                <Link to={routes.toUserId(user.id)} className='sideBarLink'>My Pets</Link>
            </div>
        </Visibility>
    )
}

const SideBarCurrentPet = ({ currentPet, ...props }) => {
    return (
        <Link to={currentPet ? routes.toPetId(currentPet.id) : routes.adoptPet} {...props}>
            <CurrentPet />
        </Link>
    )
}

const PopoverWellbeing = React.forwardRef(({ wellbeing, ...props }, ref) => {
    return (
        <div ref={ref}>
            <Visibility isVisible={wellbeing != null}>
                <Popover id='popoverWellbeing' {...props}>
                    <Wellbeing wellbeing={wellbeing} />
                </Popover>
            </Visibility>
        </div>
    )
})

SideBarCurrentPet.propTypes = {
    currentPet: PropTypes.object
}
SideBarCurrentPet.displayName = 'SideBarCurrentPet'

PopoverWellbeing.propTypes = {
    wellbeing: PropTypes.object
}
PopoverWellbeing.displayName = 'PopoverWellbeing'

export default SideBar
