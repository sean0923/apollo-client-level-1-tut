### 01 - start
```
npm install apollo-boost react-apollo graphql --save
```

- go to graph cms
- create schema (title, body)
- get uri from dashboard 

then 
```javascript
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api-uswest.graphcms.com/v1/cjl1iqlw3069d01f160ophfxl/master"
});
```

- wrap component with ApolloProvider with client as a prop
```js
class Layout extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Body />
        </div>
      </ApolloProvider>
    );
  }
}
```

### 03 - Writing Our First GraphQL Query
npm install grapql-tag

- testing query with gql
- go to graphcms setting public api permission to READ
- can get data by client.query -> return promise so need to get data

```js
client
  .query({
    query: testQuery,
  })
  .then(({ data }) => console.log('data: ', data));
```