import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './PAMSelector.styles';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';
import { black, duskBlue, livelyEmerald } from '../../../theme';
import Sheet from '../../atoms/Sheet';
import Icon from '../../atoms/Icon';
import Title from '../../atoms/Title';
import { useUserStore } from '../../../store';

const PAMSelector = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { user, currentPAM, setCurrentPAM } = useUserStore();

  const handleSelectPAM = (item: string) => {
    setCurrentPAM(item);
    setIsSheetOpen(false);
  };

  return (
    <>
      <Button
        onPress={() => setIsSheetOpen(true)}
        w="50%"
        h={65}
        backgroundColor={duskBlue}
        style={styles.btn}>
        <Text isBold={true} style={styles.txt} numberOfLines={1}>
          {currentPAM}
        </Text>
        <View style={styles.iconContainer}>
          <Icon
            scale="24"
            viewBox="0 0 24 24"
            d="M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z"
          />
        </View>
      </Button>

      <Sheet
        isOpen={isSheetOpen}
        setIsOpen={setIsSheetOpen}
        height="35%"
        backdrop={true}>
        <View style={styles.container}>
          <Title size="base" color={black} textAlign="center">
            PAMs
          </Title>

          {user?.PAMs?.map((item: any) => {
            const isSelected = item === currentPAM;

            return (
              <Button
                key={item}
                onPress={() => handleSelectPAM(item)}
                style={styles.btnOption}
                h={55}
                w="100%">
                <Text color={black} size={19}>
                  {item}
                </Text>
                {isSelected && (
                  <Icon
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    d="M6.9007 14.6488L0.103516 8.42222L2.17982 6.53255L6.9007 10.8506L18.5561 0.199219L20.6221 2.08889L6.9007 14.6488Z"
                    fill={livelyEmerald}
                  />
                )}
              </Button>
            );
          })}
        </View>
      </Sheet>
    </>
  );
};

export default PAMSelector;
