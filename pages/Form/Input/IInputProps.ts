export interface IInputProps {
  error: any,
  register: any,
  id: string,
  label: string,
  helperText: string,
  variant: string
  handleValue: (A: string, B: string) => void;
}