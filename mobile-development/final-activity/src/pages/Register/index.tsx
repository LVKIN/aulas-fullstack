import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { View, Button } from 'react-native';
import InputText from '../../components/InputText';

import { Routes } from '../../types/routes';
import { User } from '../../types/user';

import S from './styled';
import { swaggerService } from '../../services/swaggerService';

const Register = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmationPassValue, setConfirmationPassValue] = useState('');

  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleSend = async () => {
    if (!nameValue || !emailValue || !passwordValue || !addressValue || !ageValue) {
      return alert('Todos os campos são necessários.');
    }

    if (passwordValue !== confirmationPassValue) {
      return alert('A senha não confere.');
    }

    const finalUserData: User = {
      name: nameValue,
      email: emailValue,
      address: addressValue,
      age: parseInt(ageValue, 10),
      userPassword: passwordValue,
    };

    const createdUser = await swaggerService.createUser(finalUserData);
    try {
      console.log(createdUser)
      if (createdUser?.status === 201 || 200) {
        navigation.navigate('Login')
      } else {
        alert('Esse usuário já existe');
      }
    } catch (err) {
      console.log(err);
      alert('Houve um erro ao cadastrar o usuário :( \nTente novamente.');
    };
  };

  return (
    <View style={S.registerWrapper}>
      <InputText
        title="Nome"
        onChangeText={setNameValue}
        />
      <InputText
        title="Email"
        autoCompleteType='email'
        onChangeText={setEmailValue}
        keyboardType='email-address'
      />
      <InputText
        title="Endereço"
        onChangeText={setAddressValue}
        autoCompleteType='street-address'
       />
      <InputText
        title="Idade"
        onChangeText={setAgeValue}
        keyboardType='numeric'
      />
      <InputText
        title="Senha"
        onChangeText={setPasswordValue}
        secureTextEntry 
        autoCompleteType='password'
       />
      <InputText
        title="Confirme sua senha"
        onChangeText={setConfirmationPassValue}
        secureTextEntry
        autoCompleteType='password'
      />
    
      <Button onPress={handleSend} title='Cadastrar' />
    </View>
  );
};

export default Register;