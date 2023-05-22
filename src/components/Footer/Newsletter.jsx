import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="News Letter"/>
      <h1 className='app__cormorant'>Subscribe Our Newsletter</h1>

    </div>
    
  </div>
);

export default Newsletter;