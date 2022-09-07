import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from './styled-components';
import ShowInfo from  './ShowInfo';

export default function GenderSelect() {

  return (
    <div>
        <br />
        <Link to="/male" name="male" element={<ShowInfo gender="male"/>}>
            <Button>Show Male</Button>
        </Link>
        &nbsp;
        <Link to="/female" name="female" element={<ShowInfo gender="female"/>}>
            <Button>Show Female</Button>
        </Link>

    </div>
  )
    
  
}






