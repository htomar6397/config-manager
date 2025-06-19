# Full-Stack Software Developer Assignment — CodeRower Software Pvt Ltd.

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React (Create React App)

---

## Backend Setup
1. Navigate to `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create `.env` file (already provided) with:
   ```
   MONGODB_URI=mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database
   PORT=8080
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

---

## Frontend Setup
1. Navigate to `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend (React) app:
   ```sh
   npm start
   ```

---

## API Endpoints
### GET `/api/configurations/:id`
Returns the 2D array (matrix) for the given configId.

### PUT `/api/configurations/:id`
Updates the remark for the given configId.

Body:
```json
{
  "remark": "your remark here"
}
```

---

## Submission
- Zip the entire project or push to GitHub and send the link to hr@coderower.com
- Use subject: `<your name> - Backend: Node.js, Frontend: React`

---

## Notes
- Make sure MongoDB Atlas cluster is accessible.
- You can create initial configuration documents directly in the database or extend the backend with a POST endpoint for seeding.
