export const formatPrice = (price: number): string => {
  const priceFormat = price.toFixed(2).toString().replace('.', ',')

  return priceFormat
}
