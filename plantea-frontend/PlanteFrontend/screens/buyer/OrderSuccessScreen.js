import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OrderSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.checkCircle}>
        <Text style={styles.checkIcon}>✓</Text>
      </View>

      <Text style={styles.title}>Order Placed!</Text>
      <Text style={styles.subtitle}>
        Your Peace Lily is confirmed.{'\n'}A plant-safe rider has been assigned.
      </Text>

      <View style={styles.orderIdBox}>
        <Text style={styles.orderIdText}>ORDER #PLT-2025-0483</Text>
      </View>

      <Text style={styles.deliveryLabel}>Estimated Delivery</Text>
      <Text style={styles.deliveryTime}>35 – 45 min</Text>

      <TouchableOpacity
        style={styles.trackBtn}
        onPress={() => navigation.navigate('OrderTracking')}
      >
        <Text style={styles.trackBtnText}>Track My Order 📍</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.continueBtnText}>Continue Shopping 🌿</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  checkCircle: {
    width: 100, height: 100, borderRadius: 50,
    backgroundColor: '#1B4332',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 28,
  },
  checkIcon: { fontSize: 48, color: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1B4332', marginBottom: 12 },
  subtitle: { fontSize: 14, color: '#888', textAlign: 'center', lineHeight: 22, marginBottom: 24 },
  orderIdBox: {
    borderWidth: 1.5, borderColor: '#1B4332',
    borderRadius: 20, paddingHorizontal: 20,
    paddingVertical: 8, marginBottom: 24,
  },
  orderIdText: { color: '#1B4332', fontWeight: 'bold', fontSize: 13 },
  deliveryLabel: { fontSize: 13, color: '#888', marginBottom: 4 },
  deliveryTime: { fontSize: 28, fontWeight: 'bold', color: '#1B4332', marginBottom: 40 },
  trackBtn: {
    backgroundColor: '#1B4332', width: '100%',
    padding: 16, borderRadius: 12,
    alignItems: 'center', marginBottom: 12,
  },
  trackBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  continueBtn: {
    width: '100%', padding: 16, borderRadius: 12,
    alignItems: 'center', borderWidth: 1.5, borderColor: '#1B4332',
  },
  continueBtnText: { color: '#1B4332', fontSize: 16, fontWeight: 'bold' },
});