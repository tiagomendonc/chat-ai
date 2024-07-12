import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Message } from './types/domain/Message';
import { responses } from './db/data';

const app = express();
const port = 3030;

app.use(bodyParser.json());
app.use(cors());

let clients: any = [];

app.post('/api/message', (req, res) => {
  const payload = req.body;
  const message = new Message(payload);

  if (message) {
    console.log(message);
    setTimeout(() => {
      const response =
        responses[message.text] || "I'm not sure what you are asking.";
      clients.forEach((client: any) =>
        client.res.write(
          `data: ${JSON.stringify(
            new Message({ text: response, isUser: false })
          )}\n\n`
        )
      );

      return res.json(new Message({ text: response, isUser: false }));
    }, 2000);
  } else {
    res.status(400).send('Invalid message');
  }
});

app.get('/api/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  clients.push({ res });

  req.on('close', () => {
    clients = clients.filter((client: any) => client.res !== res);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
