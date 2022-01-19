import * as yup from "yup";

export const FormSchema = yup.object({
  invoiceNumber: yup.string().required(),
  companyName: yup.string().required(),
  nipNumber: yup.string().required(),
}).required();