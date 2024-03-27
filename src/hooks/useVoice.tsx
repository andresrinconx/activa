import { useState, useEffect, useRef } from 'react';
import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
  SpeechVolumeChangeEvent,
} from '@react-native-voice/voice';
import usePermissions from './usePermissions';

const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [pitch, setPitch] = useState(0);
  const [message, setMessage] = useState('');

  const { requestAudioPermission } = usePermissions();
  const lastExecutionTimeRef = useRef(0);
  const ms = 333;

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    Voice.onSpeechEnd = onSpeechEnd;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    cleanData();
    setIsListening(true);
  };

  const onSpeechError = ({ error }: SpeechErrorEvent) => {
    if (error?.code !== '5') {
      cleanData();
      setIsListening(false);
    }
  };

  const onSpeechResults = ({ value }: SpeechResultsEvent) => {
    setMessage(value?.[0] as string);
    setIsListening(false);
  };

  const onSpeechVolumeChanged = ({ value }: SpeechVolumeChangeEvent) => {
    const currentTime = Date.now();
    if (currentTime - lastExecutionTimeRef.current >= ms) {
      setPitch(value as number);
      lastExecutionTimeRef.current = currentTime;
    }
  };

  const onSpeechEnd = async () => {
    try {
      await Voice.stop();
      Voice.removeAllListeners;
    } catch (error) {
      setIsListening(false);
    }
  };

  const cleanData = () => {
    setPitch(0);
    setMessage('');
  };

  const startListening = async () => {
    const hasPermission = await requestAudioPermission();
    if (hasPermission) {
      try {
        await Voice.start('es-ES');
      } catch (error) {
        setIsListening(false);
      }
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      cleanData();
    } catch (error) {
      setIsListening(false);
    }
  };

  return {
    isListening,
    pitch,
    message,
    startListening,
    stopListening,
    cleanData,
  };
};

export default useVoice;
