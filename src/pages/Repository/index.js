import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function Repository({ navigation }) {
  const respository = navigation.getParam('respository');

  return <Browser source={{ uri: respository.html_url }} flex={{ flex: 1 }} />;
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('respository').name,
});

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
