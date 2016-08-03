
module.exports = {
  logItems(items, color) {
    items && items.forEach(({count, name}) => {
      const string = `  ${count}x – ${name.replace('Item ', '')}`.toString();
      console.log(color ? string[color] : string);
    });
  }
};