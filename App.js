import { Text, View, TouchableOpacity, FlatList} from'react-native';
import {React} from 'react';
import { useState } from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import  { styles }  from './src/screens/tela1/styles.js';
import { api } from './src/screens/apis/gitHubapi.js';


export default function App() {
  
  const [nomegit, setNameGit] = useState([]);
  
  async function consultarApiGit(){
    const  response = await api.get(nomegit+'/repos');
    console.log(response.data[0].name);
    setNameGit(response.data.name);
  }

  return(
    <View style={styles.container}>
        <Text style={styles.textTitle}>Entre com seu Usuário</Text>
       
          <SafeAreaView>
            <TextInput
              style={styles.input}
              placeholder={'Buscar Repositórios'}
              placeholderTextColor="#fff"
              selectionColor={'#fff'}
              
          />
          </SafeAreaView>

          <TouchableOpacity
              style={styles.button}
              onPress={consultarApiGit}
          >
            <Text style={styles.textButton}> Consultar </Text>
          </TouchableOpacity>  
          
          
          <FlatList 
          style={styles.list}
          data={nomegit}
          keyExtractor={dados => String(dados.name)}
          showsVerticalScrollIndicator={false}
         renderItem={({item:dados})=>(
         <View style={styles.itemList}>
          <Text>Nome do Repositório: {dados.name}</Text>
        </View>
          )}
         />

    </View>
  );
};

