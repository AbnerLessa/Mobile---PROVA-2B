import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { supabase } from '../lib/supabase';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const { user, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        console.error('Erro de login:', error.message);
        Alert.alert('Erro', 'Não foi possível realizar o login: ' + error.message);
      } else {
        console.log('Login bem-sucedido:', user);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
      }
    } catch (err) {
      console.error('Erro inesperado durante o login:', err.message);
      Alert.alert('Erro inesperado', 'Tente novamente mais tarde.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/imagem1.avif')} // Caminho para a imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/uvv.png')} // Caminho para a imagem redonda
          style={styles.logo}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.textInput}
        />
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Ainda não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Levemente transparente para o conteúdo se destacar
    padding: 20,
    borderRadius: 10,
    width: '80%', // Definindo uma largura fixa para o formulário
    alignItems: 'center', // Centralizando os itens
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60, // Tornando a imagem redonda
    marginBottom: 20, // Espaço entre a imagem e os campos de input
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  link: {
    color: '#0066cc',
    marginTop: 20,
  },
});
