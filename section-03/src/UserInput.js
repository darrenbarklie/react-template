import React from 'react';

const UserInput = (props) => (
  <div>
    
    <input type="text" onChange={props.update} value={props.username} />
    
  </div>
);

export default UserInput;
