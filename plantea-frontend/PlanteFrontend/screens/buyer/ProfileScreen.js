import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const menuItems = [
  { icon: '📦', label: 'My Orders', section: 1 },
  { icon: '🪴', label: 'Saved Plants', section: 1 },
  { icon: '⭐', label: 'My Reviews', section: 1 },
  { icon: '📍', label: 'Saved Addresses', section: 2 },
  { icon: '🔔', label: 'Notifications', section: 2 },
  { icon: '🌐', label: 'Language · اردو / English', section: 2 },
  { icon: '🔒', label: 'Privacy & Security', section: 3 },
  { icon: '🚪', label: 'Sign Out', section: 3, danger: true },
];

export default function ProfileScreen({ navigation }) {
  const section1 = menuItems.filter(i => i.section === 1);
  const section2 = menuItems.filter(i => i.section === 2);
  const section3 = menuItems.filter(i => i.section === 3);

  const renderItem = (item) => (
    <TouchableOpacity
      key={item.label}
      style={styles.menuItem}
      onPress={() => item.danger && navigation.replace('Splash')}
    >
      <Text style={styles.menuIcon}>{item.icon}</Text>
      <Text style={[styles.menuLabel, item.danger && styles.menuLabelDanger]}>
        {item.label}
      </Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarIcon}>👤</Text>
        </View>
        <Text style={styles.name}>Shehroz Malik</Text>
        <Text style={styles.email}>shehroz@gmail.com · Buyer</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Section 1 */}
        <View style={styles.section}>
          {section1.map(renderItem)}
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          {section2.map(renderItem)}
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          {section3.map(renderItem)}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {[
          { icon: '🏠', label: 'Home', screen: 'Home' },
          { icon: '🔍', label: 'Explore', screen: 'Home' },
          { icon: '📦', label: 'Orders', screen: 'Home' },
          { icon: '👤', label: 'Profile', screen: 'Profile' },
        ].map((item, index) => (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.navIcon}>{item.icon}</Text>
            <Text style={[
              styles.navLabel,
              index === 3 && { color: '#1B4332', fontWeight: 'bold' }
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
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatar: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#2D6A4F',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 12,
  },
  avatarIcon: { fontSize: 40 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  email: { fontSize: 13, color: '#95D5B2' },
  content: { flex: 1, padding: 16 },
  section: {
    backgroundColor: '#fff', borderRadius: 16,
    marginBottom: 12, overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row', alignItems: 'center',
    padding: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0',
    gap: 12,
  },
  menuIcon: { fontSize: 22 },
  menuLabel: { flex: 1, fontSize: 15, color: '#333' },
  menuLabelDanger: { color: '#EF4444' },
  menuArrow: { fontSize: 20, color: '#ccc' },
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