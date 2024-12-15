const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (Math.random() < 0.5) {
        throw new Error('Simulated error from database');
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
      console.error('Error:', err);
    }
  };

  data();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});