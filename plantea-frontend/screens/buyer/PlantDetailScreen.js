import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function PlantDetailScreen({ navigation, route }) {
  const plant = route.params?.plant || {
    name: 'Peace Lily', emoji: '🌿', price: 450,
    seller: 'Hassan Nursery', rating: 4.8, location: 'Gulberg, Lahore',
    description: 'Air-purifying plant, perfect for Pakistani homes. Low maintenance, thrives in indirect light.',
  };

  return (
    <ScrollView style={styles.container}>
      {/* Image Area */}
      <View style={styles.imageArea}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.plantEmoji}>{plant.emoji}</Text>
        <View style={styles.healthBadge}>
          <Text style={styles.healthText}>98% Healthy</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantLatin}>Spathiphyllum wallisii</Text>
        <Text style={styles.plantPrice}>Rs. {plant.price}</Text>

        {/* Seller */}
        <View style={styles.sellerRow}>
          <Text style={styles.sellerEmoji}>🌱</Text>
          <View>
            <Text style={styles.sellerName}>{plant.seller}</Text>
            <Text style={styles.sellerLocation}>⭐ {plant.rating} · Gulberg, Lahore</Text>
          </View>
          <TouchableOpacity style={styles.viewBtn}>
            <Text style={styles.viewBtnText}>View →</Text>
          </TouchableOpacity>
        </View>

        {/* Care Info */}
        <View style={styles.careRow}>
          {[
            { icon: '💧', label: 'Water', value: '2×/week' },
            { icon: '☀️', label: 'Light', value: 'Indirect' },
            { icon: '🌡️', label: 'Temp', value: '18–28°C' },
          ].map(item => (
            <View key={item.label} style={styles.careCard}>
              <Text style={styles.careIcon}>{item.icon}</Text>
              <Text style={styles.careLabel}>{item.label}</Text>
              <Text style={styles.careValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.description}>{plant.description}</Text>

        {/* Buttons */}
        <View style={styles.btnRow}>
            <TouchableOpacity
  style={styles.cartBtn}
  onPress={() => navigation.navigate('OrderSummary', { plant })}
>
  <Text style={styles.cartBtnText}>🛒 Add to Cart</Text>
</TouchableOpacity>
          <TouchableOpacity style={styles.chatBtn}>
            <Text style={styles.chatBtnText}>💬 Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartBtn}
            onPress={() => navigation.navigate('OrderSummary', { plant })}
          >
            <Text style={styles.cartBtnText}>🛒 Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageArea: { backgroundColor: '#D8F3DC', height: 280, alignItems: 'center', justifyContent: 'center' },
  backBtn: { position: 'absolute', top: 50, left: 16, backgroundColor: '#fff', borderRadius: 20, width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 18, color: '#1B4332' },
  plantEmoji: { fontSize: 100 },
  healthBadge: { position: 'absolute', bottom: 16, left: 16, backgroundColor: '#1B4332', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4 },
  healthText: { color: '#fff', fontSize: 12 },
  content: { padding: 24 },
  plantName: { fontSize: 28, fontWeight: 'bold', color: '#1B4332' },
  plantLatin: { fontSize: 13, color: '#888', fontStyle: 'italic', marginBottom: 8 },
  plantPrice: { fontSize: 22, fontWeight: 'bold', color: '#1B4332', marginBottom: 16 },
  sellerRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', padding: 12, borderRadius: 12, marginBottom: 16, gap: 10 },
  sellerEmoji: { fontSize: 28 },
  sellerName: { fontWeight: 'bold', color: '#1B4332', fontSize: 14 },
  sellerLocation: { fontSize: 12, color: '#888' },
  viewBtn: { marginLeft: 'auto' },
  viewBtnText: { color: '#1B4332', fontWeight: 'bold' },
  careRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  careCard: { flex: 1, alignItems: 'center', backgroundColor: '#F0FFF4', borderRadius: 12, padding: 12, marginHorizontal: 4 },
  careIcon: { fontSize: 24, marginBottom: 4 },
  careLabel: { fontSize: 11, color: '#888' },
  careValue: { fontSize: 13, fontWeight: 'bold', color: '#1B4332' },
  description: { fontSize: 14, color: '#555', lineHeight: 22, marginBottom: 24 },
  btnRow: { flexDirection: 'row', gap: 12 },
  chatBtn: { flex: 1, borderWidth: 1.5, borderColor: '#1B4332', padding: 16, borderRadius: 12, alignItems: 'center' },
  chatBtnText: { color: '#1B4332', fontWeight: 'bold' },
  cartBtn: { flex: 2, backgroundColor: '#1B4332', padding: 16, borderRadius: 12, alignItems: 'center' },
  cartBtnText: { color: '#fff', fontWeight: 'bold' },
});