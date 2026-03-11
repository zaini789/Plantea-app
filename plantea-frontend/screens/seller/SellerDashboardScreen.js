import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const orders = [
  { id: '1', name: 'Peace Lily × 1', buyer: 'Shehroz · 10 min ago', status: 'Pending', emoji: '🌿', color: '#F59E0B' },
  { id: '2', name: 'Money Plant × 2', buyer: 'Fatima · 1 hr ago', status: 'In Transit', emoji: '🪴', color: '#3B82F6' },
  { id: '3', name: 'Anthurium × 1', buyer: 'Ali · Yesterday', status: 'Delivered', emoji: '🌸', color: '#10B981' },
];

export default function SellerDashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.storeLabel}>Your Store 🌿</Text>
        <Text style={styles.storeName}>Hassan's Nursery</Text>
        <View style={styles.statsRow}>
          {[
            { label: 'This Week', value: 'Rs.12K' },
            { label: 'Orders', value: '23' },
            { label: 'Rating', value: '4.8 ⭐' },
          ].map(stat => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Add Listing Button */}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('AddPlantListing')}
        >
          <Text style={styles.addBtnText}>+ Add New Plant Listing</Text>
        </TouchableOpacity>

        {/* Recent Orders */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {orders.map(order => (
          <View key={order.id} style={styles.orderCard}>
            <Text style={styles.orderEmoji}>{order.emoji}</Text>
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{order.name}</Text>
              <Text style={styles.orderBuyer}>{order.buyer}</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: order.color + '22' }]}>
              <Text style={[styles.statusText, { color: order.color }]}>{order.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {[
          { icon: '📊', label: 'Dashboard', screen: 'SellerDashboard' },
          { icon: '🌱', label: 'Listings', screen: 'AddPlantListing' },
          { icon: '📦', label: 'Orders', screen: 'SellerDashboard' },
          { icon: '💰', label: 'Earnings', screen: 'SellerEarnings' },
        ].map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.navIcon}>{item.icon}</Text>
            <Text style={[
              styles.navLabel,
              item.screen === 'SellerDashboard' && item.label === 'Dashboard' && { color: '#1B4332', fontWeight: 'bold' }
            ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    backgroundColor: '#1B4332',
    padding: 24, paddingTop: 50,
    borderBottomLeftRadius: 24, borderBottomRightRadius: 24,
  },
  storeLabel: { color: '#95D5B2', fontSize: 13 },
  storeName: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  statsRow: { flexDirection: 'row', gap: 12 },
  statCard: {
    flex: 1, backgroundColor: '#2D6A4F',
    borderRadius: 12, padding: 12, alignItems: 'center',
  },
  statValue: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  statLabel: { color: '#95D5B2', fontSize: 11, marginTop: 4 },
  content: { flex: 1, padding: 16 },
  addBtn: {
    backgroundColor: '#F59E0B', padding: 16,
    borderRadius: 12, alignItems: 'center',
    marginBottom: 24, marginTop: 8,
  },
  addBtnText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1B4332' },
  seeAll: { color: '#2D6A4F', fontSize: 13 },
  orderCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 14,
    padding: 14, marginBottom: 10, gap: 12,
  },
  orderEmoji: { fontSize: 32 },
  orderInfo: { flex: 1 },
  orderName: { fontSize: 14, fontWeight: 'bold', color: '#1B4332' },
  orderBuyer: { fontSize: 12, color: '#888', marginTop: 2 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  statusText: { fontSize: 12, fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row', backgroundColor: '#fff',
    paddingVertical: 10, paddingHorizontal: 16,
    borderTopWidth: 1, borderTopColor: '#eee',
    justifyContent: 'space-around',
  },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 22 },
  navLabel: { fontSize: 10, color: '#555', marginTop: 2 },
});