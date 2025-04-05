# Farmley - Premium Dry Fruits Shop

Farmley is a modern e-commerce platform specializing in premium dry fruits, offering a seamless shopping experience for customers and efficient management tools for administrators.

## Features

### User Features
- User Authentication (Register/Login)
- Product Browsing and Shopping
- User Profile Management
- Blog and Gallery Sections
- Contact and Support Services

### Admin Features
- Admin Panel for User Management
  - View all users
  - Reset user passwords
  - Grant admin privileges
- Product Management
- Order Management
- Content Management (Blog, Gallery)

### Technical Features
- Secure password hashing and JWT authentication
- MongoDB database integration
- Modern React frontend with Material-UI
- Responsive design for all devices
- RESTful API architecture

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Aftab-Fury/Farmley.git
cd farmley
```

2. Install dependencies
```bash
# Install project dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Start the development servers
```bash
# From the project root directory
npm start
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Default Admin Account

For testing purposes, a default superuser account is created:
- Email: admin@farmley.com
- Password: admin123

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### User Routes
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update user profile

### Admin Routes
- GET /api/admin/users - Get all users (admin only)
- POST /api/admin/users/:id/reset-password - Reset user password (admin only)
- POST /api/admin/users/:id/make-admin - Make user an admin (superuser only)

### Product Routes
- GET /api/products - Get all products
- GET /api/products/:id - Get product details
- POST /api/products - Create new product (admin only)
- PUT /api/products/:id - Update product (admin only)
- DELETE /api/products/:id - Delete product (admin only)

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control
- Secure password reset functionality
- Protected admin routes
- Input validation and sanitization

## Project Structure

### Frontend
- React-based user interface
- Material-UI components
- Responsive design
- Context API for state management
- Pages: Home, Products, About, Blog, Gallery, Contact, Services, Profile, Admin Panel

### Backend
- Node.js and Express.js
- MongoDB database
- RESTful API architecture
- JWT authentication
- Role-based authorization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: info@dryfruits.com
- Website: https://dryfruits.com
- Address: 123 Dry Fruits Street, Market Zone, City, State 12345 