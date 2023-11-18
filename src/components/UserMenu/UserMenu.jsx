import { ButtonLogOut, DivLogOut } from 'pages/pages.styled/Pages.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authreducer';

const UserMenu = ({ email }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);

  const onLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <DivLogOut>
      <p>{user.email}</p>
      <ButtonLogOut onClick={onLogout}>Log out</ButtonLogOut>
    </DivLogOut>
  );
};

export default UserMenu;
