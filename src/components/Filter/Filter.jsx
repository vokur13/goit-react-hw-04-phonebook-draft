// import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Label, Input } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const filterID = nanoid();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  //   const onSubmit = data => console.log(data);

  //   console.log(watch('example'));

  onChange(watch());

  return (
    <Box
      display="block"
      p={2}
      mb={3}
      bg="bgComponent"
      width="50%"
      borderRadius="normal"
      boxShadow="basic"
    >
      <Label htmlFor={filterID}>Find contacts by name</Label>
      <Input
        id={filterID}
        type="text"
        defaultValue=""
        {...register('example')}
        // value={value}
        // onChange={onChange}
      />
    </Box>
  );
};

export const protoFilter = ({ value, onChange }) => {
  const filterID = nanoid();

  return (
    <Box
      display="block"
      p={2}
      mb={3}
      bg="bgComponent"
      width="50%"
      borderRadius="normal"
      boxShadow="basic"
    >
      <Label htmlFor={filterID}>Find contacts by name</Label>
      <Input id={filterID} type="text" value={value} onChange={onChange} />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
