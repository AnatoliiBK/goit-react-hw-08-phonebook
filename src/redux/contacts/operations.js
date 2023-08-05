import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { getState, dispatch }) => {
   
    console.log("REL", getState())
    
    const response = await axios.get('https://connections-api.herokuapp.com/contacts');
    const fetchedContacts = response.data;
    
    console.log("FETCH", fetchedContacts)
    
    const uniqueContacts = fetchedContacts.reduce((acc, contact) => {
      const existingContact = acc.find((c) => c.number === contact.number);
      if (!existingContact) {
        acc.push(contact);
      }
      return acc;
    }, []);

    return uniqueContacts;
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { getState }) => {
    const phoneNumber = parsePhoneNumberFromString(newContact.number, 'UA'); 
    newContact.number = phoneNumber.formatInternational();

    const state = getState();
    
    const existingNumberContact = state.contactsUser.contacts.items.find(
      (contact) => contact.number === newContact.number
    );
    const existingNameContact = state.contactsUser.contacts.items.find(
      (contact) => contact.name === newContact.name
    );

    if (existingNumberContact) {
      alert(`Contact with phone number ${newContact.number} already exists.`);
      throw new Error(`Contact with phone number ${newContact.number} already exists.`);
    }

    if (existingNameContact) {
      alert(`Contact with name ${newContact.name} already exists.`);
      throw new Error(`Contact with name ${newContact.name} already exists.`);
    }


    const response = await axios.post('https://connections-api.herokuapp.com/contacts', newContact);

    console.log("ADD", response.data);

    return response.data;
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactId}`);
      console.log("DELL", response.data.id, contactId);
      return response.data.id;
      
    } catch (e) {
      console.log("помилка")
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);