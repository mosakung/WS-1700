export const checkLanguage = (input) => {
    var letters = /^[A-Za-z]+$/;
      if(input.match(letters))
      {
      return "EN";
      }
      else
      {
      return "TH";
      }
}
export default {}