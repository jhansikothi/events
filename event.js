const card=document.querySelector("div")
card.id="butterflycard"
card.innerHTML=`<img src="https://media.istockphoto.com/id/1495778166/photo/magical-beauty-butterfly.webp?b=1&s=612x612&w=0&k=20&c=AJpaSWagAGHsCeZTTwoshQ_8qjoHG6zvcSxE_Nn7Idk="width="300">
<p>butterflyimage</p>
<button>exploremore</button>`
card.style.border="2px solid black"
card.style.backgroundColor="yellow"
card.style.display="inline-block"
card.style.padding="10px"
card.style.marginBottom="10px"

const card1=document.querySelector("span")
card1.id="butterflycard1"
card1.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhKw8dVKk7ZN777aLbWeYEI7NvewoHhufFg&s"width="300">
<p>butterflyimage</p>
<button>exploremore</button>`
card1.style.border="2px solid black";
card1.style.backgroundColor="pink";
card1.style.display="inline-block"
card1.style.padding="10px"


const newcard=document.createElement("div")
newcard.id="greenerycard"
newcard.innerHTML=`<img src="https://images.pexels.com/photos/94847/pexels-photo-94847.jpeg?cs=srgb&dl=pexels-asphotograpy-94847.jpg&fm=jpg "width="300px">
<p>greenerycard</p><button>exploreme</button>`
newcard.style.border="2px solid black";
newcard.style.backgroundColor="grey";
newcard.style.display="inline-block";
newcard.style.padding="10px"

document.body.appendChild(newcard)

const newcard1=document.createElement("span")
newcard1.id="greenerycard1"
newcard1.innerHTML=`<img src="https://media.istockphoto.com/id/800359302/photo/summer-park.jpg?s=612x612&w=0&k=20&c=5dT490lWX65Bj9jsk397l0ba8vUiu7WL8qlUU0V1LP0= "width="300px">
<p>greenerycard</p><button>exploreme</button>`
newcard1.style.border="2px solid black";
newcard1.style.backgroundColor="grey";
newcard1.style.display="inline-block";
newcard1.style.padding="10px"

document.body.appendChild(newcard1)






