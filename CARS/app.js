var carlist = {
  Honda: {
    City: {
      imgSrc: "img/city.png",
      Name: "City",
      Price: 5000000,
      Color: ["black", "White", "blue"],
    },
    Civic: {
      imgSrc: "img/civic.jpg",
      Name: "Civic",
      Price: 9000000,
      Color: ["black", "White", "blue"],
    },
    HRV: {
      imgSrc: "img/HRV.jpeg",
      Name: "HRV",
      Price: 6000000,
      Color: ["black", "White", "blue"],
    },
    Vezel: {
      imgSrc: "img/Vezel.jpg",
      Name: "Vezel",
      Price: 7500000,
      Color: ["black", "White", "blue"],
    },
  },
  Toyota: {
    Corolla: {
      imgSrc: "img/corolla.webp",
      Name: "Corolla",
      Price: 7000000,
      Color: ["black", "White", "blue"],
    },
    Prius: {
      imgSrc: "img/Prius.jpeg",
      Name: "Prius",
      Price: 8000000,
      Color: ["black", "White", "blue"],
    },
    Crown: {
      imgSrc: "img/Crown.jpg",
      Name: "Crown",
      Price: 10000000,
      Color: ["black", "White", "blue"],
    },
    Prado: {
      imgSrc: "img/Prado.jpeg",
      Name: "Prado",
      Price: 50000000,
      Color: ["black", "White", "blue"],
    },
  },
  MITSUBISHI: {
    X: {
      imgSrc: "img/Pajero.png",
      Name: "ek X ev",
      Price: 5000000,
      Color: ["black", "White", "blue"],
    },
    Evo: {
      imgSrc: "img/EVO.jpeg",
      Name: "Evo",
      Price: 5000000,
      Color: ["black", "White", "blue"],
    },
  },
};

var main = document.getElementById("main");
var company = document.getElementById("company");
var model = document.getElementById("model");
var filter = document.getElementById("filter");
company.innerHTML += `<option>Company</option>`;
model.innerHTML += `<option>Model</option>`;

function SelectedCompany() {
  model.innerHTML = "";
  model.innerHTML += `<option>Model</option>`;
  var selected = company.value;
  console.log(selected);
  for (var a in carlist[selected]) {
    model.innerHTML += `<option value='${a}'>${a}</option>`;
  }
}
function SelectedModel() {
  main.innerHTML="";
  filter.innerHTML="";
  var current_car = model.value;
  var current_company = company.value;
  console.log(current_car, " ", current_company);
  var view = carlist[current_company][current_car];

  var colorPrint = "";
  for (var k = 0; k < view.Color.length; k++) {
    colorPrint += `<div class='${view.Color[k]}'></div>`;
  }
  filter.innerHTML += `
   <div class="row g-0">
   <div class="col-md-4">
     <img height="auto" width="auto" src="${view.imgSrc}" class="img-fluid rounded-start" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${view.Name.toUpperCase()}</h5>
       <p class="card-text">Price: ${view.Price} PKR</p>
       <a href="#" class="btn btn-primary">BUY</a>
       <div class="d-flex gap-2 p-1">
            ${colorPrint}
          </div>
     </div>
   </div>
 </div>
  `;
}

function searchCar(){
  
  
}

for (var i in carlist) {
  company.innerHTML += `<option value='${i}'>${i}</option>`;

  for (var j in carlist[i]) {
    var value = carlist[i][j];
    var colorPrint = "";
    for (var k = 0; k < value.Color.length; k++) {
      colorPrint += `<div class='${value.Color[k]}'></div>`;
    }
    main.innerHTML += `    
      <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2">
      <div class="card" style="width: 18rem; Height: 23rem;">
          <img style=" Height: 11rem;" src="${
            value.imgSrc
          }" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${value.Name.toUpperCase()}</h5>
            <p class="card-text">Price: ${value.Price} PKR</p>
            <a href="#" class="btn btn-primary">BUY</a>
            <div class="d-flex gap-2 p-1">
            ${colorPrint}
          </div>
          </div>         
        </div>
      `;
  }
}
