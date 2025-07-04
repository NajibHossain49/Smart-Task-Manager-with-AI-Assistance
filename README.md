# 🚀 Smart Task Manager with AI Assistance

A modern task management web application built with **React** and **Next.js 15+** using **TypeScript**, enhanced by **Google Gemini AI** to suggest actionable subtasks. Easily manage your to-dos and boost productivity with smart AI-powered breakdowns.

---

## Live Link 🌐

[Live Link](https://smart-task-manager-with-ai-assistan-dusky.vercel.app)

---

## ✨ Features

- ✅ Add, edit, and delete tasks
- 📋 Each task includes:

  - Title
  - Description
  - Due Date
  - Status (Pending / Completed)

- 🧠 **AI Subtask Suggestions**
  Generate 3–5 actionable subtasks for any task using **Google Gemini API**
- 🖥️ Fully responsive — works across desktops and mobile devices
- 🛠️ Clean and simple UI

---

## 🧪 Example

**Main Task**: `Plan birthday party`
**AI Suggestions**:

- Book venue
- Send invitations
- Order cake
- Plan decorations
- Prepare playlist

---

## 🔧 Technologies Used

- **Next.js 15+** (App Router)
- **React 19+**
- **TypeScript**
- **Tailwind CSS** (CSS framework)
- **Google Gemini API**
- **Next.js API Routes** for secure backend integration
- **Environment Variables** for API key management

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NajibHossain49/Smart-Task-Manager-with-AI-Assistance.git
cd Smart-Task-Manager-with-AI-Assistance
```

### 2. Install dependencies

Using `npm` (or switch to `pnpm`/`yarn` if preferred):

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file based on the example provided:

```env
# .env.local
GEMINI_API_KEY=your_google_gemini_api_key_here
```

You can get a free Gemini API key from: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📂 Folder Structure

```
/app
  /api       → API route for Gemini integration
  /components → Reusable UI components
  /tasks     → Task list and detail views
.env.local    → Your API key config
```

---

## ⚠️ Error Handling

- If the Gemini API call fails, an error message is shown to the user.
- All AI responses are sanitized and validated before display.

---

## 😅 Challenges Faced

- Integrating the Gemini API securely through server-side routes
- Handling various AI edge cases (e.g., vague task names)
- Designing a clean yet responsive UI within a limited timeframe
- Ensuring TypeScript type safety across both frontend and backend logic

---

## 🧑‍💻 Author

Developed with ❤️ by **Najib Hossain**  
[GitHub](https://github.com/NajibHossain49) | [LinkedIn](https://www.linkedin.com/in/md-najib-hossain) | [Portfolio](https://najib-hossain.web.app)

## 🌟 Show Your Support

If you like this project, please ⭐ the repository and share it with others!
