import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

interface SelectDetails {
  name: string;
  id: number;
}

const SelectData = ({
                      list,
                      label,
                      labelId,
                      id,
                      handleChange
                    }: { list: SelectDetails[], label: string, labelId: string, id: string, handleChange: any }) => {

  const [state, setState] = useState(0);

  const handleChanges = (value: number) => {
    setState(value)
    handleChange(value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={state}
        label={label}
        onChange={(e) => handleChanges(Number(e.target.value))}
      >
        {
          list.map((item: SelectDetails) =>
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          )
        }

      </Select>
    </FormControl>
  )
}

export default SelectData;