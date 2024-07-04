# code_challenge

Task description
You are tasked with developing a system to store and look up words and their relevant
synonyms using Go for the backend and React for the frontend. The system should support
fast lookups for both words and their synonyms and vice versa. Additionally, you need to
handle potential errors and edge cases effectively. More details in the next section.
Backend (Go)
Implement a server using Go that supports storing words and their synonyms.
Provide endpoints for:
● Adding a word
● Adding synonyms and relevant words to a specific word
● Retrieving synonyms for a given word
● Retrieving words for a given synonym
You’ll need to follow REST API conventions and the response of the request should be in
JSON.
Frontend (React or React Native)
Implement a very simple React or React Native application to interact with the Go backend.
It should be able to:
● Add a new word
● Add synonyms to a word
● Search for synonyms of the words
● Searching for words by a synonym
Hint: Design the data structure to efficiently handle edge cases, such as:
● Circular synonyms (e.g., A -> B and B -> A).
● Large number of synonyms for a single word.
● We do not expect a lot of styling. Ensure that you handle edge cases.
Suggested Technical Specification
Backend (Go)
- POST /word to add a word
- POST /synonym/{word} to add a synonym to a word
- GET /synonyms/{word} to get synonyms for a word.
- GET /words/{synonym} to get words for a given synonym.
Frontend (React or React Native)
- Preferred way is to use React hooks and functional components.
- Implement form handling for adding words and synonyms.
- Handle loading states and error states gracefully.

## Quickstart

1. Install required packages:

   ```
   npm install
   ```

2. Update `.env` with your settings.

3. Run the tests:

   ```
   npm run test
   ```

## Development

To run the server in development mode, with log pretty-printing and hot-reload:

```
npm run dev
```

To run the tests, run the `test` script (`npm run test`). ESLint is used for linting and its configuration is specified in `.eslintrc.json`.

Code style is automatically formatted using `prettier`. To manually run prettier, use `npm run prettier`. Better yet, integrate your editor to run it on save.

## Production

To run the app in production, run:

```
npm start
```

Logs will be sent to the standard output in JSON format.

## Using Docker

Build the docker image with:

        docker build -t code-challenge .

The default command is to start the web server (gunicorn). Run the image with `-P` docker option to expose the internal port (3000) and check the exposed port with `docker ps`:

        docker run --env-file .env --P code-challenge
        docker ps

Make sure you provide the correct path to the env file (this example assumes it's located in the local directory).

To run a custom command using the image (for example, starting the Node
shell):

        docker run --env-file .env code-challenge npm run shell

For more information on the docker build process, see the included
`Dockerfile`.
