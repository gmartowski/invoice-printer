export interface FormState {
  invoiceNumber: string;
  vendorName: string;
  vendorId: number;
  vendorNIP: number;
  vendorAddress: string;
  vendorPostal: string;
  vendorCity: string;
  vendorAccount: number;
  vendorPhoneNumber: number;
  vendorEmail: string;
  purchaserName: string;
  purchaserId: number;
  purchaserNIP: number;
  purchaserAddress: string;
  purchaserPostal: string;
  purchaserCity: string;
  purchaserAccount: number;
  purchaserPhoneNumber: number;
  purchaserEmail: string;
  dateOfIssue: string | null;
  dateOfCreation: string | null;
  paymentDeadline: string | null;
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