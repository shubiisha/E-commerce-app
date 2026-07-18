# E-Commerce Web Application

## Project Overview

This is a full-stack E-Commerce Web Application developed using **React**, **Node.js**, **Express.js**, **MySQL**, and **Firebase Authentication**. The application allows users to browse products, register and log in securely, manage a shopping cart, place orders, and provides an admin interface for managing products.

---

## Features

### User Features

* User Registration using Firebase Authentication
* User Login using Firebase Authentication
* Browse Products
* View Product Details
* Add Products to Cart
* Remove Products from Cart
* Dynamic Cart Count
* Checkout Page
* View Orders

### Admin Features

* Admin Dashboard
* View Products
* Add New Products
* Delete Products
* View Customer Orders

---

## Technologies Used

### Frontend

* React.js
* Vite
* React Router DOM
* Context API
* CSS

### Backend

* Node.js
* Express.js
* MySQL
* mysql2
* CORS

### Authentication

* Firebase Authentication

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

---

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

---

## Configure Firebase

Create a Firebase project and enable **Email/Password Authentication**.

Update `firebaseConfig.js` with your Firebase credentials.

---

## Configure MySQL

Create a database:

```sql
CREATE DATABASE ecommerce;
```

Import the SQL file:

```sql
SOURCE database/ecommerce.sql;
```

Update `server/config/db.js`:

```javascript
host: "localhost",
user: "root",
password: "YOUR_PASSWORD",
database: "ecommerce"
```

---

## Running the Application

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

### Authentication

* Firebase Authentication (Email & Password)

### Products

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/products     | Get all products  |
| POST   | /api/products     | Add a new product |
| DELETE | /api/products/:id | Delete a product  |

### Orders

| Method | Endpoint    | Description    |
| ------ | ----------- | -------------- |
| GET    | /api/orders | Get all orders |

---

## Future Enhancements

* Product Search
* Product Categories
* Product Images Upload
* Product Reviews & Ratings
* Wishlist
* Payment Gateway Integration (Stripe/Razorpay)
* Order Tracking
* Admin Authentication
* Product Stock Management
* User Profile
* Responsive UI Improvements

---


## Author

**Shubisha**

Bachelor of Engineering – Computer Science and Engineering
