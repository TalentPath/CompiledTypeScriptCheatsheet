export function typeAliases(terminal: {text_area: HTMLTextAreaElement, arr: string[], index: number}):void
{
    let topic6 = document.getElementById('topic6') as HTMLElement
    
    
    topic6.addEventListener('click',(event)=>{
        event.preventDefault()
        let text_area=document.getElementById("text")as HTMLElement ;
        text_area.innerText = 'The programmer/Developer is able to creat a new name for a type. You can think of it as an interface but this can take in primitice types, unions tuples and much more !  '
        let image1 = document.getElementById('image1') as HTMLImageElement;
        let image2 = document.getElementById('image2') as HTMLImageElement;
        let image3 = document.getElementById('image3') as HTMLImageElement;
        
        image1.src = 'assets/images/TypeAliases.png';
        image2.src = 'assets/images/logDetails.png';
        image3.src = 'assets/images/Greetings.png';
        
        var slideIndex = 0;
        // showSlides();
    
        // function showSlides() {
        //     var i;
        //     var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLDivElement>;
        //     for (i = 0; i < slides.length; i++) {
        //         slides[i].style.display = "none";
        //     }
        //     slideIndex++;
        //     if (slideIndex > slides.length) { slideIndex = 1 }
        //     slides[slideIndex - 1].style.display = "block";
        //     setTimeout(showSlides, 8000); // Change image every 2 seconds
        // }
        terminal.arr.length = 0;
    
        terminal.arr.push(`
    Topic: Type Aliases
    
    // Type Aliases 
    type StringOrNumber = string|number; 
    // Type aliases with an object 
    type objWithName = {name:string , id: StringOrNumber};
    interface User {
        name: string,
        id: Number
    }
    let user ={
        name: 'joe',
        id: 2316736,
    }
        `);
    
    
        terminal.arr.push(`
    // With no type Aliases 
    const logDetails= (user: string , id: string| number)  => {
        console.log(\`Hey \${user} your id is \${id}\`)
    }
    
    // With type Aliases
    const logDetailss = (user: StringOrNumber , id: StringOrNumber)  => {
        console.log(\`Hey \${user} your id is \${id}\`)
    }
        `);
    
    
        terminal.arr.push(`
    //Object with no type Aliases 
    const  greetings = (user: {name: string, id: string|number}) => {
        console.log(\`Hey \${user.name} your partner numbers is US\${user.id}\`)
    }
    
    const  greetingss = (user: objWithName) => {
        console.log(\`Hey \${user.name} your partner numbers is \${user.id}\`)
    }
        `);
    
        terminal.text_area.value = terminal.arr[0];
    
    
    })
    
    
    
    // Type Aliases 
    type StringOrNumber = string|number; 
    // Type aliases with an object 
    type objWithName = {name:string , id: StringOrNumber};
    interface User {
        name: string,
        id: Number
    }
    let user ={
        name: 'joe',
        id: 2316736,
    }
    
    // With no type Aliases 
    const logDetails= (user: string , id: string| number)  => {
        console.log(`Hey ${user} your id is ${id}`)
    }
    
    // With type Aliases
    const logDetailss = (user: StringOrNumber , id: StringOrNumber)  => {
        console.log(`Hey ${user} your id is ${id}`)
    }
    
    //Object with no type Aliases 
    const  greetings = (user: {name: string, id: string|number}) => {
        console.log(`Hey ${user.name} your partner numbers is US${user.id}`)
    }
    
    const  greetingss = (user: objWithName) => {
        console.log(`Hey ${user.name} your partner numbers is ${user.id}`)
    }
    
    
    // logDetails('Joe',12345)
    
    greetings(user)

}