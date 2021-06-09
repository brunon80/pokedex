function addZeros(number: string | number): string {
  const convertedNumber = typeof number === 'number' ? number.toString() : number
  const amountOfZeros = {
      [3]: `${number}`,
      [2]: `0${number}`,
      [1]: `00${number}`
  }
  
  return amountOfZeros[convertedNumber?.length] || `${0}`
}

export default addZeros