export interface FormInputData {
  id: string,
  label: string,
  helperText: string,
  placeholder: string,
  variant: string,
  register: { name: string, isRequired: boolean }
}

export const formData: FormInputData[] = [
  {
    id: "invoiceNumber",
    label: "invoiceNumber",
    placeholder: "Numer faktury",
    helperText: "invoiceNumber jest wymagany",
    variant: "outlined",
    register: { name: "invoiceNumber", isRequired: true }
  },
  {
    id: "productAmount",
    label: "productAmount",
    placeholder: "Ilość",
    helperText: "productAmount jest wymagany",
    variant: "outlined",
    register: { name: "productAmount", isRequired: true }
  },
  {
    id: "nettAmount",
    label: "nettAmount",
    placeholder: "Kwota netto",
    helperText: "nettAmount jest wymagany",
    variant: "outlined",
    register: { name: "nettAmount", isRequired: true }
  },
]

