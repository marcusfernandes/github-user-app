import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '172.16.1.107' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
