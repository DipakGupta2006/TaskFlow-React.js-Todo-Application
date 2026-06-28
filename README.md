# 📝 React Todo App

A clean, responsive **Todo List application** built with **React.js**, featuring full CRUD functionality (Create, Read, Update, Delete) and persistent storage using the browser's `localStorage`. Designed with a professional dark navy + teal color theme and fully responsive for mobile devices.

---

## 🚀 Features

- ✅ **Add Tasks** — Create new tasks with a title and description
- ✏️ **Edit Tasks** — Update existing tasks inline
- 🗑️ **Delete Tasks** — Remove tasks you no longer need
- ☑️ **Mark as Complete** — Toggle task completion with a checkbox (adds strikethrough styling)
- 💾 **Persistent Storage** — Tasks are saved in `localStorage`, so your list stays intact even after refreshing the page
- 📱 **Fully Responsive** — Optimized layout for both desktop and mobile screens
- 🎨 **Professional UI** — Dark navy background with a teal accent color scheme

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend library for building the UI |
| **React Hooks** (`useState`, `useEffect`) | State management and lifecycle handling |
| **localStorage API** | Client-side data persistence |
| **CSS3** | Custom responsive styling |

---

## 📂 Project Structure

```
todo-app/
├── src/
│   ├── App.jsx        # Main application component
│   ├── App.css        # Styling for the application
│   └── index.js        # React entry point
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## ⚙️ How It Works

1. **State Initialization**
   On first load, the app checks `localStorage` for any previously saved tasks and initializes the state with them. If none exist, it starts with an empty list.

2. **Adding a Task**
   The user fills in a **title** and **description**. On submission, a validation check ensures neither field is empty before the task is added to the list.

3. **Editing a Task**
   Clicking **Edit** populates the form with the selected task's data. Submitting the form then updates that specific task instead of creating a new one.

4. **Toggling Completion**
   Each task has a checkbox. Checking/unchecking it flips the `completed` boolean, which visually applies a strikethrough style to the title and description.

5. **Deleting a Task**
   Clicking **Delete** removes the task from the list using its index.

6. **Persisting Data**
   A `useEffect` hook watches the `task` state and automatically syncs any changes to `localStorage`, ensuring data isn't lost on page reload.

---

## 💻 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project directory
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🔮 Future Improvements

- [ ] Add due dates and priority levels for tasks
- [ ] Add filtering (All / Active / Completed)
- [ ] Add drag-and-drop task reordering
- [ ] Replace `localStorage` with a backend (Node.js + Express + MySQL)
- [ ] Add unit tests with Jest and React Testing Library

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues) if you want to contribute.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Dipak Gupta**
---

⭐ If you found this project helpful, consider giving it a star on GitHub!