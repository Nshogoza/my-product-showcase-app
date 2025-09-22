import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Apple iPhone 14',
    price: '$999',
    shipping: 'Free Shipping'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22',
    price: '$799',
    shipping: 'Standard Shipping'
  },
  {
    id: 3,
    name: 'Google Pixel 7',
    price: '$599',
    shipping: 'Free Shipping'
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5 Headphones',
    price: '$349',
    shipping: 'Express Shipping'
  },
  {
    id: 5,
    name: 'Dell XPS 13 Laptop',
    price: '$1,199',
    shipping: 'Free Shipping'
  },
  {
    id: 6,
    name: 'Apple MacBook Pro',
    price: '$1,299',
    shipping: 'Express Shipping'
  },
  {
    id: 7,
    name: 'Samsung Galaxy Tab S8',
    price: '$699',
    shipping: 'Standard Shipping'
  }
];

export default function HomeScreen() {
  const handleAddToCart = (productName: string) => {
    console.log(`Added ${productName} to cart`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>index</Text>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.shippingInfo}>{product.shipping}</Text>
            </View>
            <TouchableOpacity 
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(product.name)}
            >
              <Text style={styles.buttonText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DADE2',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '600',
    marginBottom: 2,
  },
  shippingInfo: {
    fontSize: 12,
    color: '#666666',
  },
  addToCartButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
