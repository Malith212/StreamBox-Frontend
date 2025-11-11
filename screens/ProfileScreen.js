import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const { email } = route.params; // get email from navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>Your account details:</Text>
      <Text style={styles.info}>Email: {email}</Text>

      <Button title="Go back to Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 },
  info: { fontSize: 16, color: 'gray', marginBottom: 30 },
});
