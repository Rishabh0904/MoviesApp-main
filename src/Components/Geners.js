import React from 'react'
import ContainedButtons from './Select_genres'
import LatestMovies from './LatestMovies'
import Nav1 from './Nav1'


function Geners() {
    
    return (
        <div>
            <Nav1></Nav1>
            <div className='container'>
                <div className='row'>
                    <div className='col-9'>  
                            {
                                <ContainedButtons></ContainedButtons>
                            }
                    </div>
                    <div className='col-3'>
                            {
                                <LatestMovies></LatestMovies>
                            }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Geners