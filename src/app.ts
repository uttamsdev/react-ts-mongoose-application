import express, { Application } from 'express';
import cors from 'cors';
import { UserRoute } from './app/modules/userModule/user.routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
app.use("/api/users/", UserRoute)


app.get('/', (req, res) => {
  res.send('Server is running..');
});

export default app;