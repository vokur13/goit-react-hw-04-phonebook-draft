import { useState, useEffect, useMemo } from 'react';
import { useList } from 'react-use';
import { Box } from '../components/Box';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { initailContacts } from 'utils/contacts';
// import { Demo } from 'components/FilterDemo';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, initailContacts);
  const [query, setQuery] = useState('');
  //   const [list, { filter }] = useList(() => contacts);

  function formSubmitHandler({ name, number }) {
    const checkName = contacts.some(item =>
      item.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    checkName
      ? alert(`${name} is already in contacts`)
      : setContacts([{ id: nanoid(), name, number }, ...contacts]);
  }

  function onFilterChange([value]) {
    if (!value) {
      setQuery('');
    } else {
      setQuery(value);
    }
  }

  useEffect(() => {
    if (!query) {
      setContacts(contacts);
    } else {
      let newContacts = [...contacts].filter(item => item.name.includes(query));
      console.log('newContacts', newContacts);
      setContacts(newContacts);
    }

    return () => {
      setContacts(contacts);
    };
  }, [contacts, query, setContacts]);

  //   function getFilteredItem(query) {
  //     if (!query) {
  //       setContacts(contacts);
  //     } else {
  //       let newContacts = [...contacts].filter(item =>
  //         item.name.toLowerCase().trim().includes(query)
  //       );
  //       setContacts(newContacts);
  //     }
  //   }

  //   useEffect(() => {
  //     filter(item => item.name.toLowerCase().trim().includes(query));
  //   }, [contacts, filter, query]);

  //   const filteredContacts = useMemo(
  //     () =>
  //       contacts.filter(item => item.name.toLowerCase().trim().includes(query)),
  //     [contacts, query]
  //   );

  //   const useChangeFilter = ([value]) => {
  //     useEffect(() => {
  //       if (value) {
  //         setContacts(
  //           contacts.filter(item =>
  //             item.name.toLowerCase().trim().includes(value.toLowerCase().trim())
  //           )
  //         );
  //       }
  //       return () => {};
  //     }, [value]);
  //   };

  function deleteItem(itemID) {
    setContacts(contacts.filter(item => item.id !== itemID));
  }

  return (
    <Box width={1} p={4} bg="bgBasic" as="main">
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} />
      <ContactList onDelete={deleteItem} list={contacts} />
      {/* <button
        onClick={() =>
          filter(item => item.name.toLowerCase().trim().includes(query))
        }
      >
        Filter even values
      </button> */}

      {/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
      {/* <div>
        {filteredContacts.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div> */}
    </Box>
  );
};

// export class protoApp extends Component {
//   state = {
// contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     if (load(STORAGE_KEY)) {
//       this.setState({ contacts: load(STORAGE_KEY) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       save(STORAGE_KEY, contacts);
//     }
//   }

//   formSubmitHandler = ({ name, number }) => {
//     console.log(name, number);
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const checkName = this.state.contacts.some(item =>
//       item.name.toLowerCase().includes(contact.name.toLowerCase())
//     );

//     checkName
//       ? alert(`${contact.name} is already in contacts`)
//       : this.setState(({ contacts }) => ({
//           contacts: [contact, ...contacts],
//         }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   getFilteredItems = () => {
//     const { contacts, filter } = this.state;
//     const normilizedFilter = filter.toLowerCase();
//     return contacts.filter(item =>
//       item.name.toLowerCase().includes(normilizedFilter)
//     );
//   };

//   deleteItem = itemID => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(item => item.id !== itemID),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredItem = this.getFilteredItems();

//     return (
//       <Box width={1} p={4} bg="bgBasic" as="main">
//         <h1>Phonebook</h1>
//         <ContactForm onFormSubmit={this.formSubmitHandler} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList onDelete={this.deleteItem} list={filteredItem} />
//       </Box>
//     );
//   }
// }

// =====================================

//   const [contacts, setContacts] = useState(
//     () =>
//       JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ]
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);
