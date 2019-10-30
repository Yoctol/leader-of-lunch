import 'reflect-metadata';
import { createConnection } from 'typeorm';
import LOL from './lol';

createConnection()
  .then(async connection => {
    console.log('Connection established.');
  })
  .catch(error => console.log(error));

export default LOL;
