import React, { useState } from 'react';
import { View, TextInput, Switch, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [acceptTheTerms, setAcceptTheTerms] = useState(false);

  const buttonIsDisabled = !surname || !name || !acceptTheTerms

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Exemplo de aplicação de accessibilidade em formulário
      </Text>

      <Text
        style={styles.label}
        accessible={false}
        importantForAccessibility='no'
      >
        Nome:
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome"
        accessible={true}
        accessibilityLabel={name && name}
        accessibilityHint="Digite seu nome aqui."
      />

      <Text
        style={styles.label}
        accessible={false}
        importantForAccessibility='no'
      >
        Sobrenome:
      </Text>
      <TextInput
        style={styles.input}
        value={surname}
        onChangeText={setSurname}
        placeholder="Sobrenome"
        accessible={true}
        accessibilityLabel={surname && surname}
        accessibilityHint="Digite seu sobrenome aqui."
      />

      <Pressable
        style={styles.switchContainer}
        onPress={() => setAcceptTheTerms(prevState => !prevState)}
        accessibilityRole='switch'
        accessibilityLabel="Switch de aceitação de termos"
        accessibilityHint="Ative para aceitar os termos"
        accessibilityState={{ checked: !!acceptTheTerms }}
      >
        <Text
          importantForAccessibility='no'
          accessible={false}
        >
          Aceita os termos?
        </Text>
        <Switch
          value={acceptTheTerms}
        />
      </Pressable>

      <TouchableOpacity
        style={[styles.buttonContainer, buttonIsDisabled && styles.buttonContainerDisabled]}
        onPress={() => alert('Formulário enviado!')}
        disabled={buttonIsDisabled}
        accessible={true}
        accessibilityLabel="Botão de envio"
        accessibilityRole="button"
        accessibilityHint={
          buttonIsDisabled
            ? "Preencha os campos nome, sobrenome e aceite os termos acima."
            : "Clique para enviar o formulário"
        }
        accessibilityState={{ disabled: buttonIsDisabled }}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#eaeaea'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cacaca',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerDisabled: {
    backgroundColor: 'gray'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
