import { sendRequest } from "./sendReq";

const getUsers = async() => {

    const route =  `/users` ,
    request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",          
      }
    };
  return await sendRequest(route, request);
}


  
export default {
    getUsers
}
