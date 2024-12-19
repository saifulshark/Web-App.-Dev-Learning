function isAnagram(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
  
    if (str1.length != str2.length) return false;
  
    let array1 = str1.split('').sort();
    let array2 = str2.split('').sort();
    // console.log("Array1:",array1);
    // console.log(array1);
    console.log(array1.join(""));
    
    return(array1.join("") == array2.join(""));
  }
  isAnagram("abc!", "!bac");
  console.log(isAnagram("abc!","!baC"));
  
  