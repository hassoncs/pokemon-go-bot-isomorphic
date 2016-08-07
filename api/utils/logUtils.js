
module.exports = {
  logItems(items, color) {
    items && items.forEach(({count, name}) => {
      if (!count) return;
      const string = `  ${count}x – ${this.getItemNameString(name)}`.toString();
      console.log(color ? string[color] : string);
    });
  },

  getPokemonNameString({pokedex, cp}) {
    return `${pokedex.Name.magenta}(${cp.toString().gray})`;
  },

  getItemNameString(name) {
    return name.replace('Item ', '');
  }
};
