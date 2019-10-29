import "reflect-metadata";
import { createConnection } from "typeorm";
import LOL from "./lol";

createConnection()
  .then(async connection => {
    console.log("Connection established.");
  })
  .catch(error => console.log(error));

export default LOL;

// export default ()=>{
//   console.log("Q")
//   return ()=>{
//     console.log("QQQ")
//   }
// }


// console.log("Q")
// import { router, text } from "bottender/router";

// const appRouter = async () => {
//   console.log("Q")
//   return router([text("*", () => {console.log("QQQ")})]);
// };

// export default appRouter;