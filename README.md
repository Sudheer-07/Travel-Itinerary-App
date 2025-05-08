# Travel Explorer - Modern Travel Planning Application

![Travel Explorer](https://img.shields.io/badge/React-19.1.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

A modern, responsive travel planning application built with React and TailwindCSS that helps users plan and organize their travel experiences efficiently.

## 🌟 Features

- **Modern UI/UX**: Clean and intuitive interface built with React and styled using TailwindCSS
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Date Picking**: Integrated date selection functionality for travel planning
- **Route Management**: Efficient routing system using React Router
- **Icon Integration**: Rich set of icons using React Icons
- **Testing Ready**: Built-in testing setup with Jest and React Testing Library

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Styling**: TailwindCSS 3.4.17
- **Routing**: React Router DOM 7.5.3
- **Date Handling**: React Datepicker 8.3.0
- **Icons**: React Icons 5.5.0
- **Testing**: Jest, React Testing Library

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd travel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🛠️ Project Structure

```
src/
├── assets/        # Static assets like images and fonts
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── routes/        # Route configurations
├── services/      # API and other services
├── App.js         # Main application component
└── index.js       # Application entry point
```

## 🔐 Authentication & Routes

The application implements a secure authentication system with protected routes. Here's how the routing and authentication work:

### Available Routes

- `/` - Login page (default landing page)
- `/onboarding` - User onboarding flow
- `/dashboard` - Main application dashboard

### Authentication Flow

1. **Login Page** (`/`)
   - Entry point for all users
   - Redirects to appropriate page based on authentication status
   - Stores authentication state in localStorage

2. **Protected Routes**
   - `/onboarding` - Accessible only after authentication
   - `/dashboard` - Main application interface, requires authentication

### Route Protection

- Unauthenticated users are automatically redirected to the login page
- Authenticated users trying to access the login page are redirected to their appropriate destination
- Route protection is implemented using React Router's `Navigate` component

### Navigation Guards

The application implements the following navigation rules:
- Unauthenticated users can only access the login page
- Authenticated users are redirected to their last known state (onboarding or dashboard)
- All other routes are protected and require authentication

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🏗️ Building for Production

Create a production build:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Sudheer Battula

## 🙏 Acknowledgments

- React team for the amazing framework
- TailwindCSS team for the utility-first CSS framework
- All contributors who have helped shape this project

---

Made with ❤️ by Sudheer Battula
