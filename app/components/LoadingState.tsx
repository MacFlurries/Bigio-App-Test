import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingState = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);

export default LoadingState;