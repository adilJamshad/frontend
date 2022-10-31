import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  value: string | undefined;
  handleChange: (e: SelectChangeEvent) => void;
  options: any[];
  placeholder: string;
}

const CustomSelect = ({
  value,
  handleChange,
  options,
  placeholder,
}: SelectProps) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select value={value} onChange={handleChange}>
        {!!placeholder && (
          <MenuItem key={placeholder} value="">
            {placeholder}
          </MenuItem>
        )}
        {options.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
