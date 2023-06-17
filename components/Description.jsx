import React from 'react';

const Description = ({ Content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html:Content }} />
  );
};

export default Description;