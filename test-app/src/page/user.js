import React, { useState } from 'react';
import { Stack, TextInput, Tooltip } from '@manulife/mux';
import { useSelector } from 'react-redux';
import { setUser } from '../redux/actions'
import { useActions } from '../redux/actions/useActions';


export const User = () => {
  const { user } = useSelector((state) =>({
    user: state.profileReducer.profile
  }));

  const actions = useActions({ setUser });
  // const [firstName, setFirstName] = useState("abc")

  const setFieldValue = (val, e) => {
      actions.setUser({ ...user, [e.target.name]: val });
  };

  return (
    <Stack direction='column'>
      <TextInput
        name='firstName'
        label='First Name'
        placeholder='Enter a value'
        value={user.firstName}
        // value={firstName}
        tooltip={<Tooltip content='Tooltip Content' />}
        onChange={(value, event) => setFieldValue(value, event)}
        // onChange={(value, event) => setFirstName(value)}
      />
      <TextInput
        name='lastName'
        label='Last Name'
        adornment='$'
        placeholder='Enter a value'
        value={user.lastName}
        tooltip={<Tooltip content='Tooltip Content' />}
        onChange={(value, event) => setFieldValue(value, event)}
      />
    </Stack>
  );
};
