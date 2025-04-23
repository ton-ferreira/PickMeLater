import { TextField, FormControl, Box, Typography } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

function FormTextInput({
  name,
  control,
  label,
  rules,
  multiline,
  rows,
}: FieldValues) {
  return (
    <Box>
      <Typography fontWeight="bold" variant="overline">
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={fieldState.invalid}>
            <TextField
              {...field}
              multiline={multiline}
              rows={rows}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              fullWidth
            />
          </FormControl>
        )}
      />
    </Box>
  );
}

export default FormTextInput;
