import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AIScannerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← AI Plant Scanner</Text>
        </TouchableOpacity>
      </View>

      {/* Scanner Frame */}
      <View style={styles.scanArea}>
        <Text style={styles.plantEmoji}>🌿</Text>
        <View style={styles.scanFrame}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
      </View>

      <Text style={styles.hint}>
        Point at any plant — identifies species, health & care{'\n'}in under 5 seconds
      </Text>

      {/* Bottom Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlBtn}>
          <Text style={styles.controlIcon}>🖼️</Text>
          <Text style={styles.controlLabel}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.captureBtn}
          onPress={() => navigation.navigate('ScanResult')}
        >
          <Text style={styles.captureIcon}>📷</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn}>
          <Text style={styles.controlIcon}>💡</Text>
          <Text style={styles.controlLabel}>Flash</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.powered}>Powered by PlantNet API · 500 scans/day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', alignItems: 'center' },
  header: { width: '100%', padding: 24, paddingTop: 50 },
  backText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  scanArea: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  plantEmoji: { fontSize: 100 },
  scanFrame: { position: 'absolute', width: 220, height: 220 },
  corner: { position: 'absolute', width: 30, height: 30, borderColor: '#52B788', borderWidth: 3 },
  topLeft: { top: 0, left: 0, borderRightWidth: 0, borderBottomWidth: 0 },
  topRight: { top: 0, right: 0, borderLeftWidth: 0, borderBottomWidth: 0 },
  bottomLeft: { bottom: 0, left: 0, borderRightWidth: 0, borderTopWidth: 0 },
  bottomRight: { bottom: 0, right: 0, borderLeftWidth: 0, borderTopWidth: 0 },
  hint: { color: '#aaa', textAlign: 'center', fontSize: 13, marginBottom: 32, paddingHorizontal: 32 },
  controls: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-around', width: '100%', paddingBottom: 20,
  },
  controlBtn: { alignItems: 'center' },
  controlIcon: { fontSize: 28 },
  controlLabel: { color: '#aaa', fontSize: 12, marginTop: 4 },
  captureBtn: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: '#52B788', alignItems: 'center', justifyContent: 'center',
  },
  captureIcon: { fontSize: 32 },
  powered: { color: '#555', fontSize: 11, marginBottom: 16 },
});