import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nameArticle', headerName: 'Назва товара', width: 370 },
  { field: 'fotoArticle', headerName: 'Фото', width: 120 },
  { field: 'priceArticle', headerName: 'Ціна', width: 200 },
  { field: 'amount', headerName: 'Залишок', type: 'number', width: 200, },
  {
    field: 'ratingArticle',
    headerName: 'Рейтинг',
    description: 'Цей стовпчик створено для пізнавальних цілей. У майбутньому можна додату якусь логіку.',
    //sortable: false,
    width: 180,
  },
];

const rows = [
  { id: 1, nameArticle: "Laptop", priceArticle: 999.99, fotoArticle: '/images/pexels1.jpg', amount: 10, ratingArticle: 4.5 },
  { id: 2, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
  { id: 3, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
  { id: 4, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
  { id: 5, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
  { id: 6, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
  { id: 7, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
  { id: 8, nameArticle: "T-shirt", priceArticle: 19.99, fotoArticle: '/images/pexels1.jpg', amount: 50, ratingArticle: 4.3 },
  { id: 9, nameArticle: "Jeans", priceArticle: 49.99, fotoArticle: '/images/pexels1.jpg', amount: 30, ratingArticle: 4.1 },
  { id: 10, nameArticle: "Novel Book", priceArticle: 9.99, fotoArticle: '/images/pexels1.jpg', amount: 100, ratingArticle: 4.8 },
  { id: 11, nameArticle: "Textbook", priceArticle: 29.99, fotoArticle: '/images/pexels1.jpg', amount: 70, ratingArticle: 4.4 },
  { id: 12, nameArticle: "Blender", priceArticle: 89.99, fotoArticle: '/images/pexels1.jpg', amount: 25, ratingArticle: 4.6 },
  { id: 13, nameArticle: "Microwave", priceArticle: 149.99, fotoArticle: '/images/pexels1.jpg', amount: 10, ratingArticle: 4.5 },
  { id: 14, nameArticle: "Action Figure", priceArticle: 14.99, fotoArticle: '/images/pexels1.jpg', amount: 40, ratingArticle: 4.9 },
  { id: 15, nameArticle: "Board Game", priceArticle: 39.99, fotoArticle: '/images/pexels1.jpg', amount: 20, ratingArticle: 4.8 },
  { id: 16, nameArticle: "Lipstick", priceArticle: 12.99, fotoArticle: '/images/pexels1.jpg', amount: 60, ratingArticle: 4.7 },
  { id: 17, nameArticle: "Perfume", priceArticle: 49.99, fotoArticle: '/images/pexels1.jpg', amount: 25, ratingArticle: 4.6 },
  { id: 18, nameArticle: "Vitamins", priceArticle: 19.99, fotoArticle: '/images/pexels1.jpg', amount: 100, ratingArticle: 4.8 },
  { id: 19, nameArticle: "Protein Powder", priceArticle: 29.99, fotoArticle: '/images/pexels1.jpg', amount: 50, ratingArticle: 4.7 },
  { id: 20, nameArticle: "Car Battery", priceArticle: 99.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.3 },
  { id: 21, nameArticle: "Car Tires", priceArticle: 199.99, fotoArticle: '/images/pexels1.jpg', amount: 30, ratingArticle: 4.4 },
  { id: 22, nameArticle: "Garden Hose", priceArticle: 24.99, fotoArticle: '/images/pexels1.jpg', amount: 40, ratingArticle: 4.5 },
  { id: 23, nameArticle: "Lawn Mower", priceArticle: 299.99, fotoArticle: '/images/pexels1.jpg', amount: 10, ratingArticle: 4.6 },
  { id: 24, nameArticle: "Basketball", priceArticle: 19.99, fotoArticle: '/images/pexels1.jpg', amount: 30, ratingArticle: 4.8 },
  { id: 25, nameArticle: "Tennis Racket", priceArticle: 49.99, fotoArticle: '/images/pexels1.jpg', amount: 20, ratingArticle: 4.7 },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
  return (
    <Paper sx={{
        height: "85%",
        width: "auto",
        marginLeft: "20px",
        marginRight: "10px",
        marginTop: "10px",
        marginBottom: "20px",
    }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}