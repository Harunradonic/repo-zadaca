//zadatak 1
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let rezultat = i * j;
      if (rezultat % 2 === 0) {
        console.log(i + " * " + j + " = " + rezultat);
      }
    }
  }

//zadatak 2
let niz = ["javascript", "python","c#"];
niz.forEach((niz2) => {
    console.log(niz2)
});

//zadatak 3
const temp = [ "1 kasikica soli", "2 kasike ulja", "300g Brasna", "200 ml mlijeka"];
for (let i = 0; i < temp.length; i++) {
  console.log(temp[i]);
}