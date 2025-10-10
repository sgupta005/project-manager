import express from 'express';
import dotenv from 'dotenv';
import globalErrorHandler from './middlewares/globalErrorHandler';
import logger from './middlewares/logger';
import { dbConnectMiddleware } from './middlewares/dbConnect';
import authRouter from './routes/auth.route';
import organisationRouter from './routes/organisation.router';
import projectRouter from './routes/project.router';
import taskRouter from './routes/task.router';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.static('public'));

app.use(logger);

// Ensure database connection before processing any API requests
app.use('/api', dbConnectMiddleware);

app.use('/api/auth', authRouter);
app.use('/api/organisation', organisationRouter);
app.use('/api/organisation/:orgId/project', projectRouter);
app.use('/api/organisation/:orgId/task/', taskRouter);
app.use('/api/organisation/:orgId/project/:projectId/task/', taskRouter);

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
