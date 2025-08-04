# dt_hgqbe – Elegant RESTful API in Node.js + TypeScript

**Less noise. More craft.**  
A minimal, clean, and modern backend starter using **Express**, **TypeScript**, and **Prisma ORM**, built to scale from prototypes to production.

---

## Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM** + MySQL
- RESTful API structure
- Built-in support for testing & scalable architecture

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

```bash
npm run build
npm run prod
```

Or during development:

```bash
npm run dev
```

---

## License

This project is licensed under the MIT License.

© 2025 [Hg Q.](https://hgq287.github.io)

```
MIT License – You are free to use, modify, and distribute this project with attribution.
```