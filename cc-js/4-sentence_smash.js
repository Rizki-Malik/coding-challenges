// WPU Coding Challenge 2024
// https://www.codewars.com/kata/53dc23c68a0c93699800041d
// 4/366

// function smash(words){
//     let arr = '';
//     for(let i = 0; i < words.length; i++){
//         arr += words[i];
//         if(i != words.length - 1) arr += ' ';
//     }
//     return arr;
// }

// function smash (words) {
//     return words.join(' ');
// };

const smash = words => words.join(' ');

 console.log(smash(["hello", "world"]));