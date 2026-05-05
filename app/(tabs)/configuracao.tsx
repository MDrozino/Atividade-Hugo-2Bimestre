
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TabTwoScreen() {
	return (


		<View style={{ flex: 1 }}>
			<Text>Tela Configuração</Text>


			<TouchableOpacity onPress={() => router.push('/explore')}>
				<Text>Voltar para o perfil</Text>
			</TouchableOpacity>

			
		</View>
	);
}