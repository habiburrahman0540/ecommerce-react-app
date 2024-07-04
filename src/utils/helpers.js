export const formatPrice = (number) => {
    const numberFormar = Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format(number/100);
    return numberFormar;
}

export const getUniqueValues = () => {}
