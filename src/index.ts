import 'reflect-metadata';
import { createConnection } from 'typeorm';
import LOL from './lol';

function connectToDatabase(){
  createConnection()
  .then(async _ => {
    console.log('Connection established.');
  })
  .catch(error => {
    console.log(error)
    setTimeout(connectToDatabase, 30000);
  });
}

connectToDatabase()
export default LOL;
