import { Toast, ToastDescription, useToast } from '@gluestack-ui/themed';
import React, { useEffect, useState, createContext } from 'react';
// import messaging from '@react-native-firebase/messaging';
import { pearlWhite, darkSlateBlue } from '../theme';
import usePermissions from '../hooks/usePermissions';
import { IActionToast } from '../types/toast';

interface NotificationContextProps {
  showToast: (message: string, action?: IActionToast) => void;
  showHeaderAlert: boolean;
  setShowHeaderAlert: (showHeaderAlert: boolean) => void;
}

export const NotificationContext = createContext(
  {} as NotificationContextProps,
);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showHeaderAlert, setShowHeaderAlert] = useState(false);
  const { requestMessagingPermission } = usePermissions();
  const toast = useToast();

  useEffect(() => {
    requestMessagingPermission();
    notificationListener();
  }, []);

  useEffect(() => {
    if (showHeaderAlert) {
      setTimeout(() => {
        setShowHeaderAlert(false);
      }, 3000);
    }
  }, [showHeaderAlert]);

  const notificationListener = () => {
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     remoteMessage.notification,
    //   );
    // });
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:',
    //         remoteMessage.notification,
    //       );
    //     }
    //   });
    // messaging().onMessage(async remoteMessage => {
    //   console.log('notification on froground state...', remoteMessage);
    // });
  };

  const showToast = (message: string, action?: IActionToast) => {
    toast.closeAll();
    toast.show({
      placement: 'top',
      containerStyle: { width: '$full' },
      render: ({ id }) => {
        const toastId = 'toast-' + id;
        const desing = action || 'success';
        return (
          <Toast
            nativeID={toastId}
            action={desing}
            variant="accent"
            backgroundColor={pearlWhite}>
            <ToastDescription color={darkSlateBlue}>{message}</ToastDescription>
          </Toast>
        );
      },
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        showToast,
        showHeaderAlert,
        setShowHeaderAlert,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};
