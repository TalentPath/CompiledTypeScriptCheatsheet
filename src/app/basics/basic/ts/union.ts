export function union(terminal: {text_area: HTMLTextAreaElement, arr: string[], index: number}):void
{
    let topic4 = document.getElementById('topic4') as HTMLElement
    
    
    topic4.addEventListener('click', (event) => {
        event.preventDefault()
        let image1 = document.getElementById('image1') as HTMLImageElement;
        let image2 = document.getElementById('image2') as HTMLImageElement;
        let image3 = document.getElementById('image3') as HTMLImageElement;
        console.log("here")
        let text_area = document.getElementById('text') as HTMLElement;
        text_area.innerText = 'Union Types: Allows the programmer to use more than one data type for a variable '
        image1.src = 'assets/images/Union.png';
        image2.src = 'assets/images/UnionOK.png';
        image3.src = 'assets/images/NotOKUnion.png';
    
        // var slideIndex = 0;
        // showSlides();
    
        // function showSlides() {
        //     var i;
        //     var slides = document.getElementsByClassName("mySlides")as HTMLCollectionOf<HTMLDivElement>;
        //     for (i = 0; i < slides.length; i++) {
        //         slides[i].style.display = "none";
        //     }
        //     slideIndex++;
        //     if (slideIndex > slides.length) { slideIndex = 1 }
        //     slides[slideIndex - 1].style.display = "block";
        //     setTimeout(showSlides, 8000); // Change image every 8 seconds
        // }





        terminal.arr.length = 0;
    
        terminal.arr.push(`
    Topic: Unions via the Union operator '|'
    
    This is a proper way to use unions:
    
    let unions: (string | number | boolean);
        unions = 10161990;                      Number is accepted!
        unions = "ABC";                         String is accepted!
        unions = false;                         Boolean is accepted!
        `);
    
    
        terminal.arr.push(`
    This is possible because of the union operator, the '|'.
    The variable "unions" is able to take any of the types that
    have been "unioned" using this operator.
    
    (string | number | boolean)
        `);
    
    
        terminal.arr.push(`
    Not ok to use union:
    
    let notUnion: (number| string );
        notUnion = 'Team Name ';
        notUnion = true ;               !!! Compiler Error since this type isn't defined as acceptable !!!
        notUnion = 12/2/2021 
        `);
    
        terminal.text_area.value = terminal.arr[0];
    
    })
    
    
    // Ok Use of Union 
    let unions: (string | number | boolean);
    unions = 10161990;
    unions = "ABC";
    unions = false;
    
    // console.log(unions)
    
    //Not ok to use union 
    let notUnion: (number | string);
    notUnion = 'Team Name ';
    // notUnion = true ;  // Compiler Error since the type isn't defined
    notUnion = 12 / 2 / 2021
}    
