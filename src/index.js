module.exports = function toReadable (num) {
    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
          tens = ['', 'onety', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
          tens2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    
    const numSplit = ('' + num).split('')

    let number = numbers[numSplit[numSplit.length - 1]]
    
    let decimals = tens[numSplit[numSplit.length - 2] || 0]
    
    if (numSplit[numSplit.length - 2] === '1') {
        decimals = tens2[numSplit[numSplit.length - 1] || 0]
        number = ''
    }
   
    let hundreds = numbers[numSplit[numSplit.length - 3] || 0] ? numbers[numSplit[numSplit.length - 3] || 0] + ' hundred' : ''

    return `${hundreds} ${decimals} ${number}`.trim().replace('  ', ' ') || 'zero'
}