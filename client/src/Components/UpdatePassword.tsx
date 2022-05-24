import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function UpdatePassword() {
  const [username, setusername] = useState<any | null>("");
  const [currentPassword, setcurrentPassword] = useState<any | null>("");
  const [newPassoword, setnewPassoword] = useState<any | null>("");
  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  if (error) alert(`Updating error! ${error.message}`);

  return (
    <div>
      <input
        type="text"
        placeholder="user name"
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Current Password"
        onChange={(e) => setcurrentPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setnewPassoword(e.target.value)}
      />

      <button
        onClick={() => {
          updatePassword({
            variables: {
              username: username,
              oldPassword: currentPassword,
              newPassword: newPassoword,
            },
          });
        }}
      >
        Update Password
      </button>
    </div>
  );
}

export default UpdatePassword;
