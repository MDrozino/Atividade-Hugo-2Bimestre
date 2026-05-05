import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './post';


export default function HomeScreen() {
	const { user } = useLocalSearchParams();

	return (
		<ScrollView>
			<Text>Tela home</Text>

			<TouchableOpacity onPress={() => router.push('/home/detalhes')}>
				<Text>ir para detalhes, {user} asdasd</Text>
			</TouchableOpacity>

			
			<View style={styles.container}>

					<SafeAreaView style={styles.safeArea}>
						<Text style={{textAlign: 'center', fontWeight: "600"}}>Instagram</Text>

					<Post></Post>
					<Post></Post>
				
					</SafeAreaView>

    		</View>


			
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	
	container:{
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 100
    
    
  },

  safeArea:{
    flex: 1,
    paddingTop: 0,
    //borderWidth: 1,
    borderRadius: 50,
    width: '100%'
    

  },

  

});
