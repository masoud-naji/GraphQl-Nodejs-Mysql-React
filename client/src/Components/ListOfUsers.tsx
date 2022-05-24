import { useQuery, useMutation } from "@apollo/client";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";

function ListOfUsers() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;
  return (
    <div>
      <ul>
        {data &&
          data.getAllUsers.map(
            (user: {
              id: number | any;
              name: string | null | undefined;
              username: string | null | undefined;
            }) => (
              <li key={user.id}>
                {user.name} - - -{user.username}
                &nbsp;
                <button
                  onClick={() => deleteUser({ variables: { id: user.id } })}
                >
                  Delete user{" "}
                </button>
              </li>
            )
          )}
      </ul>
    </div>
  );
}

export default ListOfUsers;
