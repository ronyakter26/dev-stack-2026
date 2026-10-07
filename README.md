# 🚀 Dev Stack

Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies by category, view useful information, and add their favorite technologies to their personal stack.

## 🌐 Live Website

https://dev-stack-2026.vercel.app/

## ✨ Features

- 🧩 **Explore Technologies**  
  Browse frontend, backend, database, styling, language, DevOps, and other development technologies.

- 📚 **Technology Details**  
  Each technology card shows its name, category, description, difficulty level, rating, and badge.

- 🛠️ **Build Your Stack**  
  Add technologies to your personal stack and remove them whenever you want.

- 🔔 **Toast Notifications**  
  Users get notifications when technologies are added or when a duplicate technology is selected.

- 📱 **Responsive Design**  
  The application works smoothly across mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

- ⚛️ React.js
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- ⚡ Vite
- 🔔 React-Toastify
- 🎯 React Icons
- 📄 JSON

## 📦 Dependencies

### Main Dependencies

- `react`
- `react-dom`
- `react-icons`
- `react-toastify`
- `tailwindcss`
- `@tailwindcss/vite`

### Development Dependencies

- `vite`
- `typescript`
- `@vitejs/plugin-react`
- `daisyui`
- `eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `typescript-eslint`
- `@eslint/js`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `globals`

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Banner.tsx
│   ├── Nav.tsx
│   ├── TechnologyCard.tsx
│   ├── TechnologySection.tsx
│   ├── StackSidebar.tsx
│   └── MainFooter.tsx
├── data/
│   └── technologies.json
├── App.tsx
├── main.tsx
└── index.css
```

## 💻 Run Locally

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/ronyakter26/dev-stack-2026.git
```

### 2. Go to the project directory

```bash
cd dev-stack-2026
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open the application in your browser:

```text
http://localhost:5173
```

## 🔗 Relevant Links

- **Live Website:** https://dev-stack-2026.vercel.app/
- **GitHub Repository:** https://github.com/ronyakter26/dev-stack-2026

## 📱 Responsive Design

The application is designed to provide a smooth experience across:

- Mobile devices
- Tablets
- Desktop devices

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component. I used it to manage the technology stack and the mobile menu state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to load the technology data when the application starts.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty stack message when there are no technologies in the stack.

```tsx
{technologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  technologies.map((technology) => (
    // technology item
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send information back by calling a function passed to it through props.
```

### এখন Requirements-এর সাথে মিলিয়ে দেখো

- ✅ Overview
- 🟡 Screenshot — optional, তাই না দিলেও হবে
- ✅ Main technologies
- ✅ Main features
- ✅ Dependencies
- ✅ Local run guideline
- ✅ Live link
- ✅ GitHub repository link
- ✅ Project structure
- ✅ React Q&A
