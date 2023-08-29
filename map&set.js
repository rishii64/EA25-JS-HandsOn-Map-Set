// Q1.  Problem:  You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:    abcadeecfb            
// Output:   abcdef

//Ans:
        // let st = "abcadeecfb"
        // let str = new Set(st)
        // let ss=''
        // for(let values of str)
        // {
        // ss+=values
        // }
        // console.log(ss)


// Q2.  Problem:   You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

        // Input:    abcadeecfb
        // Output:
        // a=2
        // b=2
        // c=2
        // d=1
        // e=2
        // f=1

//Ans:  
        function frequency(str) {
                const map = new Map();
                for (const char of str) {
                        if (map.has(char))
                                map.set(char, map.get(char) + 1);
                        else
                                map.set(char, 1);
                }
                for (const [key, value] of map) {
                        console.log(key, value);
                }
        }
        frequency("abcadeecfb");

