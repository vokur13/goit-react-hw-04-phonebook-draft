import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from '../Button';

export const ContactForm = () => {
  const nameId = nanoid();
  const numberID = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

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
      <Form>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
        <Label htmlFor={numberID}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={numberID}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
        {/* <Button type="submit" disabled={!this.state.name}>
          Add contact
        </Button> */}
      </Form>
    </Box>
  );
};

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
  onSubmit: PropTypes.func.isRequired,
};
