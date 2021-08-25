let teacher1 = {
  name : "Birgitte Kirk Iversen",
  title : "Senior Lecturer",
  department : "Programmes within Digital Communication and Multimedia",
  mail : "bki@baaa.dk",
  phone : "12345678",
  img : "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp",
  link : "https://www.eaaa.dk/kontakt/find-medarbejder/medarbejder/birgitte-kirk-iversen/",
};

let teacher2 = {
  name : "Rasmus Cederdorff",
  title : "IT Teacher",
  department : "JavaScript",
  mail : "race@baaa.dk",
  phone : "12345678",
  img : "https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp",
  link : "https://www.eaaa.dk/kontakt/find-medarbejder/medarbejder/rasmus-cederdorff/",
};

let teacher3 = {
  name : "Martin Aagaard Nøhr",
  title : "Adjunct",
  department : "Uddannelse for digitale medier og kommunikation",
  mail : "mnor@eaaa.dk",
  phone : "72286320",
  img : "https://external-preview.redd.it/lImRsHPyJM-RwfrTawJhg9MLmDcssVzT7UfhWKPtfQA.jpg?auto=webp&s=feb50a0a913f0c83b579d066448aaf1d44958260",
  link : "https://www.eaaa.dk/kontakt/find-medarbejder/medarbejder/martin-aagaard-nohr/",
};

let teacher4 = {
  name : "Lykke Dahlén",
  title : "Adjunct",
  department : "Uddannelse for digitale medier og kommunikation",
  mail : "lyda@eaaa.dk",
  phone : "72286329",
  img : "https://www.eaaa.dk/media/vk5evkad/lykke-dahlen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335291100000&format=webp",
  link : "https://www.eaaa.dk/kontakt/find-medarbejder/medarbejder/lykke-dahlen",
};

let teacher5 = {
  name : "Morten Algy Bonderup",
  title : "Lector",
  department : "Uddannelse for digitale medier og kommunikation",
  mail : "moab@eaaa.dk",
  phone : "72286339",
  img : "https://www.eaaa.dk/media/hi4lv5hw/morten-bonderup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335308630000&format=webp",
  link : "https://www.eaaa.dk/kontakt/find-medarbejder/medarbejder/morten-algy-bonderup/",
};


console.log(teacher1)

document.querySelector(".grid-container").innerHTML = 
`
<div>
<a href="${teacher1.link}"><img src="${teacher1.img}"></a>  
<h1>${teacher1.name}</h1>
<h1>${teacher1.title}</h2>
<br><br>
<h3>${teacher1.department}</h3>
<address>${teacher1.mail}<br> ${teacher1.phone}</address>
</div>

<div>
<a href="${teacher2.link}"><img src="${teacher2.img}"></a>  
<h1>${teacher2.name}</h1>
<h1>${teacher2.title}</h2>
<br><br>
<h3>${teacher2.department}</h3>
<address>${teacher2.mail}<br> ${teacher2.phone}</address>
</div>

<div>
<a href="${teacher3.link}"><img src="${teacher3.img}"></a>  
<h1>${teacher3.name}</h1>
<h1>${teacher3.title}</h2>
<br><br>
<h3>${teacher3.department}</h3>
<address>${teacher3.mail}<br> ${teacher3.phone}</address>
</div>

<div>
<a href="${teacher4.link}"><img src="${teacher4.img}"></a>  
<h1>${teacher4.name}</h1>
<h1>${teacher4.title}</h2>
<br><br>
<h3>${teacher4.department}</h3>
<address>${teacher4.mail}<br> ${teacher4.phone}</address>
</div>

<div>
<a href="${teacher5.link}"><img src="${teacher5.img}"></a>  
<h1>${teacher5.name}</h1>
<h1>${teacher5.title}</h2>
<br><br>
<h3>${teacher5.department}</h3>
<address>${teacher5.mail}<br> ${teacher5.phone}</address>
</div>
`
