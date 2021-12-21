import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import Products from './components/Product';

import { Routes } from '../../types/routes';
import { User } from '../../types/user';
import storage from '../../repositories/storage';

import style from './styled';
import { swaggerService } from '../../services/swaggerService';
import { ProductList } from '../../types/productList';
import Product from './components/Product';

const ProductList = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const [products, setProducts] = useState();
  const [isRefreshing, setRefreshing] = useState(false);

  const handleProduct = async () => {
    setRefreshing(true);

    storage.get().then(userInfo => {
      const token = userInfo.token as string;
      if (token) {
        swaggerService.getProducts(token).then(products => {
          setRefreshing(false);
          if (products) {
            setProducts(products)
          } else {
            alert('Ocorreu um erro ao recuperar as postagens!')
          }
        });
      } else {
        setRefreshing(false);
        alert('Sessão expirada!');
        navigation.goBack();
      }
    })
  };
  
  if (!products) return <Text>Carregando...</Text>

  return (
    <View style={style.productListWrapper}>
      <StatusBar style="auto" />
      <FlatList
        data={products}
        onRefresh={handleProduct}
        refreshing={isRefreshing}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={item => item.id ? item.id.toString() : ''}
      />
    </View>
  )
}

export default ProductList;