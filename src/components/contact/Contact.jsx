import PropTypes from 'prop-types';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { nameStyle, name, btnDelStyle } from 'components/styles';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {      
      // await axios.get(`https://connections-api.herokuapp.com/contacts/${contact.id}`);     
      dispatch(deleteContact(contact.id));
      console.log("ВИДАЛЕННЯ", contact, contact.id )
    } catch (error) {
      console.error("Помилка", error);
    }
  };

  return (
    <li style={nameStyle}>
      <p style={name}>{contact.name} :</p>
       {contact.number}
      <button onClick={handleDelete} style={btnDelStyle}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};