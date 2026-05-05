import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabTwoScreen() {
	return (
		<View style={{ flex: 1 }}>
			<Text>Usuario (Transformar em Perfil) </Text>


			<TouchableOpacity onPress={() => router.push('/')}>
				<Text>Sair</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => router.push('/configuracao')}>
				<Text>Ir para tela de configuração do nome</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
