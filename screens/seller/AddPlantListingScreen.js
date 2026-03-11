import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function AddPlantListingScreen({ navigation }) {
  const [plantName, setPlantName] = useState('Peace Lily');
  const [category, setCategory] = useState('Indoor Plant');
  const [price, setPrice] = useState('450');
  const [stock, setStock] = useState('12 pcs');
  const [description, setDescription] = useState('');
  const [aiScanned, setAiScanned] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Plant Listing</Text>
      </View>

      {/* Photo Upload */}
      <TouchableOpacity style={styles.photoUpload}>
        <Text style={styles.photoIcon}>📷</Text>
        <Text style={styles.photoText}>Upload plant photo</Text>
        <View style={styles.scanAiBadge}>
          <Text style={styles.scanAiText}>🔍 Scan with AI</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.form}>
        {/* Plant Name */}
        <Text style={styles.label}>Plant Name</Text>
        <TextInput
          style={styles.input}
          value={plantName}
          onChangeText={setPlantName}
          placeholder="e.g. Peace Lily"
        />

        {/* Category */}
        <Text style={styles.label}>Category</Text>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>{category}</Text>
          <Text style={styles.selectArrow}>▼</Text>
        </View>

        {/* Price & Stock */}
        <View style={styles.row}>
          <View style={styles.halfField}>
            <Text style={styles.label}>Price (Rs.)</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.label}>Stock</Text>
            <TextInput
              style={styles.input}
              value={stock}
              onChangeText={setStock}
            />
          </View>
        </View>

        {/* Description */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          placeholder="Care tips, details..."
          multiline
          numberOfLines={4}
        />

        {/* AI Verification */}
        {aiScanned && (
          <View style={styles.aiResult}>
            <Text style={styles.aiTitle}>🔍 AI Verification Result</Text>
            <Text style={styles.aiText}>Species: Spathiphyllum wallisii</Text>
            <Text style={styles.aiText}>Health: 98/100 ✅ Safe to sell</Text>
          </View>
        )}

        {/* Publish Button */}
        <TouchableOpacity
          style={styles.publishBtn}
          onPress={() => navigation.navigate('SellerDashboard')}
        >
          <Text style={styles.publishBtnText}>Publish Listing 🚀</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 24, paddingTop: 50, gap: 16 },
  backText: { fontSize: 22, color: '#1B4332' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B4332' },
  photoUpload: {
    margin: 16, height: 140, borderWidth: 2, borderColor: '#B7E4C7',
    borderStyle: 'dashed', borderRadius: 14, alignItems: 'center',
    justifyContent: 'center', backgroundColor: '#F0FFF4', position: 'relative',
  },
  photoIcon: { fontSize: 36, marginBottom: 8 },
  photoText: { color: '#888', fontSize: 14 },
  scanAiBadge: {
    position: 'absolute', bottom: 12, right: 12,
    backgroundColor: '#1B4332', borderRadius: 20,
    paddingHorizontal: 12, paddingVertical: 6,
  },
  scanAiText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  form: { padding: 16 },
  label: { fontSize: 13, color: '#444', marginBottom: 6, marginTop: 4 },
  input: {
    borderWidth: 1.5, borderColor: '#D0E8D0', borderRadius: 10,
    padding: 12, fontSize: 14, backgroundColor: '#F8FFF8', marginBottom: 12,
  },
  selectBox: {
    flexDirection: 'row', justifyContent: 'space-between',
    borderWidth: 1.5, borderColor: '#D0E8D0', borderRadius: 10,
    padding: 12, backgroundColor: '#F8FFF8', marginBottom: 12,
  },
  selectText: { fontSize: 14, color: '#333' },
  selectArrow: { color: '#888' },
  row: { flexDirection: 'row', gap: 12 },
  halfField: { flex: 1 },
  textArea: {
    borderWidth: 1.5, borderColor: '#D0E8D0', borderRadius: 10,
    padding: 12, fontSize: 14, backgroundColor: '#F8FFF8',
    marginBottom: 16, height: 100, textAlignVertical: 'top',
  },
  aiResult: {
    backgroundColor: '#F0FFF4', borderRadius: 12, padding: 14,
    borderWidth: 1, borderColor: '#B7E4C7', marginBottom: 20,
  },
  aiTitle: { fontSize: 14, fontWeight: 'bold', color: '#1B4332', marginBottom: 6 },
  aiText: { fontSize: 13, color: '#555', marginBottom: 2 },
  publishBtn: {
    backgroundColor: '#1B4332', padding: 16,
    borderRadius: 12, alignItems: 'center', marginBottom: 40,
  },
  publishBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});