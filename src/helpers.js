// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};


export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

export const sortByDate = (list, order) => list.sort((a, b) => {
  let date1 = new Date(a.release_date);
  let date2 = new Date(b.release_date);


  if (order === "desc") {
    if (a.release_date === "" || !a.release_date)
      return -1;
    if (b.release_date === "" || !b.release_date)
      return 1;

    return date1 < date2 ? 1 : -1;
  }


  else {
    if (a.release_date === "" || !a.release_date)
      return 1;
    if (b.release_date === "" || !b.release_date)
      return -1;

    return date1 < date2 ? -1 : 1;
  }

})
