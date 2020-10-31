import React from 'react';
import UserInfo from './UserInfo';

function CreateUser() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <h1>Create Account</h1>
      <UserInfo type="create" />
    </>
  );
}

export default CreateUser;
