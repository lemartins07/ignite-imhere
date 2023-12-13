import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de Remover! ${name}`);
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Leandro" onRemove={() => handleParticipantRemove("Leandro")} />
      <Participant name="Alan Douglas" onRemove={() => handleParticipantRemove("Alan Douglas")} />      
  </View>
  )  
}