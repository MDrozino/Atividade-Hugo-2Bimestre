import { router } from 'expo-router';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const [email, setEmail] = useState("");
  	const [senha, setSenha] = useState("");

	function entrar() {
		console.log("Email:", email);
		console.log("Senha:", senha);

		router.push({
			pathname: '/(tabs)/home',
			params: {
				user: 'John Doe',
			},
		})
	}
	return (
		<View>
			

			<TouchableOpacity onPress={entrar}>
				<Text>Entrar</Text>
			</TouchableOpacity>

			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.logo}>Instagram</Text>

					<TextInput
						placeholder="Telefone, nome de usuário ou email"
						style={styles.input}
						value={email}
						onChangeText={setEmail}
					/>

					<TextInput
						placeholder="Senha"
						style={styles.input}
						secureTextEntry
						value={senha}
						onChangeText={setSenha}
					/>

					<TouchableOpacity style={styles.button} onPress={entrar}>
					<Text style={styles.buttonText}>Entrar</Text>
					</TouchableOpacity>

					<TouchableOpacity>
					<Text style={styles.forgot}>Esqueceu a senha?</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>


		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#0095f6",
    padding: 14,
    borderRadius: 8,
    marginTop: 6,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  forgot: {
    marginTop: 18,
    textAlign: "center",
    color: "#0095f6",
  },
});
