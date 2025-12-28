# HGUnified: A flexible system that can grow with you
**Less noise. More craft.**  
A minimal, clean, and modern backend starter using **Express**, **TypeScript**, and **Prisma ORM**, built to scale from prototypes to production.

---

## Architecture & Design Patterns

This project follows **Clean Architecture** and **SOLID** principles to ensure professional-grade maintainability:

- **Modular Design**: Business logic is encapsulated into self-contained modules (e.g., `Auth`, `User`).
- **Repository Pattern**: Database interactions are isolated from business logic using Prisma repositories, making the core logic database-agnostic.
- **DTO (Data Transfer Objects)**: Strict input and output contracts (e.g., `RegisterRequestDto`, `UserProfileDto`) ensure data integrity and prevent sensitive field leakage (like passwords).
- **Centralized Middleware**: Shared authentication logic (OAuth2 + JWT) is located in the `common` layer to eliminate circular dependencies between modules.

---

## Table of Contents

- [Usage](#-usage)
- [Installation](#-installation)
- [Database Setup](#-database-setup)
- [Start the App](#-start-the-app)
- [License](#-license)

---

## Usage

### 1. Clone the Repository

```bash
git clone git@github.com:hgq287/dt-node-hgqbe.git
cd dt-node-hgqbe
```

### 2. Install Dependencies

```bash
npm install
```

---

## Database Setup

Make sure you have **MySQL** running. Then run:

```bash
npx prisma migrate dev --name init
```

---

## Start the App

- Using `npm`

```bash
npm run build 
npm run prod
```

Or during development:

```bash
npm run dev
```

- Using `yarn`

```bash
yarn build
yarn prod
```

Or during development:

```bash
yarn dev
```

---

## Deployment via Docker

This section describes how to build, start, and manage the application's Docker containers.

### Build and Start Containers

Run the following command to build the images (if needed) and start all services in detached mode:

```sh
docker compose -f docker-compose.yml up --build -d
```

### Check Container Status

To verify the container's state:

```sh
docker ps -a
```


This will list all containers, including those that have exited.

### Start Services (if already built)

If the containers have already been created (from a previous build), simply start them again with:

```sh
docker start $(docker ps -aq)
```
### Stop All Running Containers

To stop all currently running containers:

```sh
docker stop $(docker ps -q)
```


## License

This project is licensed under the MIT License.

© 2025 [Hg Q.](https://hgq287.github.io)

```
MIT License – You are free to use, modify, and distribute this project with attribution.
```