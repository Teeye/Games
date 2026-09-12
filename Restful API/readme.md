# Quora Post Application 📝

A simple **Quora-style post application** built using **Node.js, Express.js, EJS, and RESTful APIs**.

This project was created as part of my journey into backend development. While building it, I learned how RESTful routes work and how a frontend communicates with a backend to create, read, update, and delete data.

## 🚀 Features

* 📖 View all posts
* 🔍 View a specific post
* ➕ Create a new post
* ✏️ Edit/update an existing post
* 🗑️ Delete a post
* 🆔 Generate unique IDs for posts
* 🔄 Redirect users after different operations
* 🌐 RESTful routing

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **EJS**
* **RESTful APIs**
* **JavaScript**
* **UUID**
* **HTML/CSS**

## 🔗 RESTful Routes

| Method   | Route             | Purpose                           |
| -------- | ----------------- | --------------------------------- |
| `GET`    | `/posts`          | Display all posts                 |
| `GET`    | `/posts/new`      | Display the form to create a post |
| `POST`   | `/posts`          | Create a new post                 |
| `GET`    | `/posts/:id`      | Display a specific post           |
| `GET`    | `/posts/:id/edit` | Display the edit form             |
| `PATCH`  | `/posts/:id`      | Update a specific post            |
| `DELETE` | `/posts/:id`      | Delete a specific post            |

## 📂 Project Structure

```text
Quora-Post/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── see.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-link>
```

### 2. Go into the project folder

```bash
cd restpractice
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
nodemon index.js
```

The application will run on:

```text
http://localhost:8080
```

## 📚 What I Learned

Building this project helped me understand several important backend concepts:

* How **REST APIs** work
* How HTTP methods like `GET`, `POST`, `PATCH`, and `DELETE` are used
* How to work with `req.params`
* How to work with `req.body`
* How forms send data to the server
* How to find and modify specific data
* How `redirect()` works
* How routes connect the frontend and backend
* How CRUD operations are implemented

## 🔄 CRUD Operations

This project follows the basic CRUD pattern:

```text
CREATE  → POST
READ    → GET
UPDATE  → PATCH
DELETE  → DELETE
```

## 🙌 Learning Journey

This project is one of the steps in my journey toward learning **backend development**.

I'm still learning, experimenting, and building more projects to strengthen my understanding of **Node.js, Express.js, REST APIs, and web development**.

More projects coming soon! 🚀
