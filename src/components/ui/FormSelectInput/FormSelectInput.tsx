import { Select, MenuItem, FormControl, Typography, Box } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

function FormSelectInput({
  name,
  control,
  label,
  rules,
  options,
}: FieldValues) {
  return (
    <Box>
      <Typography variant="overline" fontWeight="bold">
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={fieldState.invalid}>
            <Select {...field}>
              {options?.map((option: string) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
}

export default FormSelectInput;
