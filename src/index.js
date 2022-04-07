module.exports = function toReadable (number) {
      let singleDig = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      let tenDig = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
      let twenDig = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
      if (number < 0) {
         return ('It is a negative number');
       }
        else if (number > 100 && number <= 999 && 10 > number % 100 && number % 100 !== 0) {
         return singleDig[ Math.floor(number / 100)] + ' hundred ' + singleDig[Math.floor(number % 10)]; 
      }
        else if (number > 100 && number <= 999 && 20 > number % 100 && number % 100 !== 0) {
         return singleDig[ Math.floor(number / 100)] + ' hundred ' + tenDig[Math.floor(number % 10)]; 
      }
         else if (number > 100 && number <= 999 && number % 10 === 0 && number % 100 !== 0){
         return singleDig[ Math.floor(number / 100 )] + ' hundred ' + twenDig[ Math.floor(number / 10 % 10)]
      }
         else if (number >= 100 && number <= 999 && number % 100 !== 0){
         return singleDig[ Math.floor(number / 100 )] + ' hundred ' + twenDig[ Math.floor(number / 10 % 10)] + ' ' + singleDig[number % 10];
       }
       else if (number >= 100 && number <= 999 && number % 100 === 0){
         return singleDig[ Math.floor(number / 100 )] + ' hundred';
       }
      else if (number >=20 && number <= 99 && number % 10 !== 0) {
         return twenDig[Math.floor(number / 10)] + ' ' + singleDig[number % 10];
       }
      else if (number >=20 && number <= 99 && number % 10 === 0) {
         return twenDig[Math.floor(number / 10)];
       }
      else if (number >= 10 && number <= 19 ) {
         return tenDig[number % 10 ];
      }
      else if (number <= 9  && number > 0) {
         return singleDig[number];
      }
      else if (number === 0) {
         return 'zero';
      }
}
