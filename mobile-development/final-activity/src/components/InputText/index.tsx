import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, TextInput, TextInputProps } from 'react-native';

import style from './styled'

interface TextProps extends TextInputProps {
  title: string;
}

const InputText = (props: TextProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(Dimensions.get('window').width - 48);
  }, [width])

  return (
    <View>
      <Text>{props.title}</Text>
      <TextInput style={{ ...style.inputContent, width }} {...props} />
    </View>
  );
}

export default InputText;