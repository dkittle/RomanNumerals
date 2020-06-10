console.log('Roman Numeral Converter')
const romanLookup = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

class Convert {
  
  static toRoman(arabic) {
    var index = 0
    if (arabic < 1 || arabic > 3999)
      return ''
    var tmp = arabic
    var result = ''
    while (tmp > 0) {
      var u = tmp % 10
      var seg = ''
      if (u % 5 === 4) {
        seg += romanLookup[index]
        seg += romanLookup[index + 1 + Math.floor(u / 5)]
     }
      else {
        if (u >= 5) {
          seg += romanLookup[index + 1]
        }
        seg += romanLookup[index].repeat(u % 5)
      }
      result = seg + result
      tmp = Math.floor(tmp / 10)
      index += 2
    }
    console.log(arabic + ' is ' + result)
    return result
  }
  
}

assert(Convert.toRoman(0) === '')
assert(Convert.toRoman(1) === 'I')
assert(Convert.toRoman(2) === 'II')
assert(Convert.toRoman(3) === 'III')
assert(Convert.toRoman(4) === 'IV')
assert(Convert.toRoman(5) === 'V')
assert(Convert.toRoman(6) === 'VI')
assert(Convert.toRoman(7) === 'VII')
assert(Convert.toRoman(8) === 'VIII')
assert(Convert.toRoman(9) === 'IX')
assert(Convert.toRoman(10) === 'X')
assert(Convert.toRoman(11) === 'XI')
assert(Convert.toRoman(12) === 'XII')
assert(Convert.toRoman(13) === 'XIII')
assert(Convert.toRoman(14) === 'XIV')
assert(Convert.toRoman(15) === 'XV')
assert(Convert.toRoman(16) === 'XVI')
assert(Convert.toRoman(17) === 'XVII')
assert(Convert.toRoman(18) === 'XVIII')
assert(Convert.toRoman(19) === 'XIX')

assert(Convert.toRoman(39) === 'XXXIX')
assert(Convert.toRoman(246) === 'CCXLVI')
assert(Convert.toRoman(789) === 'DCCLXXXIX')
assert(Convert.toRoman(2421) === 'MMCDXXI')

assert(Convert.toRoman(160) === 'CLX')
assert(Convert.toRoman(207) === 'CCVII')
assert(Convert.toRoman(1009) === 'MIX')
assert(Convert.toRoman(1066) === 'MLXVI')

assert(Convert.toRoman(1776) === 'MDCCLXXVI')
assert(Convert.toRoman(1918) === 'MCMXVIII')
assert(Convert.toRoman(1954) === 'MCMLIV')
assert(Convert.toRoman(2014) === 'MMXIV')

console.log('All done')
