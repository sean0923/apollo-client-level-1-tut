import React from 'react';
import styled from 'styled-components';
import { ApolloConsumer } from 'react-apollo';

//
const Wrapper = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: .5rem 1rem;
  background-color: #8c8c8c;
  color: #fff;
  border: none;
  font-size: 1rem;
  margin-top: 1rem;
`;

const ToggleEditButton = ({ text, isReadOnly }) => {
  return (
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
  );
};

export default ToggleEditButton;
