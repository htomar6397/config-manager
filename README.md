# Configuration Manager

A full-stack web application for managing and viewing configuration data with remarks. Built as an assignment for CodeRower Software Pvt Ltd.

## ✨ Features

- View configuration data in a tabular format
- Update remarks for configurations
- Responsive design with dark/light mode support
- Real-time data validation and error handling
- Clean and intuitive user interface

## 🚀 Tech Stack

- **Frontend:**
  - React 18
  - Tailwind CSS
  - Axios for API requests
  - React Router for navigation

- **Backend:**
  - Node.js with Express
  - MongoDB with Mongoose
  - RESTful API

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the backend directory with:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=8080
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```
   The server will run on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```
   The app will open in your default browser at `http://localhost:3000`

## 📚 API Documentation

### Base URL
`http://localhost:8080/api`

### Endpoints

#### GET `/configurations/:id`
Retrieves configuration data by ID.

**Parameters:**
- `id` (string, required): The configuration ID

**Response:**
```json
{
  "data": [
    ["Header 1", "Header 2"],
    ["Value 1", "Value 2"]
  ],
  "configId": "config123",
  "remark": "Sample remark"
}
```

#### PUT `/configurations/:id`
Updates the remark for a configuration.

**Parameters:**
- `id` (string, required): The configuration ID

**Request Body:**
```json
{
  "remark": "Updated remark text"
}
```

**Response:**
```json
{
  "message": "Remark updated successfully",
}
```

## 🏗️ Project Structure

```
config-manager/
├── backend/               # Backend code
│   ├── config/           # Configuration files
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── server.js         # Express server
│
├── frontend/            # Frontend React app
│   ├── public/           # Static files
│   └── src/
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── App.js        # Main App component
│       └── index.js      # Entry point
│
└── README.md            # Project documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed by Mayank Tomar | htomar6397@gmail.com
