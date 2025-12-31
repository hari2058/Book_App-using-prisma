# Project Title 
Book App using prisma 

## Description 
 This is a simple books management application using prisma and node.js,
 Only for backend.

 ## Features in this applications
 - Add, update,delete, and view books.
 - Connects books to their respective authors and related genre.
 - Filter books by authors, genres and status(COMPLETED | IN_PROGRESS | DROPPED).
 - Also filter books by completed date and updated date.
 - Create and connect to database using Prisma



```bash
 ## Inatializing project- run below command to install dependencies.
 npm install

## to inatialize project from start.
 npm init

 ## installing typescript (using -D  because we will only need typescript while coding only so -D install developer dependencies only)
npm install -D typescript

## creating tsconfig.json file which is typescript configuration{uncomment rootdir and outdir in tsconfig.json file}
npx tsc --init

 ## then convert ts file to js for compiling using command- this command create dist file 
 npx tsc 

 ## uncomment environment settings for node js (lib and types ) from tsconfig.json file

 ##command to run js file inside dist folder
 node dist/main.js

 ## intall types node using 
 npm install -D @types/node

## tsx for 
 npm install tsx

```
## Why npm install -D @types/node is needed:
If you're writing TypeScript in a Node environment, you need these types so the TypeScript compiler knows:
- what built-in Node modules exist,
- what functions and classes they contain,
- the types of their parameters and return values.

## @types/node 
- this packages contain typescript type declaration for node.js core modules like fs, path, http etc.

```bash 
## installing express js 

npm install express

## installing types for express
npm install -D @types/express


## installing prisma using command
npm install prisma

## installing prisma client
npm install @prisma/client

## initializing prisma 
npx prisma init 

 -this create prisma folder and prisma.config.ts file 

 ## installing dotenv which helps to read .env file 
 npm install dotenv

 ## check database using command
 npx prisma studiox


```

## Steps to follow after installing prisma
1. Defining our database path to sql in .env file after removing default path (eg: DATABASE_URL="mysql://root:Password@123@localhost:3306/book_app_prisma", here DATABASE_URL = "mysql://<username>:<password>@<url>/<db_name>")
2. Defining datasource to either in prisma.config.ts file or in schema.prisma.(In latest version of prisma datasource is directly defined in prisma.config.ts file so just updating url in .env file is enough.)
3. Also install dotenv which helps to read .env file. 


## To create database using prisma 

``` bash
## to make database 
npx prisma db push

## to generate all prisma database 

npx prisma generate

## install adapter

npm install @prisma/adapter-mariadb

```

# After installing adapter you have to provide host, user and password in prisma.ts file
 Eg: import "dotenv/config";
 import { PrismaMariaDb } from "@prisma/adapter-mariadb";
 import { PrismaClient } from "../generated/prisma/client";

 const adapter = new PrismaMariaDb({
 host: "localhost",
 port: 3306,
 connectionLimit: 5,
 user: "root",
 password: ""
 });
 export const prisma = new PrismaClient({ adapter });


## Install zod for valadating users inputs

```bash 
npm install zod

```

## use bcrypt.js library for hashing password 
-so install bcrypt.js using 
```bash
npm install bcryptjs
```

## install cookie package for session management and authentication
```bash 
npm install cookie-parser

npm install -D @types/cookie-parser

```

## jsonwebtoken 
```bash
npm install -D @types/jsonwebtoken

```

## for rate limiting
```bash 
npm install express-rate-limit

```


