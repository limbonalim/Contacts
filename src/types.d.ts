export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export type FormContact = Omit<Contact, 'id'>

export interface EditData {
  id: string;
  contact: FormContact;
}

export interface ApiData {
  [id: string]: FormContact;
}

