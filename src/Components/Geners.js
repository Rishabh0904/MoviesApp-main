import React from 'react'
import ContainedButtons from './Select_genres'
import LatestMovies from './LatestMovies'
import Nav1 from './Nav1'

// zhaw
// ·
// nruh

// https://api.themoviedb.org/3/genre/movie/list?api_key=96ff490d96665070a2efca4f59402be6&language=en-US  //to get genre

// https://api.themoviedb.org/3/discover/movie?api_key=96ff490d96665070a2efca4f59402be6&language=en-US&with_genres=878 //to apply filter




function Geners() {

    function selectedGenreId(data){
        console.log(data);
    }
    
    return (
        <div>
            <Nav1></Nav1>
            <div className='container'>
                <div className='row'>
                    <div className='col-9'>  
                            {
                                <ContainedButtons genre = {selectedGenreId}></ContainedButtons>
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