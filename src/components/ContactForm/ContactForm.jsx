import { useForm } from 'react-hook-form';
// import { useLocalStorage } from 'hooks/useLocalStorage';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from '../Button';

export const ContactForm = () => {
  const nameId = nanoid();
  const numberID = nanoid();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log('data', data);

  console.log(watch('name'));
  console.log(watch('number'));

  //   console.log('Object.values(watch)', Object.values(watch()));

  //   const checkForData = () => {
  //     return Object.values(watch()).every(item => item > 0);
  //   };

  //   console.log('checkForData()', checkForData());

  return (
    <Box
      display="block"
      p={2}
      mb={4}
      bg="bgComponent"
      width="50%"
      borderRadius="normal"
      boxShadow="basic"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          id={nameId}
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          {...register('name', {
            required: true,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
          })}
        />
        {errors.nameRequired && <span>This field is required</span>}
        <Label htmlFor={numberID}>Number</Label>
        <Input
          id={numberID}
          type="tel"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          {...register('number', {
            required: true,
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
          })}
        />
        {errors.numberRequired && <span>This field is required</span>}
        {/* <input type="submit" /> */}
        <Button type="submit">Add contact</Button>
      </Form>
    </Box>
  );
};

// disabled={!data}

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch('example'));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="Query" {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

// export const ContactFormHook = () => {
//   const nameId = nanoid();
//   const numberID = nanoid();

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <Box
//       display="block"
//       p={2}
//       mb={4}
//       bg="bgComponent"
//       width="50%"
//       borderRadius="normal"
//       boxShadow="basic"
//     >
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Label htmlFor={nameId}>Name</Label>
//         <Input
//           type="text"
//           name="name"
//           id={nameId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//         <Label htmlFor={numberID}>Number</Label>
//         <Input
//           type="tel"
//           name="number"
//           id={numberID}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleChange}
//         />
//         <Button type="submit" disabled={!name}>
//           Add contact
//         </Button>
//       </Form>
//     </Box>
//   );
// };

// export class ProtoContactForm extends Component {
//   nameId = nanoid();
//   numberID = nanoid();

//   state = { name: '', number: '' };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Box
//         display="block"
//         p={2}
//         mb={4}
//         bg="bgComponent"
//         width="50%"
//         borderRadius="normal"
//         boxShadow="basic"
//       >
//         <Form onSubmit={this.handleSubmit}>
//           <Label htmlFor={this.nameId}>Name</Label>
//           <Input
//             type="text"
//             name="name"
//             id={this.nameId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleChange}
//           />
//           <Label htmlFor={this.numberID}>Number</Label>
//           <Input
//             type="tel"
//             name="number"
//             id={this.numberID}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//           />
//           <Button type="submit" disabled={!this.state.name}>
//             Add contact
//           </Button>
//         </Form>
//       </Box>
//     );
//   }
// }

ContactForm.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
};
