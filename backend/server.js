import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';

dotenv.config({ path: '.env.local' });

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes); 

const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

