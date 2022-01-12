export function typeInference(terminal: {text_area: HTMLTextAreaElement, arr: string[], index: number}):void
{
    let tuple_topic = document.getElementById('topic3') as HTMLElement
    
    tuple_topic.addEventListener('click', (event) => {
        console.log("YES");
        event.preventDefault()
        let image1 = document.getElementById('image1') as HTMLImageElement;
        let image2 = document.getElementById('image2') as HTMLImageElement;
        let image3 = document.getElementById('image3') as HTMLImageElement;
        console.log("here")
        let text_area = document.getElementById('text') as HTMLTextAreaElement;
        text_area.innerHTML = 'By default, TSC will always try to guess the type of variables.';
        text_area.innerHTML += `&#13;&#10;`;
        text_area.innerHTML += 'This usually happens in 2 (really 3 or 4!) key places:';
        text_area.innerHTML += `&#13;&#10;`;
        text_area.innerHTML += 'Variable Initialization and Function Return';
        image1.src = 'assets/images/basic_inference.png';
        image2.src = 'assets/images/function_inference.png';
        image3.src = 'assets/images/contextual_inference.png';
    
        var slides: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLDivElement>;
        slides[0].style.display = "block";
        slides[1].style.display = "none";
        slides[2].style.display = "none";
        terminal.arr.length = 0;

    terminal.arr.push(`
Topic: Type Inference!

Type inference is TS's way of guessing what type something is

let item;           // TSC assumes item is any
item = 5;           // TSC accepts
item.toString();    // TSC also accepts, as it knows item is number right now
item = null;        // TSC also accepts

let thing = 5;      // TSC knows thing should be number
thing.toString();   // Same as above, TSC knows about this method
thing = "string";   !!! ERROR !!! thing has been determined to be number!
    `);


    terminal.arr.push(`
Type inference happens in 3 (sometimes 4!) key places:

Initialization (as well as during declaration!):
let thing = 5;

Specifying default value for function parameter:
function doSomething(input = false)

Returning from a function:
return 5;
    `);


    terminal.arr.push(`
Type inference also occurs in special contexts, like array methods:
    
let arr: string[] = ["1", "2", "3"];

arr.forEach(item => item.toUpperCase());    // TSC accepts
arr.forEach(item => Math.round(item));      !!! ERROR !!! TSC knows item is string!
    `);

    terminal.text_area.value = terminal.arr[0];
    })

    let item;
    
    item = 5;
    item.toString();        // TSC knows "item" is "string" right now
    
    item = null;            // "item" is "any", so this is fine
    
    
    let thing = 5;
    thing.toString();
    
    // thing = "string";       // TSC doesn't allow this!
    
    
    function doSomething(input = false)
    {
        return 5;
    }
    
    let int: number = doSomething();
    
    
    let arr: string[] = ["1", "2", "3"];
    
    

    
    // arr.forEach(item => Math.round(item));
    arr.forEach(item => item.toUpperCase());
    
    
    let container = [0, NaN, null];

}
