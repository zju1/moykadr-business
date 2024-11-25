export const phoneUtils = {
  clearPhoneNumber: (phone: string) => phone.replace(/[( )-]/gi, ""),
  formatPhoneNumber: (phone: string) => {
    if (phone.length === 9) {
      const formattedPhone = `+998 (${phone.slice(0, 2)}) ${phone.slice(
        2,
        5
      )}-${phone.slice(5, 7)}-${phone.slice(7, 9)}`;

      return formattedPhone;
    } else {
      return phone;
    }
  },
};
