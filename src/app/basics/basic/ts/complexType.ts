export function complexType(terminal: {text_area: HTMLTextAreaElement, arr: string[], index: number}):void
{
  console.log(terminal)
  let topic2 = document.getElementById('topic2') as HTMLButtonElement
  let image2 = document.getElementById('image2') as HTMLImageElement
  
  
  topic2.addEventListener('click',(event)=>{
      event.preventDefault()
      let image1 = document.getElementById('image1') as HTMLImageElement;
      let image2 = document.getElementById('image2') as HTMLImageElement;
      let image3 = document.getElementById('image3') as HTMLImageElement;
      // console.log("here")
      let text_area=document.getElementById('text')as HTMLElement ;
      // let code =document.createElement('code')
      text_area.innerHTML = `- TypeScript Type for One-dimensional Array &#13;&#10; -TypeScript Generic Type for One-Dimensional Array &#13;&#10; -TypeScript Empty Array Initialization &#13;&#10; -TypeScript Tuple Type `;
      image1.src = 'assets/images/ObjTypeCT.png';
      image2.src = 'assets/images/complexType1.png';
      image3.src = 'assets/images/complexType2.png';
     
  
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
  Topic: Complex Types
  //  --------- One dimensional array  ---------
  // zipcodes is an array of strings
  let zipcodes: string[] = ['77450', '77494', '77493', '77001'];
  
  // Pushing a number to zipcodes will generate an error
  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
     console.log("One dimensional array: \n");
     console.log(zipcodes)
     zipcodes.push('77027');
     console.log("One dimensional array: \n");
     console.log(zipcodes)
      `);
  
      
      
      terminal.arr.push(`
      //  --------- Generic Type for One-Dimensional Array ---------
      let zipcodes: Array<string> = ['77450', '77494', '77493', '77001'];
      console.log("One dimensional array: "+ zipcodes +'\n');
      zipcodes.push('77027');
      console.log("One dimensional array: "+ zipcodes +'\n');
      `);
      
          terminal.arr.push(`
      //------------------Empty Array Initialization ------------------
      
      // --------- One-dimensional empty array ---------
      let axis: string[] = [];
      
      //  ---------Multi-dimensional empty array ---------
      let coordinates: number[][] = [];
      
      axis.push('x');
      console.log(axis);        // prints ["x"]
      
      coordinates.push([3, 5]);
      coordinates.push([7]);
      console.log(coordinates); // prints [[3, 5], [7]]
          `);
  
      terminal.text_area.value = terminal.arr[0];
      console.log(terminal);
  
  
  
  })

  // topic2.dispatchEvent(new Event("click"));
  
  
  
   //  --------- One dimensional array  ---------
  // zipcodes is an array of strings
  let zipcodes: string[] = ['77450', '77494', '77493', '77001'];
   
  // Pushing a number to zipcodes will generate an error
  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
      console.log("One dimensional array: \n");
      console.log(zipcodes)
      zipcodes.push('77027');
      console.log("One dimensional array: \n");
      console.log(zipcodes)
  
  //  --------- Generic Type for One-Dimensional Array ---------
  let zipcodess: Array<string> = ['77450', '77494', '77493', '77001'];
      console.log("One dimensional array: "+ zipcodess +'\n');
      zipcodes.push('77027');
      console.log("One dimensional array: "+ zipcodess +'\n');
  
  //------------------Empty Array Initialization ------------------
  
  // --------- One-dimensional empty array ---------
      let axis: string[] = [];
      
  //  ---------Multi-dimensional empty array ---------
      let coordinates: number[][] = [];
      
      axis.push('x');
      console.log(axis);        // prints ["x"]
      
      coordinates.push([3, 5]);
      coordinates.push([7]);
      console.log(coordinates); // prints [[3, 5], [7]]
  
  // ---------Tuple Type ---------
  
  // This is an array
  let header: string[] = ['Name', 'Age', 'Smoking', 'Salary'];
  // This is a tuple
  let profile: [string, number, boolean, number] = ['Kobe', 39, true, 150000];
  
  
  
  //  ---------TypeScript Enum Type ---------
  // enum MaritalStatus {
  //     Single,
  //     Married,
  //     Separated,
  //     Divorced
  //   };
     
  //   let employee: [string, MaritalStatus, number] = [
  //     'Bob Jones',
  //     MaritalStatus.Single,
  //     39
  //   ];
  
  // ---------TypeScript Enum Type Variable Assignment ---------
    enum MaritalStatus {
      Single = 'SINGLE',
      Married = 'MARRIED',
      Separated = 'SEPARATED',
      Divorced = 'DIVORCED',
      Widowed = 'WIDOWED'
    };
     
  //  --------- Assign a string to a string enum type  ---------
    let eligibility: MaritalStatus;
  //   eligibility = 'SEPARATED';
    // Error: Type '"SEPARATED"' is not assignable to type 'MaritalStatus'.
     
    console.log(eligibility = MaritalStatus.Widowed)  // No error
  
  
  // ---------TypeScript Object Type ---------
  
  // Define an object type for car
  let car: {make: string, model: string, year: number};
   
  car = {make: 'Toyota', model: 'Camry', year: 2020}; // No error
  // car = {make: 'Nissan', mode: 'Sentra', year: 2019};
  /*
  Error: Type '{make: string; mode: string; year: number;}' is not assignable to
  type '{make: string; model: string; year: number;}'.
  Object literal may only specify known properties, but 'mode' does not exist in
  type '{make: string; model: string; year: number;}'.
  Did you mean to write 'model'?
  */
  // car = {make: 'Chevrolet', model: 'Monte Carlo', year: '1995'};
  // Error: Type 'string' is not assignable to type 'number'."

}