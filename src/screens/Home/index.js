import React,  {useState} from "react";
import { SafeAreaView,
   Text, 
  TextInput,
TouchableOpacity,
ScrollView, FlatList
} from 'react-native';
import { styles } from "./styles";

export function Home() {
  const[novaTarefa, setNovaTarefa]= useState("");
  const [tasks, setTasks] = useState([])
  function handleAddNewTask(){
    setTasks(oldState => [...oldState, novaTarefa])
  }
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Ola
    </Text>
    <TextInput
          style={styles.input}
          placeholder = "Digite sua atividade"
          placeholderTextColor="#555"
          onChangeText={setNovaTarefa}
    /> 
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.5}
      onPress={handleAddNewTask}
      >
      <Text style={styles.buttonText}>
        Adcionar
      </Text>
    </TouchableOpacity>
  <Text style={{marginTop: 20}}>
      Minhas tarefas
  </Text>
  
  <FlatList
  data={tasks}
  keyExtractor={item => item}
  renderItem={({item}) => (
    <TouchableOpacity 
      style={styles.buttonTask}>
        <Text style={styles.textTask}>
          {item}
        </Text>
      </TouchableOpacity>
  )
}
  />
    </SafeAreaView>
   
  );
}
