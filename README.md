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
```javascript
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

