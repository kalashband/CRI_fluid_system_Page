

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <div className='footer-product'>
                <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
                <p>
                    CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE| PETROCHEMICAL & REFINERIES | SOLAR | BUILDING HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
                </p>

            </div>
            <div className="footer">
                <div className="contact "><FontAwesomeIcon icon={faSquarePhone} style={{ color: "#ffffff", }} /> Toll Free 1800 200 1234</div>
                <div className="social"><a href=""><FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#ffffff", }} /> www.facebook.com/cripumps</a></div>
                <div className="website"> <a href=""> <FontAwesomeIcon icon={faGlobe} style={{ color: "#fcfcfc", }} /> www.crigroups.com</a></div>
            </div>
        </>
    )
}

export default Footer;