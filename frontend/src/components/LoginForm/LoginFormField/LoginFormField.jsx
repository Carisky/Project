import React from 'react';
import { TextField, InputAdornment, Tooltip } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import useTheme from "../../../hooks/useTheme";
import { useMediaQuery } from "../../../hooks/useMediaQuery.js";

export default function LoginFormField({ label, value, error, onChange }) {
	const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 430px)");

  return (
    <TextField
      sx={{
        marginTop: '10px',
        width: isMobile ? "90%" : "380px",
        borderRadius: isMobile ? "12px" : "",
        backgroundColor: theme.backgroundText,
      }}
      id={`outlined-${label.toLowerCase()}`}
      label={label}
      type={label}
      variant="outlined"
      value={value} // Двойное связывание: отображение значения
      onChange={onChange} // Передача функции напрямую
      error={Boolean(error)} // Показывает ошибку
      helperText={error || ''} // Текст ошибки
      InputProps={{
        endAdornment: error && (
          <InputAdornment position="end">
            <Tooltip title={error} arrow>
              <ErrorIcon color="error" />
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  );
}

