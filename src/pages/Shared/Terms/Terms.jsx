import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h4> Terms and Condintion</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt alias facilis minima doloremque accusamus nobis consequuntur, sequi laborum numquam distinctio labore, omnis iure ipsum nam rem nisi nulla ab.</p>
            <p>Go back to <Link to='/register'>Register</Link>  </p>
        </div>
    );
};

export default Terms;