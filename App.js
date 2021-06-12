import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme();

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[styles.sectionTitle, {color: isDarkMode ? 'white' : 'black'}]}>
        {title}
      </Text>

      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Section title="Lan" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 44,
    fontWeight: '600',
    paddingVertical: 22,
    paddingHorizontal: 14,
    backgroundColor: 'purple',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
