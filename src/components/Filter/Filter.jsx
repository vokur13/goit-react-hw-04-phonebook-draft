// import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Label, Input } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const filterID = nanoid();

  const { register, watch } = useForm();

  const watchFields = watch(['filter']);
  onChange(watchFields);

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

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
      <Input id={filterID} type="text" {...register('filter')} />
    </Box>
  );

  //   return (
  //     <form>
  //       <input {...register('firstName', { required: true })} />
  //       <p>{getFieldState('firstName').isDirty && 'dirty'}</p>
  //       <p>{getFieldState('firstName').isTouched && 'touched'}</p>
  //       <button
  //         type="button"
  //         onClick={() => console.log(getFieldState('firstName'))}
  //       >
  //         field state
  //       </button>
  //     </form>
  //   );
};

// export const protoFilterII = ({ onChange }) => {
//   const filterID = nanoid();
//   const {
//     register,
//     watch,
//     //     handleSubmit,
//     //     reset,
//     //     formState: { errors },
//   } = useForm();

//   //   const onSubmit = data => console.log(data);
//   //   console.log(watch('example'));

//   onChange(watch());

//   return (
//     <Box
//       display="block"
//       p={2}
//       mb={3}
//       bg="bgComponent"
//       width="50%"
//       borderRadius="normal"
//       boxShadow="basic"
//     >
//       <Label htmlFor={filterID}>Find contacts by name</Label>
//       <Input id={filterID} type="text" defaultValue="" {...register('value')} />
//     </Box>
//   );
// };

// export const protoFilterI = ({ value, onChange }) => {
//   const filterID = nanoid();

//   return (
//     <Box
//       display="block"
//       p={2}
//       mb={3}
//       bg="bgComponent"
//       width="50%"
//       borderRadius="normal"
//       boxShadow="basic"
//     >
//       <Label htmlFor={filterID}>Find contacts by name</Label>
//       <Input id={filterID} type="text" value={value} onChange={onChange} />
//     </Box>
//   );
// };

Filter.propTypes = {
  onChange: PropTypes.func,
};
