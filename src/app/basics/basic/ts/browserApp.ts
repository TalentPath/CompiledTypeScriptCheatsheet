const text_area: HTMLTextAreaElement = document.getElementById("terminal") as HTMLTextAreaElement;
const arr: string[] = []
let index: number = 0

text_area.addEventListener("keydown", evt => {
    if (evt.key === "Enter")
    {
        index = (index+1 === arr.length) ? 0 : index+1;
        text_area.value = arr[index];
    }
});