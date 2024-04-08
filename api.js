// Test JavaScript Skill 2 Level 2.2
// 1. API
// 2. URL Parameter
// 3. Local Storage

function createPenElement(pen) {
  const penDiv = document.createElement("div");
  penDiv.classList.add("col-3", "text-center");

  const penColorDiv = document.createElement("div");
  penColorDiv.classList.add("pen-color");
  penColorDiv.style.backgroundColor = pen.color;

  const penNameP = document.createElement("p");
  penNameP.textContent = pen.name;

  const penLink = document.createElement("a");
  penLink.classList.add("pen-link");
  penLink.href = `/pages/detail/?id=${pen.id}`;
  penLink.appendChild(penColorDiv);
  penLink.appendChild(penNameP);

  penDiv.appendChild(penLink);

  return penDiv;
}

function getAllPens() {
  // Fetch pen colors from API
  //1. API : Replace pens data by fetching from API
  fetch("https://pens-api.vercel.app/api/pens")     
    .then((response) => {     
      if (!response.ok) {      
        throw new Error("Network response was not ok");        
      }   
      return response.json();      
    })     
    .then((pens) => {         
      const card = document.getElementById('pen-list');            
        })        
          .catch((error) => {         
            console.error("Fetch error:", error);
            return error;
      });
  }
      getAllPens();
  let pens = [
    { id: 1, name: "Pen 1", color: "red" },
    { id: 2, name: "Pen 2", color: "blue" },
    { id: 3, name: "Pen 3", color: "black" },
    { id: 4, name: "Pen 4", color: "red" },
    { id: 5, name: "Pen 5", color: "blue" },
    { id: 6, name: "Pen 6", color: "black" },
    { id: 7, name: "Pen 7", color: "red" },
    { id: 8, name: "Pen 8", color: "blue" },
    { id: 9, name: "Pen 9", color: "black" },
  ];

  const penListDiv = document.getElementById("pen-list");

  pens.forEach((pen) => {
    const penElement = createPenElement(pen);
    penListDiv.appendChild(penElement);
  });


getAllPens();
