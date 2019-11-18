export const constants = {
  prefixName: 'react-native-pay-password',
  titleHeight: 48,
  inputItemHeight: 44,
  inputItemWidth: 48,
  borderWidth: 0.5,
  borderColor: '#C7C7C7',
};

export const warn = (msg) => {
  if (__DEV__) {
    console.warn(`[${constants.prefixName}]:${msg}`);
  }
};
