var  res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
for (var i = 0; i < data1.length; i++) {
   console.log(data1[i].name) ;
   var div = document.createElement("div");
   div.innerHTML= `<div class="row row-cols-1 row-cols-md-3">
   <div class="col mb-4">
     <div class="card h-50">
       <img src="${data1[i].flag}" class="card-img-top" alt="..."></br>
       <div class="card-body">
         <h4 class="card-title">${data1[i].name}</h4>
         <h5 class="card-title">${data1[i].region} </h5>
         <h6 class="card-title">${data1[i].subregion}</h6>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
     </div>
     </div>
     </div> `
     
     
  
 document.body.append(div)
  }
});

         