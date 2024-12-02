import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
});

export default MainLayout;

