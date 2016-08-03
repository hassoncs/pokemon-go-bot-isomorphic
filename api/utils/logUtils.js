
module.exports = {
  logItems(items, color) {
    items && items.forEach(({count, name}) => {
      if (!count) return;
      const string = `  ${count}x – ${name.replace('Item ', '')}`.toString();
      console.log(color ? string[color] : string);
    });
  },

  getPokemonNameString({pokedex, cp}) {
    return `${pokedex.Name.magenta}(${cp.toString().gray})`;
  }
};
