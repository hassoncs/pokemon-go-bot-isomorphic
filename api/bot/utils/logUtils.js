
module.exports = {
  logItems(items, color) {
    items && items.forEach(({count, name}) => {
      if (!count) return;
      const string = `  ${count}x – ${this.getItemNameString(name)}`.toString();
      console.log(color ? string[color] : string);
    });
  },

  getPokemonNameString(pokemon) {
    const {pokedex, cp} = pokemon;
    const ivString = pokemon.getIV ? `[${('IV' + pokemon.getIV().toString()).gray}]` : '';
    return `${pokedex.Name.magenta}(${cp.toString().gray})${ivString}`;
  },

  getItemNameString(name) {
    return name.replace('Item ', '');
  }
};
