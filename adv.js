// let reg_2w = /(\w+)\s+\1\s+\1/g;
// let s = 'word word other other talk talk a a a';
// let matches = s.match(reg_2w);
// if (matches) console.log(matches); //word word,talk talk

// let reg_email2 = /([\w\.\-]+)@([\w\.\-]+)/;
// let email = 'example@ex.com';
// if (reg_email2.test(email)) {
//    let user = RegExp.$1;
//    let host = RegExp.$2;
//    console.log('в адресе \''+email+'\' имя: '+user+', хост: '+host);
// }

// let reg = /\w+(?!;)/;
// let s = "My little cat;";
// if (reg.test(s)) {
//   let matches = s.match(reg);
//   if (matches) console.log(matches); //cat
// }
let s = 'word1 word2, word3: word4. word5'; 
let parts = s.split(/\s*[\.,:\s]\s*/); 
if (parts) console.log(parts.join(','));