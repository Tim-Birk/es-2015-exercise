const choice = (items) => {
  const n = Math.floor(Math.random() * items.length + 1);
  return items[n];
};

const remove = (items, item) => {
  let idx;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      idx = i;
      break;
    }
  }
  if (idx) {
    items.splice(idx, 1);
    return items;
  }
};

export { choice, remove };
