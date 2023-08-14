import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setupPlayer();
    loadMusic();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    TrackPlayer.addEventListener('playback-queue-ended', () => {
      // Ouvinte para quando a fila de reprodução termina (opcional)
      console.log('Queue ended.');
    });
  };

  const loadMusic = async () => {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: '1',
      url: 'https://www.youtube.com/watch?v=2cZ_EFAmj08&list=RD2cZ_EFAmj08&start_radio=1',
      title: 'Nome da Música',
      artist: 'Nome do Artista',
      artwork: 'URL_DA_IMAGEM_DA_MUSICA',
    });
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={skipToPrevious}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={togglePlayback}>
        <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={skipToNext}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MusicPlayer;
