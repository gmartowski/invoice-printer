export interface FormInputData {
  id: string,
  label: string,
  helperText: string,
  variant: string,
  register: { name: string, isRequired: boolean }
}

export const formData: FormInputData[] = [
  {
    id: "invoiceNumber",
    label: "invoiceNumber",
    helperText: "invoiceNumber jest wymagany",
    variant: "outlined",
    register: { name: "invoiceNumber", isRequired: true }
  },
  {
    id: "purchaser",
    label: "NIP",
    helperText: "NIP jest wymagany",
    variant: "outlined",
    register: { name: "purchaser", isRequired: true }
  },
  {
    id: "vendor",
    label: "Nazwa firmy",
    helperText: "NNazwa firmy jest wymagana",
    variant: "outlined",
    register: { name: "vendor", isRequired: true }
  },
  {
    id: "vendorNIP",
    label: "vendorNIP",
    helperText: "NIP jest wymagany",
    variant: "outlined",
    register: { name: "vendorNIP", isRequired: true }
  },

  {
    id: "vendorAddress",
    label: "vendorAddress",
    helperText: "vendorAddress jest wymagany",
    variant: "outlined",
    register: { name: "vendorAddress", isRequired: true }
  },
  {
    id: "purchaserNIP",
    label: "purchaserNIP",
    helperText: "purchaserNIP jest wymagany",
    variant: "outlined",
    register: { name: "purchaserNIP", isRequired: true }
  },
  {
    id: "purchaserAddress",
    label: "purchaserAddress",
    helperText: "purchaserAddress jest wymagany",
    variant: "outlined",
    register: { name: "purchaserAddress", isRequired: true }
  },
  {
    id: "dateOfIssue",
    label: "dateOfIssue",
    helperText: "dateOfIssue jest wymagany",
    variant: "outlined",
    register: { name: "dateOfIssue", isRequired: true }
  },
  {
    id: "dateOfCreation",
    label: "dateOfCreation",
    helperText: "dateOfCreation jest wymagany",
    variant: "outlined",
    register: { name: "dateOfCreation", isRequired: true }
  },
  {
    id: "paymentDeadline",
    label: "paymentDeadline",
    helperText: "paymentDeadline jest wymagany",
    variant: "outlined",
    register: { name: "paymentDeadline", isRequired: true }
  },
  {
    id: "productName",
    label: "productName",
    helperText: "productName jest wymagany",
    variant: "outlined",
    register: { name: "productName", isRequired: true }
  },
  {
    id: "productAmount",
    label: "productAmount",
    helperText: "productAmount jest wymagany",
    variant: "outlined",
    register: { name: "productAmount", isRequired: true }
  },
  {
    id: "nettAmount",
    label: "nettAmount",
    helperText: "nettAmount jest wymagany",
    variant: "outlined",
    register: { name: "nettAmount", isRequired: true }
  },
  {
    id: "nettSumAmount",
    label: "nettSumAmount",
    helperText: "nettSumAmount jest wymagany",
    variant: "outlined",
    register: { name: "nettSumAmount", isRequired: true }
  },
  {
    id: "vatPercentage",
    label: "vatPercentage",
    helperText: "vatPercentage jest wymagany",
    variant: "outlined",
    register: { name: "vatPercentage", isRequired: true }
  },
  {
    id: "vatAmount",
    label: "vatAmount",
    helperText: "vatAmount jest wymagany",
    variant: "outlined",
    register: { name: "vatAmount", isRequired: true }
  },
  {
    id: "grossAmount",
    label: "grossAmount",
    helperText: "grossAmount jest wymagany",
    variant: "outlined",
    register: { name: "grossAmount", isRequired: true }
  },
  {
    id: "toPay",
    label: "toPay",
    helperText: "toPay jest wymagany",
    variant: "outlined",
    register: { name: "toPay", isRequired: true }
  },
  {
    id: "toBePayed",
    label: "toBePayed",
    helperText: "toBePayed jest wymagany",
    variant: "outlined",
    register: { name: "toBePayed", isRequired: true }
  },
  {
    id: "payed",
    label: "payed",
    helperText: "payed jest wymagany",
    variant: "outlined",
    register: { name: "payed", isRequired: true }
  },
]

