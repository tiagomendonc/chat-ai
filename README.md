# Chat-AI

This project is a chat demonstration with an artificial intelligence, with mocked services.

## Technologies Used

### Front End

- React
- Vite
- Tailwind
- Redux

### Back End

- Node
- Express

The entire project was written in TypeScript.

## Installation

To install the project, follow these steps:

1. Navigate to the `web` directory and run the following command in the console:

   ```bash
   npm i
   ```

2. Navigate to the `service` directory and run the following command in the console:

   ```bash
   npm i
   ```

## Running the Project

To run the project, follow these steps:

1. In the `service` directory, run the following command:

   ```bash
   npm run dev
   ```

2. In the `web` directory, run the following command:

   ```bash
   npm run dev
   ```

## Project Structure

```plaintext
chat-ai/
├── web/
│   ├── node_modules/
│   ├── public/
│   ├── src/
|   |   ├── assets/
|   |   |   └── icons
|   |   ├── components/
|   |   |   └── styles/
|   |   ├── constants/
|   |   ├── store/
|   |   ├── types/
|   |   ├── utils/
|   |   ├── App.tsx
|   |   ├── index.css
|   |   ├── main.tsx
│   ├── .gitignore
│   ├── package.json
|   ├── package-lock.json
|   ├── postcss.config.js
|   ├── tailwind.config.js
|   ├── tsconfig.app.json
|   ├── tsconfig.json
|   ├── tsconfig.node.json
|   ├── vite.config.ts
│   └── README.md
|
├── service/
│   ├── node_modules/
│   ├── src/
|   |   ├── db/
|   |   ├── types/
|   |   └── index.ts
│   ├── .gitignore
│   ├── package.json
|   ├── package-lock.json
|   ├── tsconfig.json
│   └── README.md
├── package-lock.json
└── README.md
```
