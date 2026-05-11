# Scatch - Ecommerce Web Application

Scatch is a full stack ecommerce web application built using Node.js, Express.js, MongoDB, EJS, and Tailwind CSS.

The project includes:

* User Authentication
* Product Management
* Shopping Cart Functionality
* Quantity Management
* Dynamic Cart Pricing
* Admin Product Creation
* Flash Messages
* JWT Authentication
* Environment Based Route Protection

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* express-session
* connect-flash

## Frontend

* EJS
* Tailwind CSS
* Remix Icons

---

# Features

## User Authentication

* Register User
* Login User
* Logout User
* JWT Token Based Authentication
* Protected Routes using Middleware

---

## Product Features

* Create Products
* Store Product Images
* Dynamic Product Rendering
* Product Discount Support

---

## Cart Features

* Add to Cart
* Increase Quantity
* Decrease Quantity
* Remove Product when Quantity becomes 0
* Dynamic Total Price Calculation
* Discount Handling

---

## UI Features

* Responsive Navbar
* Conditional Navbar Rendering
* Cart Summary
* Account Page
* Flash Success/Error Messages

---

# Project Structure

```bash
Scratch/
│
├── config/
├── middlewares/
├── models/
├── public/
├── routes/
├── views/
│   ├── partials/
│   ├── account.ejs
│   ├── cart.ejs
│   ├── shop.ejs
│   └── index.ejs
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/scratch.git
```

## Navigate to Project

```bash
cd scratch
```

## Install Dependencies

```bash
npm install express ejs bcrypt mongoose jsonwebtoken dotenv config multer tailwind debug cookie-parser connect-flash express-session
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
NODE_ENV=development
JWT_KEY=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
```

---

# Run Project

## Start Server

```bash
npm start
```

or

```bash
nodemon app.js
```

---

# Development Only Owner Route

The owner creation route is protected using:

```js
if(process.env.NODE_ENV === "development")
```

This ensures admin creation routes are unavailable in production.

---

# Cart Data Structure

```js
cart: [
  {
    product: ObjectId,
    quantity: Number
  }
]
```

---

# Future Improvements

* Razorpay / Stripe Integration
* Wishlist
* Order Tracking
* Product Search
* Product Filters
* Admin Dashboard
* Inventory Management
* Responsive Mobile UI

---

# Learning Outcomes

This project helped in understanding:

* REST APIs
* MVC Architecture
* Authentication
* MongoDB Relationships
* Mongoose Populate
* Dynamic EJS Rendering
* Environment Variables
* Git & GitHub Workflow

---

# Author

Raj Mohanty

---

# License

This project is for learning and educational purposes.
