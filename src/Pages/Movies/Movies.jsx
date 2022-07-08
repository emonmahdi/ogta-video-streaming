import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import * as MIcons from "react-icons/md";
import './movies.css'


const Movies = () => {
    return (
        <div className='moviesRoute'>
            <Sidebar />
            <div className="moviesContent">
                <h6> <MIcons.MdOutlineVideoLibrary /> Movies</h6>
                <hr />
            </div>
        </div>
    );
};

export default Movies;