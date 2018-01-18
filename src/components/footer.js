import React from 'react'

const Footer = (props) => {
  return (
    <footer className='footer grid' >
      <nav className='nav'>
        <ul class="social">
            <li className="item item--social"><a className="link" title="Facebook" href=""><span className="facebook">Facebook</span></a></li>
            <li className="item item--social"><a className="link"  title="Twitter" href=""><span className="twitter">Twitter</span></a></li>
            <li className="item item--social"><a className="link" title="Instagram" href=""><span  className="instagram">Instagram</span></a></li>
        </ul>
      </nav>     
      <section className='footer__text'>
        {props.text}
      </section>
    </footer>
  )
}

export default Footer
