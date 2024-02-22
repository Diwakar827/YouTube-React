import React from 'react';
import Button from './Button';


const Buttonlist = () => {
    return (
        <div className='flex'>
           <Button name='All'></Button> 
           <Button name="Music"></Button> 
           <Button name="videos"></Button> 
           <Button name="nataks"></Button> 
        </div>
    );
};

export default Buttonlist;