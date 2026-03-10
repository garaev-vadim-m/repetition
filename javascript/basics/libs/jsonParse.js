class HandleJson {
  /**
   * @param {string} json
   */
  jsonParse(json) {
    if (!json || !json.length || !Object.keys(JSON.parse(json)).length) return false;
    return true;
  }
}

export const handleJson = new HandleJson();
