function guaranteeList(item) {
  let out;
  if (item) {
    if (item.map) {
      out = item;
    } else {
      out = [ item ];
    }
  } else {
    out = [];
  }
  return out;
}

export default guaranteeList;
