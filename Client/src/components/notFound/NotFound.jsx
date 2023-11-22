import React from 'react'
import './notFoundStyle.css'

export const NotFound = () => {
    return(
      <div className='divError'>
        <h1 className='title'>404</h1>
        <h2 className='opps'>OPPss</h2> 
        <h3 className='textError'>Al parecer la pagina que deseas ingresar no `existe` </h3>
        <img src="./src/images/giphy.gif" alt="" className='gif'/>
        <br />
    </div>
    )
}
