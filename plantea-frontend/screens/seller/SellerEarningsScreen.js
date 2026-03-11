import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const recent = [
  { name: 'Peace Lily × 1', time: 'Today 9:30 AM', amount: '+Rs.427', emoji: '🌿' },
  { name: 'Money Plant × 2', time: 'Today 8:15 AM', amount: '+Rs.568', emoji: '🪴' },
  { name: 'Anthurium × 1', time: 'Yesterday', amount: '+Rs.1,140', emoji: '🌸' },
];

const bars = [40, 70, 100, 60, 80, 50, 65];

export default function SellerEarningsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Weekly');

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Earnings 💰</Text>
        </View>

        {/* Total Earnings */}
        <View style={styles.earningsCard}>
          <Text style={styles.earningsAmount}>Rs. 48,250</Text>
          <Text style={styles.earningsPeriod}>Total · March 2025</Text>
          <View style={styles.earningsRow}>
            <View style={styles.earningsStat}>
              <Text style={styles.earningsStatValue}>Rs.42K</Text>
              <Text style={styles.earningsStatLabel}>After Commission</Text>
            </View>
            <View style={styles.earningsDivider} />
            <View style={styles.earningsStat}>
              <Text style={styles.earningsStatValue}>Rs.6.2K</Text>
              <Text style={styles.earningsStatLabel}>Commission (5%)</Text>
            </View>
          </View>
        </View>

        {/* Chart Tabs */}
        <View style={styles.tabRow}>
          {['Daily', 'Weekly', 'Monthly'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bar Chart */}
        <View style={styles.chartArea}>
          {bars.map((height, i) => (
            <View key={i} style={styles.barWrapper}>
              <View style={[styles.bar, { height: height, opacity: i === 2 ? 1 : 0.4 }]} />
            </View>
          ))}
        </View>

        {/* Recent */}
        <Text style={styles.recentTitle}>Recent</Text>
        {recent.map((item, index) => (
          <View key={index} style={styles.recentItem}>
            <Text style={styles.recentEmoji}>{item.emoji}</Text>
            <View style={styles.recentInfo}>
              <Text style={styles.recentName}>{item.name}</Text>
              <Text style={styles.recentTime}>{item.time}</Text>
            </View>
            <Text style={styles.recentAmount}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {[
          { icon: '📊', label: 'Dashboard' },
          { icon: '🌱', label: 'Listings' },
          { icon: '📦', label: 'Orders' },
          { icon: '💰', label: 'Earnings' },
        ].map((item, index) => (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            onPress={() => index === 0 && navigation.navigate('SellerDashboard')}
          >
            <Text style={[styles.navIcon, index === 3 && { color: '#1B4332' }]}>{item.icon}</Text>
            <Text style={[styles.navLabel, index === 3 && { color: '#1B4332', fontWeight: 'bold' }]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: { padding: 24, paddingTop: 50, backgroundColor: '#F5F5F5' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1B4332' },
  earningsCard: { backgroundColor: '#1B4332', margin: 16, borderRadius: 20, padding: 24, alignItems: 'center' },
  earningsAmount: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  earningsPeriod: { color: '#95D5B2', fontSize: 13, marginBottom: 20 },
  earningsRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-around' },
  earningsStat: { alignItems: 'center' },
  earningsStatValue: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  earningsStatLabel: { color: '#95D5B2', fontSize: 11, marginTop: 4 },
  earningsDivider: { width: 1, backgroundColor: '#2D6A4F' },
  tabRow: { flexDirection: 'row', backgroundColor: '#fff', margin: 16, borderRadius: 12, padding: 4 },
  tab: { flex: 1, padding: 10, borderRadius: 10, alignItems: 'center' },
  tabActive: { backgroundColor: '#1B4332' },
  tabText: { color: '#888', fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  chartArea: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', backgroundColor: '#fff', marginHorizontal: 16, borderRadius: 16, padding: 16, height: 140 },
  barWrapper: { flex: 1, alignItems: 'center' },
  bar: { width: 24, backgroundColor: '#1B4332', borderRadius: 6 },
  recentTitle: { fontSize: 16, fontWeight: 'bold', color: '#1B4332', paddingHorizontal: 16, marginBottom: 12 },
  recentItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 16, borderRadius: 14, padding: 14, marginBottom: 10, gap: 12 },
  recentEmoji: { fontSize: 28 },
  recentInfo: { flex: 1 },
  recentName: { fontSize: 14, fontWeight: 'bold', color: '#1B4332' },
  recentTime: { fontSize: 12, color: '#888', marginTop: 2 },
  recentAmount: { fontSize: 14, fontWeight: 'bold', color: '#10B981' },
  bottomNav: { flexDirection: 'row', backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 16, borderTopWidth: 1, borderTopColor: '#eee', justifyContent: 'space-around' },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 22 },
  navLabel: { fontSize: 10, color: '#555', marginTop: 2 },
});