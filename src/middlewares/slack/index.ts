import { chain } from 'bottender'
import addChannel from './addChannel'
import addUser from './addUser'
import addText from './addText'

export default chain([addChannel, addUser, addText]);
