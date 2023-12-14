import { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { Participant } from '../../components/Participant/index';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
 
  function handleParticipantAdd() {
    if (participantName === '') {
      return Alert.alert(
        "Nome Participante vazio", 
        `O nome do participante não pode ser vazio.`
      )
    }

    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante já existe", 
        `Já existe um participante com o nome ${participantName} na lista.`
      )
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Participant 
              key={item} 
              name={item} 
              onRemove={() => handleParticipantRemove(item)} 
            />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
  </View>
  )  
}