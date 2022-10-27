const checkDateEqualToday = (date: Date) => {
  return new Date().getDate() === date.getDate()
}

export {checkDateEqualToday};
