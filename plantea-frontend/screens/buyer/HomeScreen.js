import { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TextInput, TouchableOpacity,
} from 'react-native';

const plants = [
  { id: '1', name: 'Peace Lily', seller: 'Hassan Nursery', price: 450, emoji: '🌿', ai: true, type: 'indoor' },
  { id: '2', name: 'Money Plant', seller: 'GreenGrow', price: 299, emoji: '🪴', ai: true, type: 'indoor' },
  { id: '3', name: 'Snake Plant', seller: 'EcoRoots', price: 650, emoji: '🌱', ai: true, type: 'outdoor' },
  { id: '4', name: 'Anthurium', seller: 'PlantHub LHR', price: 1200, emoji: '🌸', ai: true, type: 'rare' },
];

const filters = ['All', 'Indoor 🌿', 'Outdoor 🌲', 'Rare 🌸'];

export default function HomeScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = plants.filter(p => {
    const matchFilter = activeFilter === 'All' || p.type === activeFilter.split(' ')[0].toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning ☀️</Text>
        <Text style={styles.name}>Shehroz Malik</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search plants, sellers..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          {filters.map(f => (
            <TouchableOpacity
              key={f}
              style={[styles.filterBtn, activeFilter === f && styles.filterBtnActive]}
              onPress={() => setActiveFilter(f)}
            >
              <Text style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Plants */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Plants</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {filtered.map(plant => (
            <TouchableOpacity
              key={plant.id}
              style={styles.card}
              onPress={() => navigation.navigate('PlantDetail', { plant })}
            >
              {plant.ai && (
                <View style={styles.aiBadge}>
                  <Text style={styles.aiBadgeText}>✓ AI</Text>
                </View>
              )}
              <Text style={styles.plantEmoji}>{plant.emoji}</Text>
              <Text style={styles.plantName}>{plant.name}</Text>
              <Text style={styles.plantSeller}>{plant.seller}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.plantPrice}>Rs.{plant.price}</Text>
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() => navigation.navigate('PlantDetail', { plant })}
                >
                  <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      {/* Bottom Nav */}
<View style={styles.bottomNav}>
  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate('Home')}
  >
    <Text style={styles.navIcon}>🏠</Text>
    <Text style={[styles.navLabel, { color: '#1B4332', fontWeight: 'bold' }]}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate('Home')}
  >
    <Text style={styles.navIcon}>🔍</Text>
    <Text style={styles.navLabel}>Explore</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.scanFab}
    onPress={() => navigation.navigate('AIScanner')}
  >
    <Text style={styles.scanFabText}>📷</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate('OrderTracking')}
  >
    <Text style={styles.navIcon}>📦</Text>
    <Text style={styles.navLabel}>Orders</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.navIcon}>👤</Text>
    <Text style={styles.navLabel}>Profile</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    backgroundColor: '#1B4332', padding: 24, paddingTop: 50,
    borderBottomLeftRadius: 24, borderBottomRightRadius: 24,
  },
  greeting: { color: '#95D5B2', fontSize: 13 },
  name: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  searchBar: { backgroundColor: '#fff', borderRadius: 12, padding: 12, fontSize: 14, color: '#333' },
  filterRow: { paddingHorizontal: 16, paddingVertical: 12 },
  filterBtn: {
    paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20,
    backgroundColor: '#fff', marginRight: 8, borderWidth: 1, borderColor: '#ddd',
  },
  filterBtnActive: { backgroundColor: '#1B4332', borderColor: '#1B4332' },
  filterText: { color: '#555', fontSize: 13 },
  filterTextActive: { color: '#fff' },
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: 16, marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1B4332' },
  seeAll: { color: '#2D6A4F', fontSize: 13 },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 12, gap: 12, paddingBottom: 100,
  },
  card: { width: '47%', backgroundColor: '#fff', borderRadius: 16, padding: 12, position: 'relative' },
  aiBadge: {
    position: 'absolute', top: 8, right: 8,
    backgroundColor: '#1B4332', borderRadius: 8,
    paddingHorizontal: 6, paddingVertical: 2,
  },
  aiBadgeText: { color: '#fff', fontSize: 10 },
  plantEmoji: { fontSize: 48, textAlign: 'center', marginVertical: 8 },
  plantName: { fontSize: 14, fontWeight: 'bold', color: '#1B4332' },
  plantSeller: { fontSize: 11, color: '#888', marginBottom: 8 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  plantPrice: { fontSize: 14, fontWeight: 'bold', color: '#1B4332' },
  addBtn: {
    backgroundColor: '#1B4332', width: 28, height: 28,
    borderRadius: 14, alignItems: 'center', justifyContent: 'center',
  },
  addBtnText: { color: '#fff', fontSize: 18, lineHeight: 22 },
  bottomNav: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#fff', flexDirection: 'row',
    paddingVertical: 10, paddingHorizontal: 24,
    borderTopWidth: 1, borderTopColor: '#eee',
    justifyContent: 'space-between', alignItems: 'center',
  },
  navItem: { alignItems: 'center', flex: 1 },
  navIcon: { fontSize: 22 },
  navLabel: { fontSize: 10, color: '#555', marginTop: 2 },
  scanFab: {
    backgroundColor: '#1B4332', width: 56, height: 56,
    borderRadius: 28, alignItems: 'center', justifyContent: 'center',
    marginBottom: 16, flex: 1,
  },
  scanFabText: { fontSize: 24 },
});