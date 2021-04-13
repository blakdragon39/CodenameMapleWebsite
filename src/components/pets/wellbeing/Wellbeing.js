import React from 'react'
import PropTypes from 'prop-types'

import wellbeingImages from '../../../assets/wellbeing/wellbeingImages'
import './Wellbeing.css'

const Wellbeing = ({ hunger, hygiene, mood }) => {
    return (
        <div className='wellbeing'>
            <WellbeingStat stat={hunger} label='Hunger' />
            <WellbeingStat stat={hygiene} label='Hygiene' />
            <WellbeingStat stat={mood} label='Mood' />
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
    hunger: PropTypes.number.isRequired,
    hygiene: PropTypes.number.isRequired,
    mood: PropTypes.number.isRequired
}

WellbeingStat.propTypes = {
    stat: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}

export default Wellbeing
