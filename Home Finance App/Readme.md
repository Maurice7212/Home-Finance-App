# Home Finance App 💸🏠

A sleek, modern app to manage your personal finances with ease. Built as a collaborative project by an all-girls team, this app combines a dynamic React Native frontend with a robust Flask backend to track expenses, monitor budgets, and visualize financial analytics in real-time. Whether you're saving for a goal or keeping your spending in check, Home Finance App has got you covered!

## ✨ Features
- **Expense Tracking**: Add and view expenses with categories and timestamps.
- **Budget Monitoring**: Set a budget limit and track your spending progress.
- **Savings Goal Tracker**: Visualize your savings with an animated progress bar.
- **Real-Time Analytics**: Analyze spending patterns with a dynamic line chart.
- **Dark Mode Support**: Toggle between light and dark themes for a personalized experience.
- **Secure Authentication**: Login with JWT-based authentication (default credentials: `test`/`pass`).

## 📂 Project Structure
Home Finance App/
├── README.md             # Project documentation
├── Backend/              # Flask backend
│   ├── app.py            # Main Flask app
│   ├── config.py         # Configuration settings
│   ├── models/           # Database models
│   │   └── expense.py
│   ├── requirements.txt  # Python dependencies
│   ├── routes/           # API routes
│   │   ├── auth.py
│   │   └── expenses.py
│   └── venv/             # Virtual environment
└── frontend/             # React Native frontend
├── app.json          # Expo configuration
├── package.json      # Node.js dependencies
└── src/              # Source code
├── App.js        # Main app component
├── services/     # API service
│   └── api.js
├── components/   # Reusable components
│   └── GoalTracker.js
└── screens/      # App screens
├── LoginScreen.js
└── HomeScreen.js

## 🚀 Getting Started

### Prerequisites
- **Python 3.11** (recommended due to compatibility with dependencies; Python 3.13 may cause issues)
- **Node.js** (v16 or higher)
- **Expo CLI**: Install globally with `npm install -g expo-cli`
- **Expo Go App**: For mobile testing (available on iOS App Store or Android Play Store)

### Backend Setup
1. Navigate to the backend folder:
   
   cd Backend
   Create and activate a virtual environment:
   python -m venv venv
venv\Scripts\activate  
Install dependencies:
pip install -r requirements.txt
Run the backend:
python app.py
**Frontend Setup**
Navigate to the frontend folder:


cd frontend
Install dependencies:


npm install
Start the Expo app:
expo start
Scan the QR code with the Expo Go app on your phone to test the app.
Ensure your phone and computer are on the same Wi-Fi network.
Update the API_URL in frontend/src/services/api.js to your backend’s IP (e.g., http://192.168.18.6:5000/api).
Testing the App
Login Credentials: Use username: test, password: pass to log in.
Add expenses, monitor your budget, and explore real-time analytics.
🛠️ Technologies Used
Backend:
Flask: Lightweight web framework
Flask-SQLAlchemy: ORM for database management
Flask-JWT-Extended: Secure authentication
Frontend:
React Native: Cross-platform mobile app framework
Expo: Simplified development and testing
React Navigation: Seamless navigation between screens
Axios: API requests
react-native-chart-kit: Dynamic charts for analytics
react-native-animatable: Smooth animations
Database: SQLite (configurable via DATABASE_URL in config.py)
🌟 Team

Special Thanks: A heartfelt shoutout to Abdul Nafay Sarmad  for providing moral support and troubleshooting tips during late-night debugging sessions. Your encouragement kept us motivated! 🙌

📜 License
This project is licensed under the MIT License.

🔮 Future Enhancements
User registration and multi-user support
Advanced analytics with additional chart types
Push notifications for budget alerts
Cloud database integration (e.g., PostgreSQL or MongoDB)
Happy budgeting!

---

