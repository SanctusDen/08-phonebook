import { Button } from 'pages/pages.styled/Pages.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';

const UserMenu = ({ email }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <div>
      <p>{email}</p>
      <Button onClick={onLogout}>Log out</Button>
    </div>
  );
};

export default UserMenu;
