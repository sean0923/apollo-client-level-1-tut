import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

// 
import RenderPropsForForm from '../renderProps/RenderPropsForForm';

// 
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const FormWrapper = styled.form`
  margin: 2rem;
  width: 300px;
  padding: 2rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);

  display: grid;
  grid-gap: 1rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
`;

const ButtonWrapper = styled.button`justify-self: end;`;
// 


const NewPost = () => {
  return (
    <Wrapper>
      <RenderPropsForForm state={{ title: '', body: '' }}>
        {({ state, handleOnChange, handleOnSubmit }) => {
          const { title, body } = state;
          return (
            <FormWrapper
              onSubmit={e => {
                // handleOnSubmit(e);
                e.preventDefault();
                console.log('title: ', title);
                console.log('body: ', body);
              }}
            >
              <GridWrapper>
                <label>title:</label>
                <input name="title" value={title} type="text" onChange={handleOnChange} />
              </GridWrapper>

              <GridWrapper>
                <label>body:</label>
                <textarea name="body" value={body} type="text" onChange={handleOnChange} />
              </GridWrapper>

              <ButtonWrapper>Submit</ButtonWrapper>
            </FormWrapper>
          );
        }}
      </RenderPropsForForm>
    </Wrapper>
  );
};

export default NewPost;
