/*20191012_S9_A35 ：期末考「專業知識與技術」題目_Q3 Integer to Roman\css*/


/** 
 * Homepage Style
 * Standard Layout (all parts) for Little Homepage
 * @author SaraLiang
 * @copyright 2019 by the author
 *
 */
//////// 在這裡寫你的答案 /////////

/*20191012_S9_A35 ：期末考「專業知識與技術」題目_Q3 Integer to Roman\css*/


/** 
 * Homepage Style
 * Standard Layout (all parts) for Little Homepage
 * @author SaraLiang
 * @copyright 2019 by the author
 *
 */
//////// 在這裡寫你的答案 /////////

const romanChart = {
    "1000": "M",
    "900": "CM",
    "500": "D",
    "400": "CD",
    "100": "C",
    "90": "XC",
    "50": "L",
    "40": "XL",
    "10": "X",
    "9": "IX",
    "5": "V",
    "4": "IV",
    "1": "I",
}



function toRoman(num) {
    let romanTxt='';
    let length = Object.keys(romanChart).length;

    for (let i = length-1; i >= 0; i--) {

        let mNum = parseInt(Object.keys(romanChart)[i]);
        let mStr = Object.values(romanChart)[i];
        
        // console.log("mNum=" + mNum);
        // console.log("mStr=" + mStr);
        
        while(num >= mNum){
            num -= mNum;
            romanTxt += mStr;
        }
    }
    console.log(romanTxt);
    return romanTxt;
}



//////// 以下是測試程式，請勿更動 /////////
const expect = (name, value, result) => {
    if (value === result) {
        return true;
    }

    throw new Error(`${name} failed successfully`);
};



expect('toRoman(1)', toRoman(1), 'I');
expect('toRoman(2)', toRoman(2), 'II');
expect('toRoman(3)', toRoman(3), 'III');
expect('toRoman(4)', toRoman(4), 'IV');
expect('toRoman(5)', toRoman(5), 'V');
expect('toRoman(6)', toRoman(6), 'VI');
expect('toRoman(9)', toRoman(9), 'IX');
expect('toRoman(27)', toRoman(27), 'XXVII');
expect('toRoman(48)', toRoman(48), 'XLVIII');
expect('toRoman(59)', toRoman(59), 'LIX');
expect('toRoman(93)', toRoman(93), 'XCIII');
expect('toRoman(141)', toRoman(141), 'CXLI');
expect('toRoman(163)', toRoman(163), 'CLXIII');
expect('toRoman(402)', toRoman(402), 'CDII');
expect('toRoman(575)', toRoman(575), 'DLXXV');
expect('toRoman(911)', toRoman(911), 'CMXI');
expect('toRoman(1024)', toRoman(1024), 'MXXIV');
expect('toRoman(3000)', toRoman(3000), 'MMM');

console.log('all pass!');