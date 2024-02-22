import React from 'react';
import Buttonlist from './Buttonlist';
import VideoContainer from './VideoContainer';


const Maincontainer = () => {
    return (
        <div className='col-span-11'>
            <Buttonlist></Buttonlist>
            <VideoContainer></VideoContainer>
           
        </div>
    );
};

export default Maincontainer;