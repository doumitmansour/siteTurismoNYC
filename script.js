const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.geral');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = ('#EB4D42')

card1.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/aerial-view-of-the-beautiful-central-park-in-manhattan-new-york.jpg')";
    title.innerText = 'Central Park';
    textCard.innerText = 'Central Park is a large park within New York City . It has an area of ​​3.41 km² and is located in the district of Manhattan . It opened in 1857 with 3.15 km², and is considered by many New Yorkers as an oasis within the great forest of skyscrapers in the region. Its a place where people can slow down the frenetic pace of New York.';
});
card2.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/statue-of-liberty-and-the-new-york-city-skyline-usa.jpg')";
    title.innerText = 'Statue of Liberty';
    textCard.innerText = 'The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel';
});
card3.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/pexels-luis-dalvan-1770775.jpg')";
    title.innerText = 'Times Square';
    textCard.innerText = 'The area is located at the junction of Broadway and Seventh Avenue, between 42nd Street and 47th Street , in midtown Manhattan . It is a commercial area, where all buildings are required to install illuminated signs for advertising purposes .';
});
card4.addEventListener('click', ()=>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/beautiful-view-of-the-empire-states-and-skyscrapers-in-new-york-city.jpg')";
    title.innerText = 'Empire State';
    textCard.innerText = 'The Empire State Building is a 102-story skyscraper in downtown Manhattan , New York City , on Fifth Avenue between West 33rd and 34th Streets. It has a roof height of 381 meters, but with its antenna tower included, the building reaches 443 m in height. Its name is derived from the nickname for the state of New York , the Empire State .. It stood as the tallest building in the world for nearly 40 years, from its completion in early 1931 until the construction of the North Tower of the original World Trade Center complex in the late 1970s.';
})