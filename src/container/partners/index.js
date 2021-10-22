import React from 'react'
import { Box, } from '@chakra-ui/layout'
import styles from './style.module.css'

import unilag from '../../assets/img/university-of-lagos-logo-38976CB5C4-seeklogo 1.png'
import uniben from '../../assets/img/Uniben-Logo-301x300 1.png'
import ou from '../../assets/img/ou_logo_0 1.png'
import lasu from '../../assets/img/lasu 1.png'
import cambridge from '../../assets/img/cambridge.png'

function Partners() {
    const partners = [
        {
            name: "LAGOS STATE UNIVERSITY",
            logo : lasu
        },
        {
            name: "UNIVERSITY OF LAGOS",
            logo : unilag
        },
        {
            name: "UNIVERSITY OF CAMBRIDGE",
            logo : cambridge
        },
        {
            name: "UNIVERSITY OF OKLAHOMA",
            logo : ou
        },
        {
            name: "UNIVERSITY OF BENIN",
            logo : uniben
        },
    ]
    return (
        <div className={styles.partners}>
            <p className={styles.introtext}>Trusted by 100+ instituitions worldwide</p>
        <div className={styles.schools}>
        {
            partners.map((partner, index)=>
             <div key={partner.logo} className={styles.school}>
                 <img src={partner.logo} alt="" />
                 <p>{partner.name}</p>
             </div>
            )
        }
        
        </div>
        </div>
    )
}

export default Partners

{/* <Box as="button" borderRadius="full" bg="black" color="white" px={4} h={8}>
  Button
</Box> */}