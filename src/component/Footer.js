import React from "react"

import facebook from '../images/icons/Facebook Icon.png'
import insta from '../images/icons/Instagram Icon.png'
import github from '../images/icons/GitHub Icon.png'
import twitter from '../images/icons/Twitter Icon.png'

export default function Footer() {
    return(
        <div className="card--footer">
            <a href="#">
                <img src={twitter} />
            </a>
            <a href="#">
                <img src={facebook} />
            </a>
            <a href="#">
                <img src={insta}  />
            </a>
            <a href="#">
                <img src={github} />
            </a>
        </div>
    )
}