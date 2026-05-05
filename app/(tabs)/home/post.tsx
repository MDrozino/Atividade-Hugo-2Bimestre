import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";




export default function Feed() {
    
    return (
                    <View style={styles.post}>
        
                          <View style={styles.postHeader}>
        
                            <View style={styles.userInfo}>
                                <View ><Image
                                  source={{ uri: "https://thispersondoesnotexist.com/" }} style={styles.avatar}/>
                                </View>
                                <Text style={styles.username}>willsmithdashoppe</Text>
                            </View>
        
                            <Text style={styles.options}>⋯</Text>
                          </View>
        
                          <View style={styles.imagemPost}><Image
                              source={{ uri: "https://thispersondoesnotexist.com/" }} style={styles.imagem}/>
                          </View>
        
                          <View style={styles.acoes}>
        
                          <View style={styles.iconesDaEsquerda}>
                              <Icon name="heart-outline" size={30} />
                              <Icon name="chatbubble-outline" size={27} />
                              <Icon name="paper-plane-outline" size={27} />
                          </View>
        
                          <Icon name="bookmark-outline" size={26} />
        
                          </View>

                        <View style={styles.descricaoPost}>
                            <Text style={styles.usernameDesc}>willsmithdashoppe</Text>
                            <Text style={styles.postDesc}>Hahahahhah novo post</Text>
                        </View>

                      </View>
    )
}

const styles = StyleSheet.create({

  descricaoPost:{
    flexDirection: 'row',
    
  },

  usernameDesc:{
  fontWeight: "600",
  marginLeft: 15
},

postDesc:{
  
  marginLeft: 10
},


  textWhite:{
    color: 'white'
  },

  post:{
  width: '100%',
  //borderBottomWidth: 1,
  borderColor: "#333",
  paddingBottom: 10,
  marginBottom: 40
},

postHeader:{
  flexDirection: "row",
  padding: 8,
  justifyContent: "space-between",
  alignItems: "center"
},

userInfo:{
  flexDirection: "row",
  alignItems: "center",
  gap: 8
},

avatar:{
  width: 32,
  height: 32,
  borderRadius: 16,
},

username:{
  fontWeight: "600"
},

options:{
  fontSize: 18
},

imagemPost:{
  width: "100%",
  height: 400,
  
},

imagem:{
  width: "100%",
  height: "100%"
},

acoes:{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10
},

iconesDaEsquerda:{
  flexDirection: "row",
  gap: 15
}
  
})

