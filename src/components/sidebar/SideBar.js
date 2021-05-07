import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import { useUser, useCurrentPet } from '../hooks/userHooks'

import routes from '../../routes'
import CurrentPet from './CurrentPet'
import Wellbeing from '../pets/wellbeing/Wellbeing'
import ExpandCollapse from '../common/ExpandCollapse'
import './SideBar.css'

const SideBar = () => {
    const user = useUser()
    const currentPet = useCurrentPet()
    const [sideBarOpen, setSideBarOpen] = useState(true)

    const toggleOpen = () => {
        setSideBarOpen(!sideBarOpen)
        //todo retain state in localStorage
    }

    const className = `sideBar ${sideBarOpen ? 'open' : 'closed'}`

    return (
        <div className={className}>
            <OverlayTrigger
                placement='right-start'
                overlay={<PopoverWellbeing wellbeing={currentPet ? currentPet.wellbeing : null} />}>
                <SideBarCurrentPet id='sideBarCurrentPet' currentPet={currentPet} />
            </OverlayTrigger>

            <Link to={routes.toUserId(user.id)} className='sideBarLink'>My Pets</Link>
            <Link to={routes.myItems} className='sideBarLink'>My Items</Link>
            <Link to={routes.shops.wellbeingShop} className='sideBarLink'>Wellbeing Shop</Link>

            <ExpandCollapse
                onClick={toggleOpen}
                isOpen={sideBarOpen} />
        </div>
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
            {
                wellbeing ?
                    <Popover id='popoverWellbeing' {...props}>
                        <Wellbeing wellbeing={wellbeing} />
                    </Popover> : null
            }
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
