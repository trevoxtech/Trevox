# Trevox Portfolio Website

A modern, responsive portfolio website for Trevox built with React.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Smooth scrolling and animations
- 🎯 Interactive navigation
- 📧 Contact form
- 🚀 Optimized performance

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing on Mobile Device

**Method 1: Using Local Network IP (Recommended)**

1. Make sure your computer and mobile device are on the same Wi-Fi network
2. Find your computer's local IP address:
   - **Windows**: Open Command Prompt and type `ipconfig`, look for "IPv4 Address"
   - **Mac/Linux**: Open Terminal and type `ifconfig` or `ip addr`, look for "inet"
3. Start the development server:
   ```bash
   npm start
   ```
4. On your mobile device, open a browser and go to:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

**Method 2: Using ngrok (For External Access)**

1. Install ngrok: https://ngrok.com/download
2. Start your React app: `npm start`
3. In a new terminal, run:
   ```bash
   ngrok http 3000
   ```
4. Copy the HTTPS URL from ngrok (e.g., `https://abc123.ngrok.io`)
5. Open that URL on your mobile device

**Method 3: Build and Deploy**

1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any web hosting service

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
trevox-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Logo.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

- Update company information in the respective component files
- Modify colors in CSS files (look for color variables)
- Replace placeholder content with your actual content
- Add your logo image or modify the Logo component

## Technologies Used

- React 18
- CSS3
- HTML5

## License

© 2024 Trevox. All rights reserved.


