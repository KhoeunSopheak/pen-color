// 2. URL Parameter: please get id from URL
const paramstring =window.location.search;
const searchparams = new URLSearchParams(paramstring);
const value = searchparams.get('id');
let id = 1;
let url = "https://pens-api.vercel.app/api/pens/1"; // please use a url from single pen from API document

async function getPen() {
  // Fetch pen colors from API
  fetch("https://pens-api.vercel.app/api/pens")
  .then((response) => {    
    if (!response.ok) {     
    throw new Error("Network response was not ok");     
      }  
    return response.json();    
     })    
    .then((pens) => {
      document.getElementById('single-pen');    
      for(let i=0; i< pens.length; i++) {            
        if(pens[i].value === id){}
    }
  } )   
        .catch((error) => {   
          console.error("Fetch error:", error);    
            return error;     
        });
    }       
  
  getPen()
  try {
    const response = await fetch(url);
    const pen = await response.json();

    const penListDiv = document.getElementById("single-pen");
    // 3. Local Storage : Save data to localStorage
    saveLocalStorageData(pen);

    const penElement = createPenElement(pen);
    penListDiv.appendChild(penElement);
  } catch (error) {
    console.error(`Get pen error: ${error.message}`);
  }


// 3. Local Storage : Save data to localStorage
function saveLocalStorageData(pen) {
  // Please implement saving local storage function
}

function createPenElement(pen) {
  const penDiv = document.createElement("div");
  penDiv.classList.add("col-3", "text-center");

  const penColorDiv = document.createElement("div");
  penColorDiv.classList.add("pen-color");
  penColorDiv.style.backgroundColor = pen.color;

  const penNameP = document.createElement("p");
  penNameP.textContent = pen.name;

  penDiv.appendChild(penColorDiv);
  penDiv.appendChild(penNameP);

  return penDiv;
}

// call function getPen
getPen();
