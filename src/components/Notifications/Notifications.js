import React, { useState, useEffect } from "react";
import { getToken } from "../../firebaseInit.js";

const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);
const [token,setToken]=useState("")
  console.log("Token found", isTokenFound);

  // To load once
  useEffect(() => {
    let data;

    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if (data) {
        console.log("Token is", data);
        setToken(data)
      }
      return data;
    }

    tokenFunc();
  }, [setTokenFound]);

  return (
    <div>
      {token}
    </div>
  );
};

Notifications.propTypes = {};

export default Notifications;
