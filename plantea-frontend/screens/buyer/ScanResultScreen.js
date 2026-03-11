import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ScanResultScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Top */}
      <View style={styles.topArea}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.listingsBtn}
  onPress={() => navigation.navigate('Home')}
>
  <Text style={styles.listingsBtnText}>View Matching Listings →</Text>
</TouchableOpacity>

        <Text style={styles.plantEmoji}>🌿</Text>
        <Text style={styles.plantName}>Peace Lily</Text>
        <Text style={styles.plantLatin}>Spathiphyllum wallisii</Text>
        <View style={styles.confidenceBar}>
          <View style={styles.confidenceFill} />
        </View>
        <Text style={styles.confidenceText}>AI Confidence Score · 94% Match</Text>
      </View>

      <View style={styles.content}>
        {/* Health Score */}
        <View style={styles.healthCard}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>98</Text>
            <Text style={styles.scoreSubText}>/100</Text>
          </View>
          <View>
            <Text style={styles.healthTitle}>Excellent Health ✅</Text>
            <Text style={styles.healthDesc}>No disease. Safe to purchase.</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Care Recommendations</Text>

        {[
          { icon: '💧', label: 'Watering', value: 'Twice a week', color: '#3B82F6' },
          { icon: '☀️', label: 'Sunlight', value: 'Indirect bright light', color: '#F59E0B' },
          { icon: '⚠️', label: 'Toxicity', value: 'Toxic to pets', color: '#EF4444' },
        ].map(item => (
          <View key={item.label} style={styles.careRow}>
            <Text style={styles.careIcon}>{item.icon}</Text>
            <View>
              <Text style={styles.careLabel}>{item.label}</Text>
              <Text style={[styles.careValue, { color: item.color }]}>{item.value}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={styles.listingsBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.listingsBtnText}>View Matching Listings →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topArea: { backgroundColor: '#1B4332', alignItems: 'center', padding: 24, paddingTop: 50, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  backText: { color: '#fff', fontSize: 22, alignSelf: 'flex-start', marginBottom: 16 },
  plantEmoji: { fontSize: 80, marginBottom: 12 },
  plantName: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  plantLatin: { fontSize: 13, color: '#95D5B2', fontStyle: 'italic', marginBottom: 16 },
  confidenceBar: { width: '80%', height: 6, backgroundColor: '#2D6A4F', borderRadius: 3, marginBottom: 6 },
  confidenceFill: { width: '94%', height: 6, backgroundColor: '#52B788', borderRadius: 3 },
  confidenceText: { color: '#95D5B2', fontSize: 12 },
  content: { padding: 24 },
  healthCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1B4332', borderRadius: 16, padding: 16, marginBottom: 24, gap: 16 },
  scoreCircle: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#2D6A4F', alignItems: 'center', justifyContent: 'center' },
  scoreText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  scoreSubText: { color: '#95D5B2', fontSize: 10 },
  healthTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  healthDesc: { color: '#95D5B2', fontSize: 13 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1B4332', marginBottom: 16 },
  careRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', borderRadius: 12, padding: 14, marginBottom: 10, gap: 14 },
  careIcon: { fontSize: 24 },
  careLabel: { fontSize: 12, color: '#888' },
  careValue: { fontSize: 14, fontWeight: 'bold' },
  listingsBtn: { backgroundColor: '#1B4332', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 16 },
  listingsBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});