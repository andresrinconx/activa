import React, { useState } from 'react';
import styles from './VolumeSelector.styles';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import Slider from '../../atoms/Slider';
import Icon from '../../atoms/Icon';
import { black, tranquilIndigo } from '../../../theme';

const VolumeSelector = () => {
  const [value, setValue] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volumen</Text>

      <View style={styles.referencesContainer}>
        <Icon
          width="23"
          height="18"
          viewBox="0 0 23 18"
          d="M14.8694 13.0689L13.5372 11.8504L16.6531 9.02542L13.5372 6.20042L14.8694 4.98194L17.958 7.83194L21.0465 4.98194L22.3787 6.20042L19.2628 9.02542L22.3787 11.8504L21.0465 13.0689L17.958 10.2189L14.8694 13.0689ZM0.958984 12.1499V5.84497H5.4302L11.132 0.635742V17.3651L5.4302 12.1499H0.958984ZM9.2633 4.93194L6.25315 7.55422H2.82117V10.4466H6.25315L9.2633 13.0939V4.93194Z"
          fill={black}
        />
        <Icon
          width="21"
          height="18"
          viewBox="0 0 21 18"
          d="M12.9056 17.8263V15.6747C14.5412 15.2334 15.8611 14.397 16.8655 13.1657C17.8699 11.9344 18.3721 10.5374 18.3721 8.97467C18.3721 7.41199 17.8699 6.01498 16.8655 4.78365C15.8611 3.5523 14.5412 2.71597 12.9056 2.27467V0.123047C15.1912 0.593697 17.0544 1.65149 18.4953 3.29642C19.9362 4.94134 20.6567 6.83409 20.6567 8.97467C20.6567 11.1153 19.9362 13.008 18.4953 14.6529C17.0544 16.2979 15.1912 17.3556 12.9056 17.8263ZM0.441406 12.2029V5.7964H4.94531L10.719 0.515422V17.4839L4.94531 12.2029H0.441406ZM12.9056 13.0714V4.87792C13.7794 5.25656 14.4698 5.81652 14.9766 6.55782C15.4834 7.29912 15.7369 8.11307 15.7369 8.99967C15.7369 9.86961 15.4834 10.6721 14.9766 11.407C14.4698 12.142 13.7794 12.6968 12.9056 13.0714ZM8.23173 6.02305L5.99228 8.07142H2.92868V9.92792H5.99228L8.23173 11.9763V6.02305Z"
          fill={black}
        />
      </View>

      <Slider value={value} setValue={setValue} color={tranquilIndigo} />
    </View>
  );
};

export default VolumeSelector;
