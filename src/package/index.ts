export const cleanAccents = {
  /**
   * Remove accents from a given string.
   */
  clean: function (str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },

  /**
   * Check if a given string has accents.
   */
  has: function (str: string) {
    return /[\u0300-\u036f]/.test(str.normalize("NFD"));
  },
};
