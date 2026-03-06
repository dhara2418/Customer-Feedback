# 💼 Customer Feedback & Issue Reporting System

## 📌 Project Overview

The **Customer Feedback & Issue Reporting System** is a React-based front-end application designed to collect structured feedback and issue reports from users.

The application provides an interactive form where users can submit complaints, suggestions, bug reports, and improvement ideas. All submitted feedback is instantly displayed in a dashboard similar to real-world support ticket systems used in SaaS platforms.

---
<img width="1694" height="947" alt="Screenshot 2026-03-06 223239" src="https://github.com/user-attachments/assets/74c7221f-b71a-40e1-ba89-b055acc986fd" />

<img width="1199" height="638" alt="Screenshot 2026-03-06 223319" src="https://github.com/user-attachments/assets/d249688b-6203-4af5-a6e7-87977eb47dad" />

---

## 🚀 Features

### 1️⃣ Feedback Submission Form

The form collects important information from users:

* Full Name
* Email Address
* Issue Category (Bug, Suggestion, Complaint, Other)
* Priority Level (Low, Medium, High)
* Description of the issue
* Screenshot URL (optional)
* Additional Notes

---

### 2️⃣ Controlled & Uncontrolled Components

This project demonstrates both types of React form handling.

**Controlled Components**

* Name
* Email
* Category
* Priority
* Description
* Steps to Reproduce
* Suggested Improvements

**Uncontrolled Components (using Refs)**

* Screenshot URL
* Additional Notes

---

### 3️⃣ Dynamic Form Fields

Users can dynamically add or remove:

* Steps to Reproduce
* Suggested Improvements

This simulates real issue reporting systems like **JIRA** or **GitHub Issues**.

---

### 4️⃣ Event Handling

The project uses different React events such as:

* `onChange` – update form state
* `onSubmit` – handle form submission
* `onClick` – add/remove dynamic rows
* `onBlur` – validation trigger
* `onFocus` – input styling

---

### 5️⃣ Form Validation

The form includes validation rules:

* Required fields validation
* Email format validation
* Minimum description length
* Category and priority selection validation
* Real-time error messages
* Error highlighting

---

### 6️⃣ Feedback Dashboard

All submitted feedback is displayed as cards including:

* User name and email
* Category and priority badges
* Description of issue
* Screenshot preview
* Steps to reproduce
* Suggested improvements
* Submission timestamp

---

## 🧱 Project Structure

```
src
 ┣ components
 ┃ ┣ FeedbackForm.jsx
 ┃ ┣ DynamicList.jsx
 ┃ ┣ FeedbackList.jsx
 ┃ ┗ FeedbackCard.jsx
 ┣ App.jsx
 ┣ App.css
 ┗ main.jsx
```

---

## 🛠 Technologies Used

* React.js
* JavaScript (ES6)
* HTML5
* CSS3
* React Hooks (`useState`, `useRef`)

---

## 🎯 Learning Outcomes

Through this project, students learn how to:

* Build complex forms in React
* Implement controlled and uncontrolled components
* Handle events and manage state
* Add dynamic form fields
* Apply form validation
* Design clean user interfaces
* Render user-generated content dynamically

---


---

