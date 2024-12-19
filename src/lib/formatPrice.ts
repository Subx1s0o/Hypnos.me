export function formatPrice(price: number | undefined) {
  if (price === undefined) {
    return 'Error pricing product'
  }

  let priceString = price.toString()

  if (priceString.length > 2) {
    let integerPart = priceString.slice(0, -2)
    let fractionalPart = priceString.slice(-2)
    return `${integerPart}.${fractionalPart}`
  } else {
    return `0.${priceString.padStart(2, '0')}`
  }
}
