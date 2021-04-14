import React from 'react'
import PropTypes from 'prop-types'

import wellbeingImages from '../../../assets/wellbeing/wellbeingImages'
import './Wellbeing.css'

const Wellbeing = ({ wellbeing }) => {
    return (
        <div className='wellbeing'>
            <WellbeingStat stat={wellbeing.hunger} label='Hunger' />
            <WellbeingStat stat={wellbeing.hygiene} label='Hygiene' />
            <WellbeingStat stat={wellbeing.mood} label='Mood' />
        </div>
    )
}

const WellbeingStat = ({ stat, label }) => {
    let statImage

    if (stat > 0) {
        statImage = wellbeingImages.wellbeingGood
    } else if (stat < 0) {
        statImage = wellbeingImages.wellbeingBad
    } else {
        statImage = wellbeingImages.wellbeingNeutral
    }

    return (
        <div className='wellbeingStat'>
            <img src={statImage} alt={label} /> { label }
        </div>
    )
}

Wellbeing.propTypes = {
    wellbeing: PropTypes.object.isRequired
}

WellbeingStat.propTypes = {
    stat: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}

export default Wellbeing
