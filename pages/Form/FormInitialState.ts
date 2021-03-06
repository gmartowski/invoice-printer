import { FormState } from "./IFormState";

export const formInitialState: FormState = {
  invoiceNumber: '',
  vendorId: 0,
  vendorNIP: 0,
  vendorAddress: '',
  purchaserId: 0,
  purchaserNIP: 0,
  purchaserAddress: '',
  purchaserAccount: 0,
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