<<<<<<< HEAD
# Task Manager Application

## Project Overview

This is a Task Manager web application built using React and Vite.
The application allows users to create, delete, and manage tasks with status tracking (Pending / Completed).
User authentication is required before accessing the dashboard.

#### This web page is hosted [here!](https://task-tooll.netlify.app/login)

---

# How to Run the Project

1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/task-manager.git
```

2. Navigate into the project folder

```
cd task-manager
```

3. Install dependencies

```
npm install
```

4. Run the development server

```
npm run dev
```

5. Open the application in the browser

```
http://localhost:5173
```

---

# AI Prompts Used

Some UI and structural assistance was taken from AI tools.

Example prompts used:

* "Create a React dashboard layout with sidebar and task list."
* "Create a task table UI with CSS."
* "Add toggle functionality for task status in React."
* "Design a sidebar with dropdown logout menu using React and Tailwind."

---

# What AI Generated vs What Was Modified

### AI Generated

* Initial UI layout suggestions
* Modal structure for task creation


### Modified / Implemented by Me

* Task CRUD logic
* Sidebar structure
* Task table UI
* Task filtering system
* Task status toggle functionality
* LocalStorage integration
* Dashboard task count logic
* Some Tailwind styling suggestions
* Component structure and state handling
* UI adjustments and styling improvements

---

# API Design (Non-AI Generated)

Since this project runs locally without a backend database, the task data is stored using LocalStorage.

Task Object Structure:

```
{
  id: number,
  name: string,
  status: "Pending" | "Completed",
  created_at: string
}
```

Operations performed:

Create Task
Adds a new task object to the tasks array.

Delete Task
Removes a task using the task id.

Update Task Status
Changes status between Pending and Completed.

Get Tasks
Retrieve tasks from LocalStorage.

---

# State Management (Non-AI Generated)

State is managed using React hooks.

Main states used:

* tasks → stores all tasks
* filterStatus → handles task filtering
* showCreateModal → controls task creation modal
* showDeleteModal → controls delete confirmation modal
* taskName → stores new task input

The tasks state is synchronized with LocalStorage so that tasks persist after page refresh.

---

# Technologies Used

* React
* Vite
* Tailwind CSS
* React Router
* Lucide Icons
* Framer Motion

---
# *Author*

* Jitendra Singh Chouhan (jitendra, jsinghchouhan971@gmail.com)
  - [LinkedIn](https://www.linkedin.com/in/jitendra-singh-chouhan-309560316/)
=======
# Blog Management System

Full-stack blog management project built with React, Node.js, Express, and MongoDB.

## What is included

- Blog list page with pagination, title search, and tag filtering
- Blog details page with author details and recursive nested comments
- Blog create, edit, and delete flows with validation
- JWT authentication for protected actions
- Role-aware authorization where authors manage their own posts and admins can manage any post
- Like and unlike support for blogs
- Rich text blog editor with markdown toolbar and live preview
- Dark mode toggle with persisted theme preference
- Optional infinite-scroll browsing mode in addition to the required pagination flow
- Demo seed data with 7 direct-login accounts, nested comments, and 100 blogs

## Project structure

```text
.
├── db
├── backend
│   ├── scripts
│   └── src
└── frontend
    └── src
```

## Local setup

1. Make sure MongoDB is available.
    The backend uses `mongodb://127.0.0.1:27017/blog-management-system` by default. You can also point it to Atlas or another MongoDB instance with `MONGODB_URI` in `backend/.env`.
    MongoDB Compass is only a GUI client. The app does not fetch data from Compass directly; it connects to the MongoDB server or Atlas cluster using the same connection string.
    If you use Atlas, prefer the `mongodb+srv://...` URI, URL-encode special characters in the password, and make sure your IP is allowed in Atlas Network Access.

2. Install dependencies.

```bash
npm install
npm install --prefix backend
npm install --prefix frontend
```

You can also use the helper script:

```bash
npm run install:all
```

3. Optional: create env files.

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

The frontend works without a custom env file during local development because Vite proxies `/api` to the backend.

4. Optional: seed sample data.

```bash
npm run seed --prefix backend
```

Sample users after seeding:

- `maya@example.com` / `password123`
- `arjun@example.com` / `password123`
- `neha@example.com` / `password123`
- `rahul@example.com` / `password123`
- `sana@example.com` / `password123`
- `vikram@example.com` / `password123`
- `admin@example.com` / `password123`

For the full demo dataset and third-person handoff flow, use the `db` folder:

- [db/DEMO_ACCOUNTS.md](db/DEMO_ACCOUNTS.md)
- [db/HANDOFF_SETUP.md](db/HANDOFF_SETUP.md)
- [db/mongo-compose.yml](db/mongo-compose.yml)

## Demo bootstrap

If you want the easiest project setup with the 100-blog dataset, run:

```bash
npm run demo:bootstrap
```

That command:

- installs root, backend, and frontend dependencies
- creates local env files when they are missing
- seeds the database with 7 users, 100 blogs, and nested comments

If MongoDB is not installed locally, start it first with:

```bash
docker-compose -f db/mongo-compose.yml up -d
```

5. Start the app.

Run both apps together:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev --prefix backend
npm run dev --prefix frontend
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

Health check: `http://localhost:5000/api/health`

## API overview

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/me`
- `GET /api/users/:id`
- `GET /api/blogs`
- `GET /api/blogs/:id`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`
- `PATCH /api/blogs/:id/like`
- `GET /api/comments/blog/:blogId`
- `POST /api/comments`

## Validation already run

- Backend syntax and module load check
- Backend JWT smoke test with in-memory MongoDB
- Backend demo seed test with 7 users and 100 blogs in in-memory MongoDB
- Frontend lint
- Frontend production build

## Notes

- Only authenticated users can create blogs or comments.
- Authors can edit or delete their own blogs, and admin users can manage any blog.
- Nested comments are stored with parent-child references and rendered recursively on the frontend.
>>>>>>> 3267760 (main commit)
