





// let serailNum=


let letters = [];

for(let i=65;i<=90;i++)
{
  letters.push(String.fromCharCode(i));
}





function generate(letters) {
  
  let reslut ="";
  
  for(let i = 0 ;i<10;i++)
    {
      
      reslut+=`${Math.floor(Math.random() * 10)}${letters[Math.floor(Math.random()* letters.length)]}`
      }
      return reslut
      }

generate(letters);


      console.log(generate(letters));



      let serialdiv= document.querySelector(".serial");

      let GenerateSapn =document.querySelector(".generate");


      GenerateSapn.onclick = function () {


        serialdiv.textContent= generate(letters)
        // document.body.appendChild(serialdiv)
      }






// let arr = ["Ahmed","Sayed","Ali"];

// console.log(arr.length);

// console.log(Math.random() * arr.length);

// console.log(Math.floor(Math.random()* arr.length));

// console.log(arr[Math.floor(Math.random() * arr.length)]);









let Up = document.querySelector(".up")






window.onscroll= function () {

  if(this.scrollY >= 1000) {

    Up.classList.add("show")


  }else {

    Up.classList.remove("show")
  }


}


Up.onclick =function (){

  window.scrollTo ({

    top:0,
    behavior:"smooth",
  });
};




let tabs =document.querySelectorAll("ul li");
let tabsArray =Array.from(tabs);

let divs =document.querySelectorAll(".content > div");

let divsArray =Array.from(divs);


tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((element) => {
      element.classList.remove("active"); // Remove "active" class from all tabs
    });

    e.currentTarget.classList.add("active"); // Add "active" class to the clicked tab

    divsArray.forEach((div) => {
      div.style.display = "none"; // Hide all content divs
    });

    // Select the content div associated with the clicked tab
    const contentDiv = document.querySelector(e.currentTarget.dataset.cont);

    // Check if the element exists before trying to access its style property
    if (contentDiv) {
      contentDiv.style.display = "block";
    } else {
      console.error(
        `No element found for selector: ${e.currentTarget.dataset.cont}`
      );
    }
  });
});







// let taps =document.querySelectorAll("ul li");

// let divs = document.querySelectorAll(".content div");


// taps.forEach((tap) => 
// {
//   tap.onclick=function (){
//     taps.forEach((el) => el.classList.remove("active"));
//     this.classList.add("active")

//     divs.forEach((div) => div.style.display="none")
  
//     divs.forEach((div) => {
//       if(div.id === this.id)
//       {
//         div.style.display="block"
//         div.style.backgroundColor="#ddd"
//       }
//     })
//   }



// }
// )