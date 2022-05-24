import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER, UPDATE_PASSWORD, DELETE_USER } from "../Graphql/Mutation";

function CreateUser() {
  const [name, setName] = useState<any | null>(0);
  const [username, setUserName] = useState<any | null>(0);
  const [password, setPassword] = useState<any | null>(0);

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  // const [updatePassword] = useMutation(UPDATE_PASSWORD);
  // const [deleteUser] = useMutation(DELETE_USER);

  if (loading) return <div>"Submitting..."</div>;
  if (error) return <div> `Submission error! ${error.message}`</div>;
  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() =>
          createUser({
            variables: { name: name, username: username, password: password },
          })
        }
      >
        Create user
      </button>
    </div>
  );
}

export default CreateUser;
