"use client";
import { CustomInputProps } from "@premieroctet/next-admin";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Define the Props type, extending CustomInputProps
type Props = CustomInputProps;

const CustomButton = ({ options, value, name, onChange, disabled, required }: Props) => {
  const [currentValue, setValue] = useState<string>(value || ""); // Ensures initial state

  // Handle the select value change
  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);

    if (onChange) {
      onChange({
        target: { value: selectedValue },
      });
    }
  };

  return (
    <>
      <Box
         className="ring-nextadmin-border-default dark:ring-dark-nextadmin-border-strong 
           dark:bg-dark-nextadmin-background-subtle w-full rounded-md text-sm 
           shadow-sm ring-1 ring-gray-300 dark:ring-gray-700 focus:ring-2 
           focus:ring-blue-500"  
      >
        <FormControl fullWidth>
          <Select
            labelId="custom-select-label"
            id="custom-select"
            value={currentValue}
            required={required}
            disabled={disabled}
            onChange={handleChange}
            className="w-full bg-transparent focus:ring-0"
          >
            {options?.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={currentValue} />
    </>
  );
};

export default CustomButton;