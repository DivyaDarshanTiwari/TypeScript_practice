# TypeScript Practice Project

## About Me

Hi! I am **Divya Darshan Tiwari**, a 4th-year student at **UPES Dehradun**, pursuing **B.Tech (Hons.) in Computer Science and Engineering** with a specialization in **Full Stack AI**.

I have a strong interest in **Software Development** and I am currently learning **TypeScript** to enhance my development skills. This repository serves as a workspace for my experiments and learning journey with TypeScript.

## Project Overview

This is a TypeScript project designed to explore the features and capabilities of the language. It follows a standard structure separating source code from compiled assets.

### Project Structure

- **`src/`**: This directory contains the source TypeScript files (`.ts`). This is where the development happens.
- **`dist/`**: This directory contains the compiled JavaScript files (`.js`). These are the actual executable files generated after the build process.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager).

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install the dependencies (including the TypeScript compiler) using npm:

   ```bash
   npm install
   ```

   This will install `typescript` and other necessary packages into the `node_modules` directory.

## Building the Project

To compile the TypeScript code into JavaScript, run the build script defined in `package.json`:

```bash
npm run build
```

This script uses the `tsc` (TypeScript Compiler) package to transpile code from the `src` folder and output it to the `dist` folder.

## Running the Code

After building the project, you can execute the compiled code located in the `dist` folder.

You can use the start script:

```bash
npm start
```

Or run the file directly using Node.js:

```bash
node dist/index.js
```
