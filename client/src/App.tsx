import CreateUser from "./Components/CreateUser";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ListOfUsers from "./Components/ListOfUsers";
import UpdatePassword from "./Components/UpdatePassword";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
        <UpdatePassword/>
        <ListOfUsers />
      </ApolloProvider>
    </>
  );
}

export default App;
