import React, { useState, createContext } from "react";

const AccessTokenContext = createContext("");

function AccessToken({ children }) {
  const [accessToken, setAccessToken] = useState("");
  const obj = { accessToken: accessToken, setAccessToken: setAccessToken };
  return (
    <div>
      <AccessTokenContext.Provider value={obj}>
        {children}
      </AccessTokenContext.Provider>
    </div>
  );
}

export default AccessToken;
export { AccessTokenContext };
