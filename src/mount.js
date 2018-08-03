import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

if (module.hot) {
  module.hot.accept();
}

window.describe = (text, fn) => fn();
window.it = (text, fn) => fn();

const mount = (ReactCards, Wrapper) =>
  Wrapper === undefined
    ? render(
        <AppContainer>
          <ReactCards />
        </AppContainer>,
        window.mountNode
      )
    : render(
        <Wrapper>
          <AppContainer>
            <ReactCards />
          </AppContainer>
        </Wrapper>,
        window.mountNode
      );

export default mount;
