# Project Setup Instructions

Since Node.js/npm was not detected in the environment, I have created the source files manually. Please follow these steps to initialize the project and run it.

## 1. Install Node.js
If you haven't already, install Node.js (LTS version recommended) from [nodejs.org](https://nodejs.org/).

## 2. Initialize the Project
Open a terminal in this directory (`/Users/ryangosling/Documents/ant`) and run:

```bash
# Initialize a new package.json
npm init -y

# Install dependencies
npm install next react react-dom framer-motion lucide-react clsx tailwind-merge
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer
```

## 3. Configure TypeScript & Tailwind
Initialize TypeScript and Tailwind:

```bash
npx tsc --init
npx tailwindcss init -p
```

Update `tailwind.config.js` to look like this:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Run the Project
Add these scripts to your `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Then run:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.
