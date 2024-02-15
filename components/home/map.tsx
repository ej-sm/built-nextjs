import React from 'react';

const Map = () => {


  return (
    <div className='mx-auto'>
      <div className="md:py-16 py-10 bg-primary">
        <h1 className="md:text-4xl text-xl text-black font-bold text-center"> “ We Serve Our Queenstown, Central Otago Community” </h1>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387681.9706734987!2d-74.25987599590594!3d40.69767000599274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1644916832570!5m2!1sen!2sin" width="100%" height="600px"   loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Map;
