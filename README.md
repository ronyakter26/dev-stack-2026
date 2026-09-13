# 🚀 Dev Stack

Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies by category, view useful information, and add their favorite technologies to their personal stack.

🔗 *Live Website:* https://dev-stack-2026.vercel.app/

## ✨ Features

- 🧩 *Explore Technologies*  
  Browse frontend, backend, database, styling, language, DevOps, and other development technologies.

- 📚 *Technology Details*  
  Each technology card shows its name, category, description, difficulty level, rating, and badge.

- 🛠️ *Build Your Stack*  
  Add technologies to your personal stack and remove them whenever you want. Toast notifications are also shown when technologies are added or when a duplicate is selected.

## 🛠️ Technologies Used

- ⚛️ React.js
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 📘 TypeScript / JavaScript (ES6+)
- 🔔 React-Toastify
- 📄 JSON
- ⚡ Vite

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

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a React component. I used it to manage the technology stack and the mobile menu state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to fetch and load the technology data from the data.json file when the app starts.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty stack message when there are no technologies in the stack.

tsx
{technologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  technologies.map((technology) => (
    // technology item
  ))
)}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send information back by calling a function passed to it through props.
