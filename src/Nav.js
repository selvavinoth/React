import React from 'react'
import PropTypes from 'prop-types'

export const Nav = (props) => {
    const listItem = props.Countries.map((country) =>
    <li key={country}>{country}</li>
    );
    return(
        <nav>
            <ul> {listItem} </ul>
        </nav>
    )
}
Nav.propTypes ={
    Countries: PropTypes.array.isRequired,
    number:PropTypes.number.isRequired
}
Nav.defaultProps = {
    Countries: ['TamilNadu'],
 }
export default Nav