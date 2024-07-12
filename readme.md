# TypeScript Express Project - Campers Shop Server

This is a simple Express server written in TypeScript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (Node Package Manager).
- You have a MongoDB instance running (local or cloud-based).

## Getting Started

Follow these instructions to set up and run the project locally.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/fai-sas/campers-shop-server
   cd campers-shop-server
   ```

2. **Install dependencies:**

   ```typescript
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of the project and add your configuration:

   ```env
   NODE_ENV="development"
   PORT=5000
   DATABASE_URL="your-mongodb-connection-string"
   CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
   CLOUDINARY_API_KEY="your-cloudinary-api-key"
   CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
   ```

### Running the Project

There are two ways to run the project: in development mode and in production mode.

#### Development Mode

In development mode, the server will restart automatically whenever you make changes to the source files.

1. **Start the server in development mode:**

   ```sh
   npm run start:dev
   ```

   This uses `ts-node-dev` for live reloading.

#### Production Mode

In production mode, the server will run the compiled JavaScript files.

1. **Build the project:**

   ```sh
   npm run build
   ```

   This compiles the TypeScript files into the `dist` directory.

2. **Start the server in production mode:**

   ```sh
   npm run start:prod
   ```

### Additional Scripts

- **Build the project:**

  ```sh
  npm run build
  ```

  This compiles the TypeScript files into the `dist` directory.

- **Run the server in production mode:**

  ```sh
  npm start
  ```

  This is an alias for `npm run start:prod`.

### Testing

Currently, there are no tests defined for this project. You can add your tests and run them using:

```sh
npm test
```

### Project Structure

```typescript
typescript-express/
│
├── dist/                   # Compiled JavaScript files (generated)
├── node_modules/           # Node.js modules
├── src/                    # Source files
│   ├── app/                # Application setup
│   │   ├── config/         # Configuration files
│   │   ├── modules/        # Feature modules
│   │   │   ├── product/    # Product module
│   │   │   │   ├── product.controller.ts   # product controller
│   │   │   │   ├── product.interface.ts    # product interface
│   │   │   │   ├── product.model.ts        # product model
│   │   │   │   ├── product.route.ts        # product routes
│   │   │   │   ├── product.service.ts      # product service
│   │   │   │   ├── product.validation.ts   # product validation
│   │   │   │   ├── product.utils.ts        # product utils
│   │   │   ├── cart/    # Cart module
│   │   │   │   ├── cart.controller.ts   # cart controller
│   │   │   │   ├── cart.interface.ts    # cart interface
│   │   │   │   ├── cart.model.ts        # cart model
│   │   │   │   ├── cart.route.ts        # cart routes
│   │   │   │   ├── cart.service.ts      # cart service
│   │   │   │   ├── cart.validation.ts   # cart validation
│   │   ├── app.ts           # Express app setup
│   │   ├── app.ts           # Express app setup
│   │   ├── server.ts        # Server setup
│
├── .env
├── .gitignore
├── .package.json
├── .tsconfig.json
├── .vercel.json


```

### Deployment

```typescript
{
  "version": 2,
  "builds": [
    {
      "src": "src/server.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server.js",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}

```
