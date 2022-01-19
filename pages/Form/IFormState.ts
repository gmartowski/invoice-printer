export interface FormState {
  invoiceNumber: string;
  vendor: string;
  vendorNIP: number;
  vendorAddress: string;
  purchaser: string;
  purchaserNIP: number;
  purchaserAddress: string;
  dateOfIssue: string;
  dateOfCreation: string;
  paymentDeadline: string;
  productName: string;
  productAmount: number;
  nettAmount: number; // cena netto
  nettSumAmount: number // wartość netto
  vatPercentage: number;
  vatAmount: number;
  grossAmount: number;
  toPay: number; // razem do zapłaty
  toBePayed: number; // pozostałio do zapłaty
  payed: number; // zapłacono
}