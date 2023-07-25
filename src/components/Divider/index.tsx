import React from 'react';
import { View, ViewProps } from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';

type ViewType = {
  text?: string;
  size?: number;
  customTw?: string;
} & ViewProps;

function Divider(props: ViewType) {
  const { testID, customTw, size = 1, text, ...rest } = props;
  const styles = getStyles({ customTw, size });

  const getDivider = () => {
    return (
      <>
        <View style={styles.divider} />
        {text && <Text customStyles={styles.dividerText} text={text} />}
        <View style={styles.divider} />
      </>
    );
  };

  return (
    <View {...rest} testID={testID || 'divider-component'} style={styles.base}>
      {getDivider()}
    </View>
  );
}

export default Divider;
