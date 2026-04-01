# DigiTools Platform

Welcome to **DigiTools Platform**, a digital tools marketplace designed to help users discover, browse, and purchase modern software tools effortlessly.

## Little Description

This project focuses on a clean marketplace UI, smooth user interactions, and practical cart management.  
Users can explore products, view key details, add/remove items from cart, and complete a checkout flow with instant feedback alerts.

## Technologies Used

- React.js
- Tailwind CSS
- DaisyUI
- JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for product data)

## 3 Main Features

1. **Product Discovery & Toggle View**  
   Users can switch between `Products` and `Cart` sections from centered toggle buttons. Product view is visible by default.

2. **Interactive Cart System**  
   Cart count updates in the navbar, selected items appear in cart layout, single-item remove works, total updates dynamically, and `Proceed to Checkout` clears all cart items.

3. **Real-Time Toast Notifications**  
   React-Toastify alerts are shown for key actions such as add to cart, remove item, and proceed to checkout.

## Features & Requirements Covered

- **Navbar**
  - Figma-based layout
  - Cart icon with cart count (initially empty)
- **Banner**
  - Heading, description, image, and action buttons
- **Stats Section**
  - Designed according to Figma
- **Main Section Toggling**
  - Two centered buttons (`Products` and `Cart`)
  - Default: `Products`
  - Cart default empty state support
- **JSON Product Data**
  - Product objects with:
    - `id`, `name`, `description`, `price`, `period`
    - `tag`, `tagType`, `features[]`, `icon`
  - Includes 6-10 products
- **Product Cards**
  - 3-column product grid
  - Card includes: name, description, price, period, tag type, features, icon, and `Buy Now`
- **Cart Functionality**
  - Selected products shown in cart
  - Navbar count synced with cart
  - Cart item includes name, icon, price, remove button
  - `Proceed to Checkout` clears cart
  - Total selected products/amount shown in cart section
- **Steps, Pricing, Footer**
  - Designed according to Figma
- **Responsive Design**
  - Mobile-first and fully responsive layout
- **Challenge Part**
  - React-Toastify integration
  - Remove single product from cart
  - Clear all products on checkout

## Optional Features

- Clicking a product increases cart count in navbar
- `Buy Now` interaction can show an "Added to cart" state/message
- Checkout resets cart count


