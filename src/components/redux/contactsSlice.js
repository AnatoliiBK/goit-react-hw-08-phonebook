import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { getState, dispatch }) => {
   
    console.log("REL", getState())
    
    const response = await axios.get('https://64b3a5a00efb99d862683852.mockapi.io/contacts');
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
    // const existingContact = state.contacts.items.find(
    //   (contact) => contact.number === newContact.number
    //   // (contact) => contact.number === newContact.number && contact.name === newContact.name
    // );
    // if (existingContact) {
    //   alert(`Contact with phone number ${newContact.number} already exists.`);
    //   throw new Error(`Contact with phone number ${newContact.number} already exists.`);
    // }    
    const existingNumberContact = state.contacts.items.find(
      (contact) => contact.number === newContact.number
    );
    const existingNameContact = state.contacts.items.find(
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


    const response = await axios.post('https://64b3a5a00efb99d862683852.mockapi.io/contacts', newContact);

    console.log("ADD", response.data);

    return response.data;
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`https://64b3a5a00efb99d862683852.mockapi.io/contacts/${contactId}`);
      console.log("DELL", response.data.id, contactId);
      return response.data.id;
      
    } catch (e) {
      console.log("помилка")
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const initialState = Object.freeze({
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
        // state.contacts.items = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
