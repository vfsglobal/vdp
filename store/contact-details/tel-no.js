export const state = () => ({
  no: "8291774434"
});

export const getters = {
  html({ no }) {
    return `<a href="tel:${no}">${no}</a>`;
  }
};
