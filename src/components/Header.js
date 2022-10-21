import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
library.add(faEarthAmericas, )

const Header = () => {
  return (
    <div  className='header'>
        <a href="https://maps.google.com/">
        <FontAwesomeIcon icon="fa-solid fa-earth-americas" />
        </a>
        <p>my travel journal.</p>
    </div>
  )
}

export default Header