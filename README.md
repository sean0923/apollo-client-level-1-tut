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
          <Home />
        </div>
      </ApolloProvider>
    );
  }
}
```

### 03 - Writing Our First GraphQL Query
```
npm install grapql-tag
```

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

### 04 - The Query Component
```js
import { Query } from 'react-apollo';
```

use Query component in `Home.js` to render 

```js
<Query query={POSTS_QUERY}>
  {({ loading, data }) => {
    if (loading) return <div>Loading...</div>;
    const { posts } = data;

    return (
      <div>
        {posts.map(({ title }, idx) => {
          return (
            <div key={idx}>
              <h2>{title}</h2>
            </div>
          );
        })}
      </div>
    );
  }}
</Query>
```

### 05 - Apollo Dev Tool
install apollo devtool (Chrome Extension)
- graphiql interface
- Queries
- Mutations
- Cache

### 06 - Named Queries
If you don't name your query then 
apollo devtool will show queries with 1. 2.

from 

```graphql
const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;
```

to 

```graphql
const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;
```


### 08 - Set up React router
```
npm install react-router-dom
```

- seperate Router component
```js
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/post/:id" component={Post} />
  </Switch>
</BrowserRouter>
```

### 10 - Variables in Query
- test query at graphcms
```graphql
const POST_QUERY = gql`
  query onePost($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
```

- becase Post.js component came from Route 
it get react router props

```js
const Post = ({ match: { params: { id } } }) => {
  ...
}
```
- get id from above code

### 11 - Understanding Mutations
- go to graphcms
- click setting on sidebar
- click public api permission dropdown from read -> open
- write mutation at graphcms

### 12 - The Mutation Component
- write createPostMutation with gql
```graphql
const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String, $body: String) {
    createPost(data: { title: $title, body: $body }) {
      id
      title
      body
      status
    }
  }
`;
```
- Mutation component 
```js
<Mutation mutation={CREATE_POST_MUTATION}>
  {(createPost, { data }) => {
    return (
      <FormWrapper
        onSubmit={e => {
          e.preventDefault();
          createPost({ variables: { title, body } }).then(() => {
            initializeState();
          });
        }}
      >
```
- createPost return promise so you can do .then and .catch

### 13 - Mutation As Prop Functions
- cleaning up code (seperating mutation and form component)

### 14 - Update Mutation
- Make post form reusable by behave differntly depend on what props it gets
---
- make UpdatePost.js component
- add UpdatePost at Post.js

- write updatePost graphql query at graphcms
- copy paste working query to UpdatePost
---
Used Proptypes for the first time !!!

```js
PostForm.propTypes = {
  createPost: PropTypes.func,
  updatePost: PropTypes.func,
  existingPostData: PropTypes.object,
};
```

### 16 - Local State with Apollo Link State

- Default state should be value fo defautls
- resolvers should be empty obj for now

```js
const defaultState = { isReadOnly: true };

const client = new ApolloClient({
  uri: 'exampleUrl',
  clientState: {
    defaults: defaultState,
    resolvers: {},
  },
});
```

One gql can hold more than one query
```graphql
const POST_QUERY = gql`
  query onePost($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }

    isReadOnly @client
  }
`;
```
Can fetch a data with @client on the right side of the object key

Feels like redux ~~

### 17 - Modifying Local State with ApolloConsumer component
- make ToggleEditButton.js
- use ApolloConsumer (RenderPorps)

```js
<ApolloConsumer>
  {client => {
    return (
      <Wrapper
        onClick={() => {
          client.writeData({ data: { isReadOnly: !isReadOnly } });
        }}
      >
        {text}
      </Wrapper>
    );
  }}
</ApolloConsumer>
```

### 18 - Updating Local State from Mutations
Mutation RenderProps comes with more than 1 args
2nd args contains { data, client, ...}

After update post, make isReadOnly to true

Got client.writeData from RenderProps mutation

```js
<Mutation mutation={UPDATE_POST_MUTATION}>
  {(updatePost, result) => {
    return (
      <PostForm
        updatePost={updatePost}
        existingPostData={existingPostData}
        setIsReadOnlyToTrue={() => {
          result.client.writeData({ data: { isReadOnly: true } });
        }}
      />
    );
  }}
</Mutation>
```

### 19 - Sorting & Pagination

Graphcms comes with sort, skip, first
```graphql
query allPosts($skip: Int) {
  posts(orderBy: updatedAt_DESC, skip: $skip, first: 2) {
    id
    title
    updatedAt
  }
}
```

<Query> renderProps comes with fetchMore
fetchMore is a function that object as argument which has
key of `variables` and `updateQuery`.

`variable` takes skip
`updateQuery` takes ...
```js
<button
  onClick={() =>
    fetchMore({
      variables: {
        skip: posts.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          posts: [...prev.posts, ...fetchMoreResult.posts],
        });
      },
    })}
>
  load more
</button>
```

first: <number> decide how much will be fetch each time
