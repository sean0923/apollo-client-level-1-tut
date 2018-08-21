import React from 'react';
import RenderPropsForForm from '../renderProps/RenderPropsForForm';

const NewPost = () => {
  return (
    <div>
      <RenderPropsForForm state={{ title: '', body: '' }}>
        {({ state, handleOnChange, handleOnSubmit }) => {
          const { title, body } = state;
          return (
            <form
              action=""
              onSubmit={e => {
                handleOnSubmit(e);
              }}
            >
              <input name="title" value={title} type="text" onChange={handleOnChange} />
              <textarea name="body" value={body} type="text" onChange={handleOnChange} />
            </form>
          );
        }}
      </RenderPropsForForm>
    </div>
  );
};

export default NewPost;
