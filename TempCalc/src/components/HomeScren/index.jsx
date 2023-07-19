import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Share } from 'react-native';
import styles from './style';

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [pesoCarne, setPesoCarne] = useState('');
  const [quantidadeTempero, setQuantidadeTempero] = useState('');
  const [quantidadeColorau, setQuantidadeColorau] = useState('');
  const [quantidadeAlho, setQuantidadeAlho] = useState('');
  const [quantidadeOleo, setQuantidadeOleo] = useState('');
  const [quantidadeLimao, setQuantidadeLimao] = useState('');
  const [quantidadeLouro, setQuantidadeLouro] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    calcularQuantidades(pesoCarne, option);
  };

  const handlePesoChange = (text) => {
    setPesoCarne(text);
    calcularQuantidades(text, selectedOption);
  };

  const calcularQuantidades = (peso, option) => {
    if (option === 'Frango') {
      const quantidadeTempero = (35 * parseFloat(peso)).toFixed(0);
      const quantidadeColorau = (8 * parseFloat(peso)).toFixed(0);
      const quantidadeAlho = (15 * parseFloat(peso)).toFixed(0);

      setQuantidadeTempero(quantidadeTempero);
      setQuantidadeColorau(quantidadeColorau);
      setQuantidadeAlho(quantidadeAlho);
      setQuantidadeOleo('');
      setQuantidadeLimao('');
      setQuantidadeLouro('');
    } else if (option === 'Bovina') {
      const quantidadeTempero = (60 * parseFloat(peso)).toFixed(0);
      const quantidadeAlho = (25 * parseFloat(peso)).toFixed(0);
      const quantidadeOleo = (4 * parseFloat(peso)).toFixed(0);

      setQuantidadeTempero(quantidadeTempero);
      setQuantidadeColorau('');
      setQuantidadeAlho(quantidadeAlho);
      setQuantidadeOleo(quantidadeOleo);
      setQuantidadeLimao('');
      setQuantidadeLouro('');
    } else if (option === 'Suína') {
      const quantidadeTempero = (35 * parseFloat(peso)).toFixed(0);
      const quantidadeLimao = (2 * parseFloat(peso)).toFixed(0);
      const quantidadeAlho = (20 * parseFloat(peso)).toFixed(0);
      const quantidadeLouro = (1 * parseFloat(peso)).toFixed(0);
      const quantidadeColorau = (8 * parseFloat(peso)).toFixed(0);

      setQuantidadeTempero(quantidadeTempero);
      setQuantidadeColorau(quantidadeColorau);
      setQuantidadeAlho(quantidadeAlho);
      setQuantidadeOleo('');
      setQuantidadeLimao(quantidadeLimao);
      setQuantidadeLouro(quantidadeLouro);
    } else if (option === 'Coração') {
      const quantidadeTempero = (35 * parseFloat(peso)).toFixed(0);
      const quantidadeAlho = (15 * parseFloat(peso)).toFixed(0);

      setQuantidadeTempero(quantidadeTempero);
      setQuantidadeColorau('');
      setQuantidadeAlho(quantidadeAlho);
      setQuantidadeOleo('');
      setQuantidadeLimao('');
      setQuantidadeLouro('');
    } else {
      setQuantidadeTempero('');
      setQuantidadeColorau('');
      setQuantidadeAlho('');
      setQuantidadeOleo('');
      setQuantidadeLimao('');
      setQuantidadeLouro('');
    }
  };

  const handleShare = () => {
    let message = `Tipo de carne: ${selectedOption}\n\n`;

    if (selectedOption !== '') {
      message += `Tempero: ${quantidadeTempero}g\n`;

      if (selectedOption === 'Frango') {
        message += `Colorau: ${quantidadeColorau}g\n`;
        message += `Alho: ${quantidadeAlho}g\n`;
      } else if (selectedOption === 'Bovina') {
        message += `Alho: ${quantidadeAlho}g\n`;
        message += `Óleo: ${quantidadeOleo}g\n`;
      } else if (selectedOption === 'Suína') {
        message += `Limões: ${quantidadeLimao}\n`;
        message += `Alho: ${quantidadeAlho}g\n`;
        message += `Louro: ${quantidadeLouro}g\n`;
        message += `Colorau: ${quantidadeColorau}g\n`;
      } else if (selectedOption === 'Coração') {
        message += `Alho: ${quantidadeAlho}g\n`;
      }
    }

    Share.share({
      message: message,
    });
  };

  return (
    <View style={styles.box}>
      <View style={styles.containnerSelect}>
        <Text style={styles.text}>Escolha o tipo de carne:</Text>
        <View style={styles.carne}>
          <TouchableOpacity
            style={[
              styles.tipoCarne,
              selectedOption === 'Bovina' && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect('Bovina')}
          >
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Bovina</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tipoCarne,
              selectedOption === 'Suína' && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect('Suína')}
          >
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Suína</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.carne}>
          <TouchableOpacity
            style={[
              styles.tipoCarne,
              selectedOption === 'Frango' && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect('Frango')}
          >
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Frango</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tipoCarne,
              selectedOption === 'Coração' && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect('Coração')}
          >
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Coração</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Peso da carne (em kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handlePesoChange}
          value={pesoCarne}
        />

        <Text style={styles.text}>Selecionado: {selectedOption}</Text>

        {selectedOption !== '' && (
          <View style={styles.temperoContainer}>
            <Text style={styles.temperoText}>Tempero: {quantidadeTempero}g</Text>
            {selectedOption === 'Frango' && (
              <>
                <Text style={styles.temperoText}>
                  Colorau: {quantidadeColorau}g
                </Text>
                <Text style={styles.temperoText}>
                  Alho: {quantidadeAlho}g
                </Text>
              </>
            )}
            {selectedOption === 'Bovina' && (
              <>
                <Text style={styles.temperoText}>Alho: {quantidadeAlho}g</Text>
                <Text style={styles.temperoText}>Óleo: {quantidadeOleo}g</Text>
              </>
            )}
            {selectedOption === 'Suína' && (
              <>
                <Text style={styles.temperoText}>
                  Limões: {quantidadeLimao}
                </Text>
                <Text style={styles.temperoText}>Alho: {quantidadeAlho}g</Text>
                <Text style={styles.temperoText}>
                  Louro: {quantidadeLouro}g
                </Text>
                <Text style={styles.temperoText}>
                  Colorau: {quantidadeColorau}g
                </Text>
              </>
            )}
            {selectedOption === 'Coração' && (
              <Text style={styles.temperoText}>
                Alho: {quantidadeAlho}g
              </Text>
            )}
          </View>
        )}

        {selectedOption !== '' && (
          <TouchableOpacity
            style={styles.shareButton}
            onPress={handleShare}
          >
            <Text style={styles.shareButtonText}>Compartilhar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

