import { Button } from 'pages/pages.styled/Pages.styled';
import React from 'react';

const UserMenu = ({ email }) => {
  return (
    <div>
      <p>{email}</p>
      <Button type="submit">Logout</Button>
    </div>
  );
};

export default UserMenu;
