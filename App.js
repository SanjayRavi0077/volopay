import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Router from './src/Routes/router';
import {Provider} from 'react-redux';
import Store from './src/redux/store/store';
import colors from './src/assets/colors';

const App = () => {
  const store = Store();

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />
      <Router />
    </Provider>
  );
};

export default App;
