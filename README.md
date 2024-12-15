# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection occurs due to an error within an asynchronous operation in an HTTP server request handler. The issue arises from not properly handling errors that might be thrown within the `async` function.  The solution shows how to use `try...catch` blocks and proper error handling to prevent this.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`
3. Refresh the page multiple times. Eventually, you'll encounter an unhandled promise rejection error in the console because of the simulated database error. 

## Solution

The solution demonstrates proper error handling using `try...catch` blocks to gracefully handle errors that might occur within the `async` function.