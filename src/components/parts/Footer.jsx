import React, { Component } from 'react';
import { text } from '../../text/text';
import {Link} from 'react-router-dom'
import { CONTACT_ROUTE } from '../../tools/routes';
const Footer = () => {
    return <footer className='footer'>
        <div className='footer__figure'></div>
        <section className='footer__content flex__column'>
<h3>{text.FOOTER_H3}</h3>
<p>{text.FOOTER_P1}</p>
    <p>
        {text.FOOTER_P2}
        <a href="mailto:denis.b651@gmail.com">denis.b651@gmail.com</a>
    </p>
<p>{text.FOOTER_P3} <Link to ={CONTACT_ROUTE}>{text.FOOTER_LINK}</Link></p>

        </section>
    </footer>   
}
export default Footer