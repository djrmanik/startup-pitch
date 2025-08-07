# Theory & Practical
1. Next.js by default turn into a server components
2. server components -> rendered on the server -> helps to reduce the amount of javascript that needs to be loaded on the client side -> improving the performance of the application

# Server side pre-rendering by next.js
But if that so good, why everything can't really a server component? -> because of the following reasons:
- **Security**: If everything is a server component, then the client side will not be able to handle user input

React client component -> use 'use client'
- server components are rendered only on the server side
- client components are pre-rendered on the server side to create static shell then hydrate it on the client side
  so that everything within the client component that doesn't required interactivity / isn't dependent on the browser still rendered on the server

# Routing
next.js uses a file based routing system 
but still, in a fullstack app and many cases, dynamic routes & nested routes are still needed
dynamic routes -> dashboard/users/[user]