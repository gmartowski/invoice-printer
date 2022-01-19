import { FormState } from "./IFormState";

export const formInitialState: FormState = {
  invoiceNumber: '',
  vendor: '',
  vendorNIP: 0,
  vendorAddress: '',
  purchaser: '',
  purchaserNIP: 0,
  purchaserAddress: '',
  dateOfIssue: '',
  dateOfCreation: '',
  paymentDeadline: '',
  productName: '',
  productAmount: 0,
  nettAmount: 0,
  nettSumAmount: 0,
  vatPercentage: 0,
  vatAmount: 0,
  grossAmount: 0,
  toPay: 0,
  toBePayed: 0,
  payed: 0,
}