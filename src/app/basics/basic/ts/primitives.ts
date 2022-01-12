export function primitives(terminal: {text_area: HTMLTextAreaElement, arr: string[], index: number}):void
{
    let tuple_topic = document.getElementById('topic1') as HTMLElement
    
    tuple_topic.addEventListener('click', (event) => {
        console.log("YES");
        event.preventDefault()
        let image1 = document.getElementById('image1') as HTMLImageElement;
        let image2 = document.getElementById('image2') as HTMLImageElement;
        let image3 = document.getElementById('image3') as HTMLImageElement;
        console.log("here")
        let text_area = document.getElementById('text') as HTMLTextAreaElement;
        text_area.innerHTML = `7 total: string, number, boolean, null, undefined, bigint, symbol`;
        text_area.innerHTML += `&#13;&#10;`;
        text_area.innerHTML += `All of these are immutable, although only 6 are always identical:`;
        text_area.innerHTML += `&#13;&#10;`;
        text_area.innerHTML += `Symbol() is used to generate unique Symbols with the same input!`;
        text_area.innerHTML += `&#13;&#10;`;
        text_area.innerHTML += `In TS, the TSConfig plays a huge role in what is fine for primitives`;

        image1.src = 'assets/images/strings.png';
        image2.src = 'assets/images/numbers.png';
        image3.src = 'assets/images/booleans.png';
    
        var slides: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLDivElement>;
        slides[0].style.display = "block";
        slides[1].style.display = "none";
        slides[2].style.display = "none";

        terminal.arr.length = 0;

    terminal.arr.push(`
Topic: Primitives in TS

There are 7 primitives in JS/TS:

3 "Everyday": Number, String, Boolean
2 "Annoying": Null, Undefined
2 "Rare": BigInt, Symbol
    `);


    terminal.arr.push(`
Strings!

let str: string;
str = 'I am a string!';
str = 'String here';

let other_str: string = "Text in a variable!";
str = \`I'm also string! \${other_str}\`;

str.length                  // Strings have parameters
str.toLocaleUpperCase();    // String have methods
parseInt(str);              // Certain functions take in strings
    `);


    terminal.arr.push(`
Numbers

let num: number;

num = 10;                   // Integer
num = 100_000_000;          // Visually Formatted Integer
num = 3.1415;               // Float
num = 0b11;                 // Binary
num = 0o11;                 // Octal
num = 0x11;                 // Hex
num = 123e-1;               // Scientific format
num = NaN;                  // NaN is a special global number
num = Infinity;             // Infinity is a special global number
num = -Infinity;            // Any number can be made negative

// Whenever special numbers are used in arithmetic expressions, they take priority over other numbers.
// If there is an arithmetic expression with more than one special number, NaN wins out.
    `);


    terminal.arr.push(`

!// Number operators: +, -, *, /, %  which takes in 2 args, and ++, --  which take 1
// Bitwise operators: &, |, ^  which take in 2 args, and  ~, <<, >>, >>>  which take 1

num = +"text";          // num === NaN
num = -"text";          // num === NaN
num = +"123";           // num === 123
num = -"123";           // num === -123

ANY operator that takes in 2 arguments can be used in the "arg"= style:

num += num;
num |= num;
    `);


    terminal.arr.push(`
Booleans!

let bool: boolean = true;
console.log(bool.valueOf());            // Booleans only have one method
console.log(JSON.stringify(bool));
if (bool) bool = !bool;

// Logical operators: && || !
bool = !!str;                           // str converts to "true";
bool = !!num;
    `);


    terminal.arr.push(`
Symbols!

let sym: Symbol = Symbol();
sym = Symbol("test"); 

sym.toString();
sym.valueOf();

Symbols are used to generate unique values. They function similar
to objects in that they have unique IDs in memory:

Symbol() === Symbol() resolves to false!
    `);


    terminal.arr.push(`
BigInts!
    
let big_int: bigint = 123n;         // Take note of the "n"
big_int = BigInt("123");
big_int = BigInt("test");        // This code will fail!

big_int.toLocaleString();       // BigInts have some basic methods

Math.round(big_int);      !!! ERROR !!!  BigInts are NOT numbers

big_int += big_int;
big_int ^= big_int;
big_int++;

String conversions: +"123" or -"123"  do NOT work for BigInts!
    `);


    terminal.arr.push(`
Null and Undefined!

str = null;             // str is no longer a string, now a "null" object
str = undefined;        // str is specifically type "undefined" now
str = "hello!";         // str is a string again

num = null;             // Assigning "null" assigns converts num to a "null" object
num = -num;             // Numerically, "null" is "equal" to 0, so num is now -0

function custom1(input: string): number
{
    return null;
}

function custom2(input: string): number
{
    return;
}

All of this code will work in TS, IF the settings are not "strict".
If they are strict, the code above will complain about null and undefined values!
    `);

        terminal.text_area.value = terminal.arr[0];

    })

    let str: string;
    str = "I'm a string!";
    str = 'String here';
    
    let other_str: string = "Text in a variable!";
    str = `I'm also string! ${other_str}`;
    
    str.length                  // Strings have parameters
    str.toLocaleUpperCase();    // String have methods
    parseInt(str);              // Certain functions
    
    console.log(typeof str);    // str is type string as expected
    console.log(typeof "123");
    
    // strings, and in fact all primitives, are immutable, so no str.function() will ever change str's contents
    
    let num: number;
    
    num = 10;                   // Integer
    num = 100_000_000;          // Visually Formatted Integer
    num = 3.1415;               // Float
    num = 0b11;                 // Binary
    num = 0o11;                 // Octal
    num = 0x11;                 // Hex
    num = 123e-1;               // Scientific format
    num = NaN;                  // NaN is a special global number
    num = Infinity;             // Infinity is a special global number
    num = -Infinity;            // Any number can be made negative
    
    // Whenever special numbers are used in arithmetic expressions, they take priority over other numbers.
    // If there is an arithmetic expression with more than one special number, NaN wins out.
    
    num = NaN + 1; console.log(num);
    num = Infinity + 1; console.log(num);
    num = -Infinity + 1; console.log(num);
    num = NaN + Infinity; console.log(num);
    num = Infinity - Infinity; console.log(num);
    
    num.toLocaleString();       // Numbers has methods
    Math.floor(num);            // Certain functions take in numbers
    
    console.log(typeof num)     // num is type num as expected
    
    
    num = 2;
    
    // Number operators: +, -, *, /, %, ++, --
    // Bitwise operators: &, |, ^, ~, <<, >>, >>>
    
    console.log("Arithmetic operators");
    
    num += num; console.log(num); num = 2;
    num /= num; console.log(num); num = 2;
    num %= num; console.log(num); num = 2;
    num -= num; console.log(num); num = 2;
    
    num++;
    num--;
    
    console.log("Bitwise operators");
    
    num &= num; console.log(num); num = 2;
    num |= num; console.log(num); num = 2;
    num ^= num; console.log(num); num = 2;
    num = ~num; console.log(num); num = 2;
    
    console.log("String to Number")
    
    num = +"text";
    console.log(num);
    num = -"text";
    console.log(num);
    num = +"123";
    console.log(num);
    num = -"123";
    console.log(num);
    
    
    let bool: boolean = true;
    console.log(bool.valueOf());            // Booleans only have one method
    console.log(JSON.stringify(bool));
    if (bool) bool = !bool;                 // Booleans are meant primarily to be used for logic/boolean statements
    
    // Logical operators: && || !
    console.log("str:", str, "num:", num);
    bool = !!str; console.log(bool);
    bool = !!num; console.log(bool);
    
    let sym: Symbol = Symbol(); console.log(sym);
    
    sym = Symbol("test"); console.log(sym);
    
    console.log(sym.toString());
    console.log(sym.valueOf());
    
    // sym is immutable, but also unique like an object
    
    console.log("Big Int");
    
    // let big_int: bigint = 123n; console.log(big_int);     // Take note of the "n"
    // big_int = BigInt("123"); console.log(big_int);
    // big_int = BigInt("test");        // This code will fail!
    // big_int.toLocaleString();       // BigInts have some basic methods
    // Math.round(big_int);            // BigInts are NOT numbers
    
    // big_int += big_int; console.log(big_int); big_int = 123n;
    // big_int ^= big_int; console.log(big_int); big_int = 123n;
    // big_int++; console.log(big_int); big_int = 123n;
    
    
    // str = null;
    console.log(typeof str);    // str is no longer a string, now a "null" object
    console.log(JSON.stringify(str));
    
    // str = undefined;
    console.log(typeof str);    // str is specifically type "undefined" now
    
    str = "hello!";
    console.log(typeof str);    // str is a string again
    
    
    // num = null;                 // Assigning "null" assigns converts num to a "null" object
    console.log(typeof num)     //
    console.log(JSON.stringify(num));
    num = -num;                 // Any number can be made negative
    
    console.log(num);           // Shows -0
    
    // num = undefined;
    console.log(typeof num)     //
    
    function custom1(input: string): number
    {
        return 0;
    }
    
    function custom2(input: string): number
    {
        return 0;
    }
    tuple_topic.dispatchEvent(new Event("click"));
}