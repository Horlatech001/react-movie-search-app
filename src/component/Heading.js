import React from 'react';

const Heading = ({title}) => {
  return (
    <div style={{width:"90%", margin:"auto"}}>
      <h1 style={{fontSize: '18px' }}>{title}</h1>
    </div>
  );
};

export default Heading;
