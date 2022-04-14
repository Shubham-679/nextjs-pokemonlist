import { typeColor } from "./constants";

export const firstWordCapital = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const getTypeColor = (type) => {
  return typeColor[type];
};

export const getWeight = (w) => {
  const onePound = 2.20462;
  const value = `${w/10} kg (${Number.parseFloat(w/10 * onePound).toFixed(1)} lbs)`
  return value;
}

export const getHeight = (m) => {
  const oneMeter = 3.2808;
  const feet =  (m/10) * oneMeter;
  const decimals = feet - Math.floor(feet);
  const inches = parseFloat(decimals.toFixed(1)) * 12;
  const value = `${m/10} m (${parseInt(feet)}' ${parseFloat(inches.toFixed(2))}")` 
  return value;
}
