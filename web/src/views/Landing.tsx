import React from 'react'
import logoImg from '../images/logo.svg'
import { FiArrowRight } from 'react-icons/fi'
import '../styles/pages/landing.scss'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happpy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>Porto Alegre</strong>
            <span>Rio Grande do Sul</span>
          </div>

          <Link to="/map" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Landing
