import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const deliveries = [
  { name: 'Peace Lily · Gulberg→DHA', time: '9:52 AM · 14 min', amount: '+Rs.180', emoji: '🌿' },
  { name: 'Monstera × 2', time: '8:30 AM · 22 min', amount: '+Rs.260', emoji: '🪴' },
  { name: 'Snake Plant × 1', time: '7:45 AM · 18 min', amount: '+Rs.160', emoji: '🌱' },
];

const bars = [50, 80, 45, 100, 60, 40, 70];

export default function RiderEarningsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Daily');

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Rider Earnings 🛵</Text>

          {/* Total Card */}
          <View style={styles.earningsCard}>
            <Text style={styles.earningsAmount}>Rs. 14,600</Text>
            <Text style={styles.earningsPeriod}>This Week · 58 Deliveries</Text>
            <View style={styles.earningsRow}>
              <View style={styles.earningsStat}>
                <Text style={styles.earningsStatValue}>58</Text>
                <Text style={styles.earningsStatLabel}>Deliveries</Text>
              </View>
              <View style={styles.earningsDivider} />
              <View style={styles.earningsStat}>
                <Text style={styles.earningsStatValue}>Rs.252</Text>
                <Text style={styles.earningsStatLabel}>Avg Per Trip</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabRow}>
          {['Daily', 'Weekly', 'Monthly'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bar Chart */}
        <View style={styles.chartArea}>
          {bars.map((height, i) => (
            <View key={i} style={styles.barWrapper}>
              <View style={[styles.bar, { height, opacity: i === 3 ? 1 : 0.35 }]} />
            </View>
          ))}
        </View>

        {/* Today's Deliveries */}
        <Text style={styles.sectionTitle}>Today's Deliveries</Text>
        {deliveries.map((item, index) => (
          <View key={index} style={styles.deliveryItem}>
            <Text style={styles.deliveryEmoji}>{item.emoji}</Text>
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryName}>{item.name}</Text>
              <Text style={styles.deliveryTime}>{item.time}</Text>
            </View>
            <Text style={styles.deliveryAmount}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {[
          { icon: '🏠', label: 'Home' },
          { icon: '🗺️', label: 'Map' },
          { icon: '📦', label: 'History' },
          { icon: '💰', label: 'Earnings' },
        ].map((item, index) => (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            onPress={() => index === 0 && navigation.navigate('RiderDashboard')}
          >
            <Text style={styles.navIcon}>{item.icon}</Text>
            <Text style={[styles.navLabel, index === 3 && { color: '#E85D04', fontWeight: 'bold' }]}>
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
  header: { backgroundColor: '#F5F5F5', padding: 24, paddingTop: 50 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1B4332', marginBottom: 16 },
  earningsCard: {
    backgroundColor: '#E85D04', borderRadius: 20,
    padding: 24, alignItems: 'center',
  },
  earningsAmount: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  earningsPeriod: { color: '#FFD7B5', fontSize: 13, marginBottom: 20 },
  earningsRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-around' },
  earningsStat: { alignItems: 'center' },
  earningsStatValue: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  earningsStatLabel: { color: '#FFD7B5', fontSize: 11, marginTop: 4 },
  earningsDivider: { width: 1, backgroundColor: '#C44D00' },
  tabRow: {
    flexDirection: 'row', backgroundColor: '#fff',
    margin: 16, borderRadius: 12, padding: 4,
  },
  tab: { flex: 1, padding: 10, borderRadius: 10, alignItems: 'center' },
  tabActive: { backgroundColor: '#1B4332' },
  tabText: { color: '#888', fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  chartArea: {
    flexDirection: 'row', alignItems: 'flex-end',
    justifyContent: 'space-around', backgroundColor: '#fff',
    marginHorizontal: 16, borderRadius: 16, padding: 16, height: 140,
  },
  barWrapper: { flex: 1, alignItems: 'center' },
  bar: { width: 24, backgroundColor: '#1B4332', borderRadius: 6 },
  sectionTitle: {
    fontSize: 16, fontWeight: 'bold', color: '#1B4332',
    paddingHorizontal: 16, marginTop: 16, marginBottom: 12,
  },
  deliveryItem: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', marginHorizontal: 16,
    borderRadius: 14, padding: 14, marginBottom: 10, gap: 12,
  },
  deliveryEmoji: { fontSize: 28 },
  deliveryInfo: { flex: 1 },
  deliveryName: { fontSize: 14, fontWeight: 'bold', color: '#1B4332' },
  deliveryTime: { fontSize: 12, color: '#888', marginTop: 2 },
  deliveryAmount: { fontSize: 14, fontWeight: 'bold', color: '#10B981' },
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