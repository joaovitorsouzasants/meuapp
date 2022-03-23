import React,  {useState} from "react";
import { SafeAreaView,
   Text, 
  TextInput,
TouchableOpacity,
 FlatList
} from 'react-native';
import { Button } from "../../components/Button";
import { TaskCard } from "../../components/TaskCard";
import { styles } from "./styles";
interface TaskDate {
  id: string;
  name: string;
}
export function Home() {
  const[novaTarefa, setNovaTarefa]= useState("");
  const [tasks, setTasks] = useState<TaskDate[]>([]);

  function handleAddNewTask(){
    const data: TaskDate ={
      id: String((new Date).getTime()),
      name: novaTarefa
    }
    setTasks(oldState => [...oldState, data])
  }

  function handleRemoveTasks(id: string){
    setTasks(oldState => oldState.filter(
      task => task.id != id
    ));
  }
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Olá, seja Bem-Vindo!!
    </Text>
    <TextInput
          style={styles.input}
          placeholder = "Digite sua atividade"
          placeholderTextColor="#555"
          onChangeText={setNovaTarefa}
    /> 

    <Button onPress={handleAddNewTask}
    activeOpacity={0.7}
    title="Adcionar Tarefa"/>

  <Text style={[styles.text, { marginTop: 20}]}>
      Minhas tarefas
  </Text>
  
  <FlatList
  data={tasks}
  keyExtractor={item => item.id}
  renderItem={({item}) => (
    <TaskCard
    title={item.name}
    onPress= {()=>handleRemoveTasks(item.id)}
    />
  )
}
  />
    </SafeAreaView>
   
  );
}
