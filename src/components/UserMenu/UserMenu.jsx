import React from 'react';

const UserMenu = ({ email }) => {
  return (
    <div>
      <p>{email}</p>
      <button type="submit">Logout</button>
    </div>
  );
};

export default UserMenu;
