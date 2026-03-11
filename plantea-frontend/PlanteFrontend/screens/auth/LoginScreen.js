import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
const handleSignIn = () => {
  const role = route.params?.role || 'buyer';
  console.log('Role is:', role);
  if (role === 'seller') {
    navigation.navigate('SellerDashboard');
  } else if (role === 'rider') {
    navigation.navigate('RiderDashboard');
  } else {
    navigation.navigate('Home');
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoIcon}>🌿</Text>
      </View>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Welcome back to Plantea</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'login' && styles.tabActive]}
          onPress={() => setActiveTab('login')}
        >
          <Text style={[styles.tabText, activeTab === 'login' && styles.tabTextActive]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'register' && styles.tabActive]}
          onPress={() => setActiveTab('register')}
        >
          <Text style={[styles.tabText, activeTab === 'register' && styles.tabTextActive]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="bilal@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
        <Text style={styles.signInBtnText}>Sign In 🌿</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.googleBtn} onPress={handleSignIn}>
        <Text style={styles.googleBtnText}>🌐 Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        New to Plantea?{' '}
        <Text
          style={styles.registerLink}
          onPress={() => setActiveTab('register')}
        >
          Create Account →
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, paddingTop: 60 },
  logoContainer: {
    width: 56, height: 56, backgroundColor: '#2D6A4F',
    borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 16,
  },
  logoIcon: { fontSize: 28 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1B4332', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#888', marginBottom: 24 },
  tabContainer: {
    flexDirection: 'row', backgroundColor: '#F0F0F0',
    borderRadius: 10, padding: 4, marginBottom: 24,
  },
  tab: { flex: 1, padding: 10, borderRadius: 8, alignItems: 'center' },
  tabActive: { backgroundColor: '#FFFFFF' },
  tabText: { color: '#888', fontWeight: '600' },
  tabTextActive: { color: '#1B4332' },
  label: { fontSize: 13, color: '#444', marginBottom: 6 },
  input: {
    borderWidth: 1.5, borderColor: '#D0E8D0', borderRadius: 10,
    padding: 12, marginBottom: 16, fontSize: 14, backgroundColor: '#F8FFF8',
  },
  forgotText: { textAlign: 'right', color: '#1B4332', marginBottom: 20, fontSize: 13 },
  signInBtn: {
    backgroundColor: '#1B4332', padding: 16,
    borderRadius: 12, alignItems: 'center', marginBottom: 16,
  },
  signInBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  orText: { textAlign: 'center', color: '#aaa', marginBottom: 16 },
  googleBtn: {
    borderWidth: 1.5, borderColor: '#E0E0E0', padding: 14,
    borderRadius: 12, alignItems: 'center', marginBottom: 24,
  },
  googleBtnText: { fontSize: 14, color: '#333' },
  registerText: { textAlign: 'center', color: '#888', fontSize: 13 },
  registerLink: { color: '#1B4332', fontWeight: 'bold' },
});