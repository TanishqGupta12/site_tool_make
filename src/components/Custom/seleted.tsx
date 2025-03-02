"use client";
import { CustomInputProps } from "@premieroctet/next-admin";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Define the Props type, extending CustomInputProps
type Props = CustomInputProps;

const CustomButton = ({ options, name, onChange, disabled, required }: Props) => {
  const [value, setValue] = useState<string>("");

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
      <Box sx={{ minWidth: 120, border: "none" }} className="ring-nextadmin-border-default dark:ring-dark-nextadmin-border-strong dark:bg-dark-nextadmin-background-subtle flex w-full cursor-default justify-between rounded-md px-3 py-2 text-sm placeholder-gray-500 shadow-sm ring-1">
        <FormControl
          fullWidth
          
        >
          <Select
            labelId="demo-simple-select-label"
            sx={{ border: "none" }}
            id="demo-simple-select"
            value={value}
            label="Select Option"
            required={required}
            disabled={disabled}
            onChange={handleChange} // Use handleChange here
          >
            {options &&
              options.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={value ?? ""} />
    </>
  );
};

export default CustomButton;