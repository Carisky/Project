import express from 'express';
import dotenv from 'dotenv';
import corsMiddleware from './middlewares/corsMiddleware';
import userRoutes from './routes/userRoutes';
import sellerRoutes from './routes/sellerRoutes';
import articleRoutes from './routes/articleRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT; 

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Seller API',
      version: '1.0.0',
      description: 'API for managing sellers and their articles',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/controllers/*.ts'], // Adjust this path as needed
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Serve static files from the 'storage/photos' directory
const photosDirectory = path.join(__dirname, '..', 'storage', 'photos');
app.use('/storage/photos', express.static(photosDirectory));

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/sellers', sellerRoutes);
app.use('/api/articles', articleRoutes);

app.get('/api/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
