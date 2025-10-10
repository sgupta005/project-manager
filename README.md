# Projexio

A full-stack project management application built with the MERN stack. Projexio enables teams to manage projects, track tasks, and collaborate effectively within organizations.

## Features

### Authentication & Authorization

- User registration and login with JWT authentication
- Google OAuth integration
- Role-based access control (Admin and Member roles)
- Secure password hashing with bcrypt
- Protected routes and middleware authentication

### Organization Management

- Create and manage organizations
- Invite code system for adding members
- Organization avatar upload with Cloudinary integration
- Admin and member role assignment
- Organization analytics and dashboard
- Delete organizations with cascading cleanup

### Project Management

- Create, update, and delete projects
- Project avatar upload support
- Assign projects to organizations
- Project analytics and progress tracking
- Task organization within projects
- Project settings management

### Task Management

- Create, update, and delete tasks
- Task status tracking (Backlog, Todo, In Progress, In Review, Done)
- Task assignment to team members
- Due date management
- Task description and details
- Drag-and-drop task reordering
- Task filtering and sorting
- Personal task view for individual users
- Bulk task operations

### Team Collaboration

- View team members within organizations
- Member role management
- Invite new members via invite codes
- User profile management with avatar upload
- Member activity tracking

### User Interface

- Modern, responsive design with Tailwind CSS
- Dark/light theme support
- Interactive dashboards with analytics
- Calendar view for tasks
- Kanban board for task management
- Charts and visualizations with Recharts
- Smooth animations with Framer Motion
- Toast notifications for user feedback
- Breadcrumb navigation
- Drawer and dialog components

## Tech Stack

### Backend

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken), bcryptjs
- **OAuth**: Google OAuth 2.0 (googleapis)
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary
- **Validation**: Zod schemas
- **Development**: Nodemon, ts-node

### Frontend

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: Tailwind CSS v4
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## Project Structure

```
Projexio/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── middlewares/     # Authentication & error handling
│   │   ├── schemas/         # Zod validation schemas
│   │   ├── utils/           # Helper functions
│   │   └── db/              # Database configuration
│   └── public/temp/         # Temporary file uploads
└── frontend/
    ├── src/
    │   ├── api-client/      # API service layer
    │   ├── components/      # Reusable components
    │   ├── features/        # Feature-based modules
    │   ├── pages/           # Page components
    │   ├── store/           # Redux store and slices
    │   ├── hooks/           # Custom React hooks
    │   └── utils/           # Utility functions
    └── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```
FRONTEND_URL=
PORT=
MONGODB_URI=
DB_NAME=
NODE_ENV=
JWT_SECRET_KEY=
JWT_EXPIRY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
```

4. Run the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
npm start
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with:

```
VITE_API_URL=
VITE_GOOGLE_CLIENT_ID=
```

4. Run the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/google` - Google OAuth login
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Organizations

- `POST /api/organisations` - Create organization
- `GET /api/organisations` - Get user's organizations
- `GET /api/organisations/:orgId` - Get organization details
- `PATCH /api/organisations/:orgId` - Update organization
- `DELETE /api/organisations/:orgId` - Delete organization
- `POST /api/organisations/:orgId/join` - Join organization with invite code

### Projects

- `POST /api/organisations/:orgId/projects` - Create project
- `GET /api/organisations/:orgId/projects` - Get organization projects
- `GET /api/projects/:projectId` - Get project details
- `PATCH /api/projects/:projectId` - Update project
- `DELETE /api/projects/:projectId` - Delete project
- `GET /api/projects/:projectId/analytics` - Get project analytics

### Tasks

- `POST /api/tasks` - Create task
- `GET /api/organisations/:orgId/tasks` - Get organization tasks
- `GET /api/tasks/:taskId` - Get task details
- `PATCH /api/tasks/:taskId` - Update task
- `DELETE /api/tasks/:taskId` - Delete task
- `POST /api/tasks/bulk-update` - Bulk update tasks

## License

This project is licensed under the ISC License.
