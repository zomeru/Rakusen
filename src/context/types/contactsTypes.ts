export interface IContacts {
  data: any;
  error: any;
  loading: boolean;
}

export interface IContactsState {
  getContacts: IContacts;
  createContacts: IContacts;
  deleteContacts: IContacts;
}
