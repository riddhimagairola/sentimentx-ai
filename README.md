# 🧠 SentimentX AI

SentimentX AI is a full-stack web application that analyzes homestay customer reviews using sentiment analysis. It classifies reviews as **Positive**, **Negative**, or **Neutral** and provides improvement suggestions for negative reviews. The application uses MongoDB Atlas for persistent data storage and provides a responsive dashboard for viewing sentiment statistics.

---

## 🚀 Features

- 📝 Analyze homestay customer reviews
- 😊 Detect Positive, Negative and Neutral sentiments
- 💡 Generate improvement suggestions
- 📊 Interactive Dashboard with live statistics
- 🗂 Full CRUD Operations (Create, Read, Update, Delete)
- 💾 Persistent database using MongoDB Atlas
- 🌙 Dark Mode support
- ⚡ Responsive user interface built with React

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose ODM

---

## 📁 Project Structure

```
sentimentx-ai/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
│
├── package.json
├── README.md
├── architecture/
│     └── W5_SchemaDiagram_26100509.png
```
## System Architecture

![System Architecture](E:/W5_SchemaDiagram_26100509.png)
---

## 🗄 Database Choice

This project uses **MongoDB Atlas** because the application stores document-based customer reviews. MongoDB provides a flexible schema, easy scalability, and integrates seamlessly with Mongoose for Node.js applications.

---

## 📋 Database Schema

### Sentiment

| Field | Type |
|--------|------|
| text | String |
| sentiment | String |
| improvement | String |
| createdAt | Date |
| updatedAt | Date |

---

## 🔗 API Endpoints

### Sentiments

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/sentiments` | Get all sentiments |
| GET | `/api/sentiments/:id` | Get sentiment by ID |
| POST | `/api/sentiments` | Create new sentiment |
| PUT | `/api/sentiments/:id` | Update sentiment |
| DELETE | `/api/sentiments/:id` | Delete sentiment |

### Dashboard

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/dashboard` | Dashboard statistics |

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | User login |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/riddhimagairola/sentimentx-ai.git
cd sentimentx-ai
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Run Backend

```bash
npm start
```

### Run Frontend

```bash
cd ..
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🏗 Setting Up the Database

1. Create a free MongoDB Atlas cluster.
2. Create a database user.
3. Whitelist your IP address.
4. Copy the MongoDB connection string.
5. Paste it into the `.env` file as `MONGO_URI`.
6. Start the backend server using:

```bash
npm start
```

---

## 👩‍💻 Author

**Riddhima Gairola**

B.Tech Computer Science Engineering

Graphic Era (Deemed to be University)

---

## 📄 License

This project is developed for educational and internship purposes.
