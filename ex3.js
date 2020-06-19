let a = "";
let size = 0;
size = prompt ("digite um valor:");
for (let l = 0; l < size; l++) {
    a += l % 2 == 0 ? " " : ""; 
    for (let i = 0; i < size; i++) {
        a += "# ";
    }
    a += "\n";
}
console.log(a);