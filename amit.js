function rot13(str) {
  
    const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newStr='';
    for (let i=0;i<str.length;i++){
      let index=alphabet.indexOf(str[i]);
      if(index==-1){
        newStr+=str[i];
      }else{
        let newindex=(index+13)%26;
        newStr+=alphabet[newindex];
      }
    }
    return newStr;
  }
  
  console.log(rot13("SERR PBQR PNZC"));