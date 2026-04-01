# Gift Shopping Store 🎁

A modern, full-stack e-commerce web application specialized in gift shopping. This project features a responsive user interface, complete cart and checkout flows, and a custom Machine Learning recommendation system.

## 🌟 Features

- **Modern UI/UX**: Responsive and premium design using HTML, CSS, and Vanilla JavaScript/React.
- **Product Catalog**: Browse a wide variety of gifts with categories and details.
- **Shopping Cart**: Session-based cart system to add, remove, and update quantities.
- **Order Management**: Complete checkout process and order history.
- **AI Recommendations**: Python-powered machine learning engine that suggests personalized gift recommendations for users.

## 🛠️ Tech Stack

- **Frontend**: Custom HTML/CSS/JS, React UI components (React Router DOM, Lucide Icons)
- **Backend Server**: Node.js & Express.js architecture
- **Database**: MongoDB for user data, products, and order histories
- **Machine Learning**: Python-based recommendation system (`ml-model` directory)

## 📁 Project Structure

```text
gift-shopping-store/
├── client/         # React/Vanilla Frontend Code & UI components
├── server/         # Node.js/Express Backend API & routes
├── ml-model/       # Python Machine Learning recommendation engine
└── package.json    # Project dependencies and details
```

## 🚀 Getting Started

### Prerequisites
- Node.js (for frontend and backend)
- MongoDB instance (local or Atlas)
- Python 3.x (for ML recommendation engine)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd gift-shopping-store
   ```

2. **Install Root/Client Dependencies:**
   ```bash
   npm install
   cd client && npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd server && npm install
   ```

4. **Install ML dependencies (if applicable):**
   ```bash
   cd ml-model && pip install -r requirements.txt
   ```

5. **Environment Variables:**
   Make sure to configure your `.env` files in both the `server` and `client` directories with the appropriate database connection strings and environment variables.

### Running the App Locally

To start the development servers, use the following commands from their respective directories:

**Frontend Development Server:**
```bash
cd client
npm start # or npm run dev
```

**Backend Server:**
```bash
cd server
npm start # or node server.js
```

**ML Recommendation Service:**
```bash
cd ml-model
python main.py # (or run according to the specific entry point)
```

## 💡 Acknowledgements
Built as a comprehensive full-stack showcase to integrate modern web technologies with machine learning.
