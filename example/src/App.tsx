import * as React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Text } from 'react-native-duofy-ui-components';

export default function App() {
  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text text="testing component" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
