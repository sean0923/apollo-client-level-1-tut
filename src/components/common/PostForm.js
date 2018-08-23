import React from 'react';
import styled from 'styled-components';

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

const PostForm = ({ createPost, updatePost, existingPostData }) => {
  let initialFormValues;
  let handleOnSubmit;

  if (createPost) {
    initialFormValues = { title: '', body: '' };
  } else {
    initialFormValues = { title: existingPostData.title, body: existingPostData.body };
  }

  return (
    <Wrapper>
      <RenderPropsForForm state={initialFormValues}>
        {({ state, handleOnChange, initializeState }) => {
          const { title, body } = state;

          if (createPost) {
            handleOnSubmit = e => {
              e.preventDefault();
              createPost({ variables: { title, body } })
                .then(() => {
                  initializeState();
                })
                .catch(err => {
                  console.error('err: ', err);
                });
            };
          } else {
            handleOnSubmit = e => {
              e.preventDefault();
              updatePost({ variables: { id: existingPostData.id, title, body } })
                .then(() => {
                  console.log('successfully updated');
                  initializeState();
                })
                .catch(err => {
                  console.error('err: ', err);
                });
            };
          }

          return (
            <FormWrapper onSubmit={handleOnSubmit}>
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

export default PostForm;
