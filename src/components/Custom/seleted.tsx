"use client"; 

import { CustomInputProps } from "@premieroctet/next-admin";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = CustomInputProps;


interface CustomButtonProps {
  options: string[]; // The options prop will be an array of strings
}
const CustomButton: React.FC<CustomButtonProps> = ({ options }) => {
  const [value, setvalue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setvalue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, border:'none' }}>
      <FormControl fullWidth className="ring-nextadmin-border-default dark:ring-dark-nextadmin-border-strong dark:bg-dark-nextadmin-background-subtle flex w-full cursor-default justify-between rounded-md px-3 py-2 text-sm placeholder-gray-500 shadow-sm ring-1">
        <Select
          labelId="demo-simple-select-label"
          sx={{ border:'none' }}
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomButton;