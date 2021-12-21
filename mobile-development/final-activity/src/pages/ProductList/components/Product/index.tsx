import React from 'react';
import { Text, View } from 'react-native';

import { ProductList } from '../../../../types/productList';
import S from './styled';

type Props = { product: ProductList }

const Product = ({ product }: Props) => (
  <View style={S.container}>
    <Text style={S.title}>Dados do Produto </Text>
    <Text style={S.text}>Id: {product.id}</Text>
    <Text style={S.text}>Nome: {product.name}</Text>
    <Text style={S.text}>Quantidade: {product.amount}</Text>
    <Text style={S.text}>Preço: {product.price}</Text>
    <View style={S.producerContainer}>
      <Text style={S.title}>Dados do Fabricante </Text>
      <Text style={S.text}>Id: {product.factory.id}</Text>
      <Text style={S.text}>Nome: {product.factory.name}</Text>
    </View>
  </View>
);

export default Product;