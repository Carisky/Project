import cors from 'cors';

const corsOptions = {
  origin: ['http://localhost:3000', 'http://f1ox.duckdns.org:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
