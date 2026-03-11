import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const steps = [
  { label: 'Order Confirmed', time: '9:30 AM', done: true },
  { label: 'Picked from Seller', time: '9:38 AM', done: true },
  { label: 'Out for Delivery', time: 'Now · 12 min', active: true },
  { label: 'Delivered', time: '~9:53 AM', done: false },
];

export default function OrderTrackingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Map Area */}
      <View style={styles.mapArea}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        {/* Fake Map Grid */}
        <View style={styles.mapGrid}>
          {Array.from({ length: 8 }).map((_, i) => (
            <View key={i} style={styles.mapRow}>
              {Array.from({ length: 6 }).map((_, j) => (
                <View key={j} style={styles.mapCell} />
              ))}
            </View>
          ))}
          {/* Rider */}
          <Text style={styles.riderEmoji}>🛵</Text>
          {/* Destination */}
          <Text style={styles.pinEmoji}>📍</Text>
          {/* Route Line */}
          <View style={styles.routeLine} />
        </View>
      </View>

      <ScrollView style={styles.bottomSheet}>
        {/* Status */}
        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Text style={styles.statusIconText}>🚚</Text>
          </View>
          <View>
            <Text style={styles.statusTitle}>On the Way!</Text>
            <Text style={styles.statusSub}>Estimated arrival: 12 minutes</Text>
          </View>
        </View>

        {/* Timeline */}
        {steps.map((step, index) => (
          <View key={index} style={styles.stepRow}>
            <View style={[
              styles.stepDot,
              step.done && styles.stepDotDone,
              step.active && styles.stepDotActive,
            ]}>
              {step.done && <Text style={styles.stepDotText}>✓</Text>}
            </View>
            <View style={styles.stepLine} />
            <View style={styles.stepContent}>
              <Text style={[styles.stepLabel, step.active && styles.stepLabelActive]}>
                {step.label}
              </Text>
              <Text style={styles.stepTime}>{step.time}</Text>
            </View>
          </View>
        ))}

        {/* Rider Info */}
        <View style={styles.riderCard}>
          <View style={styles.riderAvatar}>
            <Text style={styles.riderAvatarText}>👨</Text>
          </View>
          <View style={styles.riderInfo}>
            <Text style={styles.riderName}>Usman Tariq</Text>
            <Text style={styles.riderRating}>⭐ 4.9 · Plant-Safe Rider</Text>
          </View>
          <TouchableOpacity style={styles.riderAction}>
            <Text style={styles.riderActionText}>📞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riderAction}>
            <Text style={styles.riderActionText}>💬</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  mapArea: { height: 260, backgroundColor: '#D8F3DC', position: 'relative', overflow: 'hidden' },
  backBtn: {
    position: 'absolute', top: 50, left: 16, zIndex: 10,
    backgroundColor: '#fff', borderRadius: 20,
    width: 36, height: 36, alignItems: 'center', justifyContent: 'center',
  },
  backText: { fontSize: 18, color: '#1B4332' },
  mapGrid: { flex: 1, position: 'relative' },
  mapRow: { flexDirection: 'row', flex: 1 },
  mapCell: { flex: 1, borderWidth: 0.5, borderColor: '#B7E4C7' },
  riderEmoji: { position: 'absolute', top: '35%', left: '25%', fontSize: 28 },
  pinEmoji: { position: 'absolute', top: '50%', left: '60%', fontSize: 28 },
  routeLine: {
    position: 'absolute', top: '47%', left: '28%',
    width: '35%', height: 3,
    backgroundColor: '#1B4332', borderRadius: 2,
    transform: [{ rotate: '-10deg' }],
  },
  bottomSheet: { flex: 1, padding: 16 },
  statusCard: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: '#F0FFF4', borderRadius: 14, padding: 14, marginBottom: 20,
  },
  statusIcon: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#1B4332', alignItems: 'center', justifyContent: 'center',
  },
  statusIconText: { fontSize: 22 },
  statusTitle: { fontSize: 16, fontWeight: 'bold', color: '#1B4332' },
  statusSub: { fontSize: 12, color: '#888' },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16, gap: 12 },
  stepDot: {
    width: 24, height: 24, borderRadius: 12,
    borderWidth: 2, borderColor: '#ddd',
    alignItems: 'center', justifyContent: 'center',
  },
  stepDotDone: { backgroundColor: '#1B4332', borderColor: '#1B4332' },
  stepDotActive: { backgroundColor: '#F59E0B', borderColor: '#F59E0B' },
  stepDotText: { color: '#fff', fontSize: 12 },
  stepLine: { display: 'none' },
  stepContent: { flex: 1 },
  stepLabel: { fontSize: 14, color: '#333', fontWeight: '500' },
  stepLabelActive: { color: '#F59E0B', fontWeight: 'bold' },
  stepTime: { fontSize: 12, color: '#888', marginTop: 2 },
  riderCard: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: '#FFF8E7', borderRadius: 14, padding: 14,
    marginTop: 8, marginBottom: 32,
  },
  riderAvatar: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#F59E0B', alignItems: 'center', justifyContent: 'center',
  },
  riderAvatarText: { fontSize: 22 },
  riderInfo: { flex: 1 },
  riderName: { fontSize: 15, fontWeight: 'bold', color: '#1B4332' },
  riderRating: { fontSize: 12, color: '#888' },
  riderAction: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: '#eee',
  },
  riderActionText: { fontSize: 18 },
});