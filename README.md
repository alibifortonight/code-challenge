```markdown
# code_challenge

The "code_challenge" project is a full-stack application designed to store and look up words and their synonyms efficiently. The backend is implemented in Go, providing REST API endpoints for managing words and synonyms, while the frontend is built using React, offering a user-friendly interface for interaction.

## Overview

The application follows a full-stack architecture with a Go backend handling REST API requests for word and synonym management, and a React frontend for user interaction. The backend uses Go to implement server logic, including endpoints for adding words, adding synonyms, and retrieving synonyms or words by their respective identifiers. The frontend is a React application that communicates with the Go backend via HTTP requests, providing a user interface for adding and searching words and synonyms. The system is designed to handle edge cases such as circular synonyms and large numbers of synonyms efficiently.

Technologies used:
- Go - Programming language for the backend server.
- React - JavaScript library for building user interfaces.
- gorilla/mux - HTTP router and dispatcher for Go.
- axios - Promise-based HTTP client for the browser and Node.js.

## Features

- Add a new word.
- Add synonyms to a word.
- Search for synonyms of a word.
- Search for words by a synonym.
- Efficient handling of edge cases such as circular synonyms and large numbers of synonyms.

## Getting started

### Requirements

- Go (version 1.16 or higher)
- Node.js (version 14.0 or higher)
- npm (version 6.0 or higher)

### Quickstart

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/code_challenge.git
   cd code_challenge
   ```

2. Install frontend dependencies:
   ```sh
   cd ui
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm run dev
   ```

4. In a new terminal, start the backend server:
   ```sh
   cd api
   go run main.go
   ```

5. Access the application at `http://localhost:3000`.

### License

Copyright (c) 2024.
```