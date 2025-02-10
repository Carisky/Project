import React from 'react';
import { TextField, InputAdornment, Tooltip } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

export default function FormNewArticle({ label, value, error, onChange }) {
  return (
    <TextField
      sx={{
        marginTop: '10px',
        width: '380px',
      }}
      id={`outlined-${label}`}
      label={label}
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