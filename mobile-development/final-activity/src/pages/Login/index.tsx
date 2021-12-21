import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { View, Button } from 'react-native';
import InputText from '../../components/InputText';

import { Routes } from '../../types/routes';
import { User } from '../../types/user';
import storage from '../../repositories/storage';

import S from './styled';
import { swaggerService } from '../../services/swaggerService';

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleSend = async () => {
    if (!emailValue || !passwordValue) {
      return alert('Todos os campos são necessários.');
    }

    const finalUserData: User = {
      email: emailValue,
      userPassword: passwordValue,
    };

    try {
      const token = await swaggerService.loginUser(finalUserData);
      console.log(token)
      if (token) {
        const user = await swaggerService.getUser(token);
        await storage.save({ token, user })
        navigation.navigate('ProductList')
      } else {
        alert('Esse usuário não existe');
      }
    } catch (err) {
      console.log(err);
      alert('Houve um erro ao logar o usuário :( \nTente novamente.');
    };
  };

  return (
    <View style={S.loginWrapper}>
      <InputText
        title="Email"
        autoCompleteType='email'
        onChangeText={setEmailValue}
        keyboardType='email-address'
      />
      <InputText
        title="Senha"
        onChangeText={setPasswordValue}
        secureTextEntry 
        autoCompleteType='password'
      />
    
      <View style={S.buttonStyle}>
        <Button onPress={() => navigation.navigate('Register')} title='Cadastrar-se' />
      </View>
      <View style={S.buttonStyle}>
        <Button onPress={handleSend} title='Entrar' />
      </View>
    </View>
  );
};

export default Login;