const moment =require('moment');

//encrypt
exports.encrypt = (plainText) => {
    let Alphabet = "?.c&3mry#pi0d1%b_5gx!(so86}ql^aj7)zw ten`]{u-[fk=@4/h,v2+9";
    //abcdefghijklmnopqrstuvwxyz/0123456789? -!@#%^&,()_=+.[]{}`<>
    let shiftkey = 5;
        plainText = plainText.toLowerCase();
        let cipherText = "";
        // console.log(plainText.length)
        for ( let i=0; i < plainText.length; i++)
        {
            let check2 = plainText.substr(i,1);
            let check3 = Alphabet.indexOf(check2,1);
            let keyVal = (shiftkey + check3 ) % 58;
            let replaceVal = Alphabet.substr(keyVal,1);
            cipherText = cipherText + replaceVal;
        }
        return cipherText;
}

//decrypt
exports.decrypt = (cipherText)=>{
    let Alphabet = "?.c&3mry#pi0d1%b_5gx!(so86}ql^aj7)zw ten`]{u-[fk=@4/h,v2+9";
    let shiftkey = 5;
    cipherText = cipherText.toLowerCase();
    let plainText = "";
    for ( let i=0; i < cipherText.length; i++)
    {
        let check2 = cipherText.substr(i,1);
        let check3 = Alphabet.indexOf(check2,1);
        let keyVal = (check3 - shiftkey ) % 58;
        if (keyVal<0)
        {
            keyVal = Alphabet.length + keyVal;
        }
        let replaceVal = Alphabet.substr(keyVal,1);
        plainText = plainText + replaceVal;
    }
    return plainText;
}

