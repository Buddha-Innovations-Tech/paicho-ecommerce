import React from 'react';

//images
import Image from '../../assets/images/cover.jpg';

const index = () => {
  return (
    <>
      <div className='catbox'>
        <figure className='catbox-imageholder'>
          <img src={Image} alt='' />
          <figcaption>Snacks</figcaption>
        </figure>
      </div>
    </>
  );
};

export default index;
