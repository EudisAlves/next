import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TrackPlayer, {
  useProgress,
  useTrackPlayerEvents,
  TrackPlayerEvents,
} from 'react-native-track-player';

const BoxPlay = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { position, duration } = useProgress();
  const rating = music ? music.RATING_HEART : 0;

  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: track.id,
      url: track.url,
      title: track.title,
      artist: track.artist,
      artwork: track.artwork,
    });
  };

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
    if (event.state === TrackPlayer.STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  const startMusic = async () => {
    await TrackPlayer.play();
  };

  const pauseMusic = async () => {
    await TrackPlayer.pause();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: track.artwork }} style={styles.artwork} />
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.artist}>{track.artist}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={isPlaying ? pauseMusic : startMusic}>
          <Text style={styles.playPauseButton}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <Text style={styles.duration}>{formatTime(position)}</Text>
        <View style={styles.progressContainer}>
          <View
            style={[styles.progressBar, { width: (position / duration) * 100 + '%' }]}
          />
        </View>
        <Text style={styles.duration}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  artwork: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artist: {
    fontSize: 16,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  playPauseButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
  },
  duration: {
    fontSize: 16,
  },
  progressContainer: {
    flex: 1,
    height: 2,
    backgroundColor: '#ccc',
    marginLeft: 10,
    marginRight: 10,
  },
  progressBar: {
    height: 2,
    backgroundColor: 'blue',
  },
});

export default BoxPlay;
