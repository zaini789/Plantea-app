import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function OrderSummaryScreen({ navigation, route }) {
  const plant = route.params?.plant || { name: 'Peace Lily', emoji: '🌿', price: 450 };
  const [payment, setPayment] = useState('cod');
  const delivery = 120, platform = 15;
  const total = plant.price + delivery + platform;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Summary</Text>
      </View>

      {/* Order Item */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧾 Your Order</Text>
        <View style={styles.orderItem}>
          <Text style={styles.orderEmoji}>{plant.emoji}</Text>
          <View>
            <Text style={styles.orderName}>{plant.name}</Text>
            <Text style={styles.orderSeller}>Hassan Nursery · AI Verified ✅</Text>
            <Text style={styles.orderPrice}>Rs. {plant.price} × 1</Text>
          </View>
        </View>
      </View>

      {/* Price Breakdown */}
      <View style={styles.section}>
        {[
          { label: 'Subtotal', value: plant.price },
          { label: 'Delivery', value: delivery },
          { label: 'Platform', value: platform },
        ].map(item => (
          <View key={item.label} style={styles.priceRow}>
            <Text style={styles.priceLabel}>{item.label}</Text>
            <Text style={styles.priceValue}>Rs. {item.value}</Text>
          </View>
        ))}
        <View style={[styles.priceRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>Rs. {total}</Text>
        </View>
      </View>

      {/* Delivery Address */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>📍 Delivery Address</Text>
          <TouchableOpacity><Text style={styles.changeText}>Change</Text></TouchableOpacity>
        </View>
        <Text style={styles.addressText}>
          House 42, Street 7, DHA Phase 5{'\n'}Lahore, Punjab 54000
        </Text>
      </View>

      {/* Payment */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💳 Payment</Text>
        {[
          { id: 'cod', label: 'Cash on Delivery' },
          { id: 'jazz', label: 'JazzCash / EasyPaisa' },
        ].map(option => (
          <TouchableOpacity
            key={option.id}
            style={styles.paymentOption}
            onPress={() => setPayment(option.id)}
          >
            <View style={[styles.radio, payment === option.id && styles.radioActive]} />
            <Text style={styles.paymentLabel}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Place Order */}
      <TouchableOpacity
        style={styles.placeOrderBtn}
        onPress={() => navigation.navigate('OrderSuccess')}
      >
        <Text style={styles.placeOrderText}>Place Order · Rs. {total} →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    flexDirection: 'row', alignItems: 'center',
    padding: 24, paddingTop: 50,
    backgroundColor: '#fff', gap: 16,
  },
  backText: { fontSize: 22, color: '#1B4332' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B4332' },
  section: { backgroundColor: '#fff', margin: 12, borderRadius: 16, padding: 16 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#1B4332', marginBottom: 12 },
  orderItem: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  orderEmoji: { fontSize: 40 },
  orderName: { fontSize: 15, fontWeight: 'bold', color: '#1B4332' },
  orderSeller: { fontSize: 12, color: '#888' },
  orderPrice: { fontSize: 13, color: '#1B4332', marginTop: 4 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  priceLabel: { color: '#888', fontSize: 14 },
  priceValue: { color: '#333', fontSize: 14 },
  totalRow: { borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 8, marginTop: 4 },
  totalLabel: { fontWeight: 'bold', fontSize: 15, color: '#1B4332' },
  totalValue: { fontWeight: 'bold', fontSize: 15, color: '#1B4332' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  changeText: { color: '#1B4332', fontSize: 13 },
  addressText: { color: '#555', fontSize: 14, lineHeight: 22 },
  paymentOption: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#1B4332' },
  radioActive: { backgroundColor: '#1B4332' },
  paymentLabel: { fontSize: 14, color: '#333' },
  placeOrderBtn: {
    backgroundColor: '#1B4332', margin: 16,
    padding: 18, borderRadius: 14,
    alignItems: 'center', marginBottom: 40,
  },
  placeOrderText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});