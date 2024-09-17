import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, Image } from 'react-native';
import { api } from './src/services/api'; 
import { styles } from './src/styles/styles'; 
import github from './assets/github.png';

function App() {
  const [dados, setDados] = useState([]);
  const [inputValue, setInputValue] = useState(''); 

  async function searchDados() {
    const response = await api.get(`${inputValue}` + '/repos');
    console.log(response);
    setDados(response.data);
  }

  return (
    <View style={styles.container}>

      <Image style={styles.viewimage} source={github}/>

      <Text style={styles.textTitle}>Entre com seu Usuário</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Buscar Repositórios'}
          placeholderTextColor="#fff"
          selectionColor={'#fff'}
          value={inputValue} // Vinculando o estado com o TextInput
          onChangeText={setInputValue} // Atualizando o estado com o valor digitado
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button color="#000" title="Consultar" onPress={searchDados} />
        
      </View>

      <FlatList
        style={styles.list}
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemList}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Name: {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;

