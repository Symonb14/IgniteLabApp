import { NativeBaseProvider, StatusBar } from 'native-base';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsloaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content"
                 backgroundColor="transparent"
                 translucent
      />

      {fontsloaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

