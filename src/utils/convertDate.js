export default function convertDate(stringDate) {
  // console.log('before', stringDate);
  if (typeof stringDate === 'string' || stringDate instanceof String) {
    if (stringDate.length >= 10) {
      const year = stringDate.substring(0, 4);
      const month = stringDate.substring(5, 7);
      const day = stringDate.substring(8, 10);
      const res = `${day}.${month}.${year}`;
      // console.log('after', res);
      return res;
    }
  }
  return stringDate;
}

export function cutDate(stringDate) {
  if (typeof stringDate === 'string' || stringDate instanceof String) {
    if (stringDate.length >= 10) {
      const res = stringDate.substring(0, 10);
      // console.log(res);
      return res;
    }
  }
  return stringDate;
}
