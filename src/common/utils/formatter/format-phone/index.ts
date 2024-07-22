const formatPhone = (phone?: string) => {
  if (!phone) return '';

  const phoneNumber = phone.replace(/\D/g, '');

  const { length } = phoneNumber;

  let formattedPhoneNumber = phoneNumber;

  // код региона
  if (length > 0) {
    formattedPhoneNumber = `+7 (${phone.slice(1, 4)}`;
  }

  // 3 цифры
  if (length > 4) {
    formattedPhoneNumber += `) ${phone.slice(4, 7)}`;
  }

  // 2 цифры
  if (length > 7) {
    formattedPhoneNumber += `-${phone.slice(7, 9)}`;
  }

  // 2 цифры
  if (length > 9) {
    formattedPhoneNumber += `-${phone.slice(9)}`;
  }

  return formattedPhoneNumber;
};

export default formatPhone;
