import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'
function Nav() {
    return (
        <div className='external-nav'>

            
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="navbar-brand"  style={{ color: 'darkcyan' ,paddingLeft:'15px', fontSize:'20' }} >CornFlix 2.O</div> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className='nav-item nav-link active' to='/movies'>Movies</Link>
                        <Link className='nav-item nav-link active' to='/featured'>Featured</Link>                         
                        <Link className='nav-item nav-link active' to='/tvseries'>TV Series</Link>
                        <Link className='nav-item nav-link active' to='/dubbed'>Dubbed</Link>
                        <Link className='nav-item nav-link active' to='/geners'>Geners</Link>
                        <Link className='nav-item nav-link active' to='/request'>Request</Link>
                        <Link className='nav-item nav-link active' to='/hindi'>Upload</Link>
                        <Link className='nav-item nav-link active' to='/about'>About</Link>
                    </div>
                </div>
            </nav>
            <div className='nav-input-container'>
            <input defaultValue="search" className='nav-input' ></input>
            <button className='nav-button'>Search</button>
            </div>
            
    </div>
    )
}

export default Nav

