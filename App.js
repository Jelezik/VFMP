import {Alert, Button, Linking, StyleSheet, Text, View} from 'react-native';
import {useCallback} from "react";

export default function App() {

  const urlAuth = 'https://oauth.vk.com/authorize?client_id=51438283&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=audio&response_type=token&v=5.194&state=123456';

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };


  return (
    <View style={styles.container}>
      <Text>Авторизируйтесь</Text>
      <OpenURLButton url={urlAuth}>Authorize</OpenURLButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
