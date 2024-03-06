const makeFirstLetterCapital = str => {
    //trim to make sure there are no exstra unneeded spaces
    const term = str.toLowerCase().trim();
    return term.charAt(0).toUpperCase() + term.slice(1);
}

export default makeFirstLetterCapital




















// let name = "ari";
// let arr = [];

// arr.push(name);
// // frist half: take the first index of the array and the first letter and change to upper case
// //second half: take first index and cut out the firstletter
// let fullName = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

// console.log(fullName);  // Output: Ari