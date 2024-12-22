# Shortify

Short It is a URL shortening service built with a React frontend and an Express.js backend. It allows users to create short URLs for their long URLs and manage their shortened URLs.

## Features

- User authentication (Signup and Login)
- URL shortening with optional custom keywords
- Redirecting to the original URL using the short URL
- Viewing and managing user's shortened URLs
- Copy short URLs to clipboard


## Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Backend Setup

1. Navigate to the `server` directory:

```sh
cd server
```
2. Install the dependencies:

```sh
npm install
```

3. Create a .env file in the server directory and add the following environment variables:

```sh
PORT=4000
MONGODB_HOST=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```
4. Start the backend server:

```sh
npm run dev
```

### Frontend Setup

1. Navigate to the client directory:

```sh
cd client
```
2. Install the dependencies:

```sh
npm install
```
3. Start the frontend development server:

```sh
npm run dev
```
## Usage

1. Open your browser and navigate to http://localhost:5173.

2. Sign up for a new account or log in if you already have an account.

3. Use the form on the homepage to create a short URL.

4. View and manage your shortened URLs on the "My URLs" page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
