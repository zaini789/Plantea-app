import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const orders = [
  {
    id: '1',
    name: 'Peace Lily — Hassan Nursery',
    desc: '1 plant · Fragile 🌿',
    from: 'Gulberg III, Lahore',
    to: 'DHA Phase 5, Lahore',
    distance: '3.2 km',
    time: '~14 min',
    price: 'Rs.180',
  },
  {
    id: '2',
    name: 'Monstera × 2 — EcoRoots',
    desc: '2 plants · Large pots',
    from: 'Model Town, Lahore',
    to: 'Johar Town, Lahore',
    distance: '5.8 km',
    time: '~22 min',
    price: 'Rs.260',
  },
];

export default function RiderDashboardScreen({ navigation }) {
  const [online, setOnline] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back 🛵</Text>
        <Text style={styles.riderName}>Usman Tariq</Text>
        <TouchableOpacity
          style={[styles.statusBadge, !online && styles.statusBadgeOffline]}
          onPress={() => setOnline(!online)}
        >
          <View style={[styles.statusDot, !online && styles.statusDotOffline]} />
          <Text style={styles.statusText}>
            {online ? 'Online · Accepting Orders' : 'Offline'}
          </Text>
        </TouchableOpacity>

        {/* Stats */}
        <View style={styles.statsRow}>
          {[
            { label: 'Today', value: 'Rs.2,400' },
            { label: 'Deliveries', value: '8' },
            { label: 'Rating', value: '4.9 ⭐' },
          ].map(stat => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>🗺️ Orders Nearby</Text>

        {orders.map(order => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderTop}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderName}>{order.name}</Text>
                <Text style={styles.orderDesc}>{order.desc}</Text>
              </View>
              <Text style={styles.orderPrice}>{order.price}</Text>
            </View>

            {/* Route */}
            <View style={styles.routeBox}>
              <View style={styles.routeRow}>
                <View style={styles.dotGreen} />
                <Text style={styles.routeText}>{order.from}</Text>
              </View>
              <View style={styles.routeRow}>
                <View style={styles.dotRed} />
                <Text style={styles.routeText}>{order.to}</Text>
              </View>
            </View>

            {/* Distance */}
            <View style={styles.distanceRow}>
              <Text style={styles.distanceText}>📍 {order.distance}</Text>
              <Text style={styles.distanceText}>🕐 {order.time}</Text>
            </View>

            {/* Buttons */}
            <View style={styles.btnRow}>
              <TouchableOpacity
                style={styles.acceptBtn}
                onPress={() => navigation.navigate('OrderTracking')}
              >
                <Text style={styles.acceptBtnText}>✓ Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.declineBtn}>
                <Text style={styles.declineBtnText}>✕ Decline</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {[
          { icon: '🏠', label: 'Home', screen: 'RiderDashboard' },
          { icon: '🗺️', label: 'Map', screen: 'RiderDashboard' },
          { icon: '📦', label: 'History', screen: 'RiderDashboard' },
          { icon: '💰', label: 'Earnings', screen: 'RiderEarnings' },
        ].map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.navIcon}>{item.icon}</Text>
            <Text style={[
              styles.navLabel,
              item.label === 'Home' && { color: '#E85D04', fontWeight: 'bold' }
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
    backgroundColor: '#E85D04',
    padding: 24, paddingTop: 50,
    borderBottomLeftRadius: 24, borderBottomRightRadius: 24,
  },
  welcomeText: { color: '#FFD7B5', fontSize: 13 },
  riderName: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  statusBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: '#C44D00', borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 6,
    alignSelf: 'flex-start', marginBottom: 16,
  },
  statusBadgeOffline: { backgroundColor: '#888' },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#4ADE80' },
  statusDotOffline: { backgroundColor: '#ccc' },
  statusText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  statsRow: { flexDirection: 'row', gap: 12 },
  statCard: {
    flex: 1, backgroundColor: '#C44D00',
    borderRadius: 12, padding: 12, alignItems: 'center',
  },
  statValue: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  statLabel: { color: '#FFD7B5', fontSize: 11, marginTop: 4 },
  content: { flex: 1, padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1B4332', marginBottom: 12, marginTop: 4 },
  orderCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 16 },
  orderTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  orderInfo: { flex: 1 },
  orderName: { fontSize: 14, fontWeight: 'bold', color: '#1B4332' },
  orderDesc: { fontSize: 12, color: '#888', marginTop: 2 },
  orderPrice: { fontSize: 16, fontWeight: 'bold', color: '#1B4332' },
  routeBox: { backgroundColor: '#F8F8F8', borderRadius: 10, padding: 10, marginBottom: 10, gap: 8 },
  routeRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dotGreen: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#4ADE80' },
  dotRed: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#EF4444' },
  routeText: { fontSize: 13, color: '#333' },
  distanceRow: { flexDirection: 'row', gap: 16, marginBottom: 12 },
  distanceText: { fontSize: 12, color: '#888' },
  btnRow: { flexDirection: 'row', gap: 10 },
  acceptBtn: {
    flex: 1, backgroundColor: '#1B4332',
    padding: 12, borderRadius: 10, alignItems: 'center',
  },
  acceptBtnText: { color: '#fff', fontWeight: 'bold' },
  declineBtn: {
    flex: 1, borderWidth: 1.5, borderColor: '#ddd',
    padding: 12, borderRadius: 10, alignItems: 'center',
  },
  declineBtnText: { color: '#888', fontWeight: 'bold' },
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