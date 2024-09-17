import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
        textTitle:{
      color:'#fff',
      marginBottom:10,
      marginTop: 20,
      fontSize:40,
    },
    list: {
      marginTop: 32,
      width: '80%',
      borderRadius: 7,
    },
    itemList: {
      padding: 24,
      borderRadius: 7,
      backgroundColor: '#FFFF',
      marginBottom: 16,
    },
    itemText: {
      color: '#000',
    },
    placeholderinput: {
      color: '#fff',
    },
    inputContainer: {
      marginTop: 20,
      width: '80%', 
    },
    input: {
      color: '#fff',
      width: 300,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#fff',
      marginBottom: 30,
    },
    buttonContainer: {
      backgroundColor:'#FFF',
      width:'50%',
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5
    },
    viewimage:{
      marginTop: 30,
    },
  });