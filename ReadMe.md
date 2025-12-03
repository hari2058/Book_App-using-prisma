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

```
## Why npm install -D @types/node is needed:
If you're writing TypeScript in a Node environment, you need these types so the TypeScript compiler knows:
- what built-in Node modules exist,
- what functions and classes they contain,
- the types of their parameters and return values.

## @types/node 
- this packages contain typescript type declaration for node.js core modules like fs, path, http etc.

