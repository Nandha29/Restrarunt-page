const menuItems = [
    {
        id : 1,
        item : "food item1",
        oneline:"one:Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut veritatis cupiditate culpa doloremque sint animi nemo autem at assumenda.",
        img: "https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg",
        hotel: "Hotel",
        desc:"one:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero tenetur enim voluptatum inventore beatae suscipit sit dolorem mollitia amet! Natus mollitia incidunt sunt tenetur obcaecati ducimus, praesentium dolore odit aliquam sed similique? Iste, commodi. Iure iste maiores vel aut dolorum quo fuga distinctio voluptatem, voluptatibus non neque praesentium atque."
    },
    {
        id : 2,
        item : "food item2",
        oneline:"one:Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut veritatis cupiditate culpa doloremque sint animi nemo autem at assumenda.",
        img: "https://image.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg",
        hotel: "Hotel",
        desc:"one:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero tenetur enim voluptatum inventore beatae suscipit sit dolorem mollitia amet! Natus mollitia incidunt sunt tenetur obcaecati ducimus, praesentium dolore odit aliquam sed similique? Iste, commodi. Iure iste maiores vel aut dolorum quo fuga distinctio voluptatem, voluptatibus non neque praesentium atque."
    },
    {
        id : 3,
        item : "food item3",
        oneline:"one:Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut veritatis cupiditate culpa doloremque sint animi nemo autem at assumenda.",
        img: "https://images.indianexpress.com/2021/12/food-trends_-1200.jpg",
        hotel: "Hotel",
        desc:"one:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero tenetur enim voluptatum inventore beatae suscipit sit dolorem mollitia amet! Natus mollitia incidunt sunt tenetur obcaecati ducimus, praesentium dolore odit aliquam sed similique? Iste, commodi. Iure iste maiores vel aut dolorum quo fuga distinctio voluptatem, voluptatibus non neque praesentium atque."
    },
   {
    id : 4,
    item : "food item4",
    oneline:"one:Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut veritatis cupiditate culpa doloremque sint animi nemo autem at assumenda.",
    img: "https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
    hotel: "Hotel",
    desc:"one:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero tenetur enim voluptatum inventore beatae suscipit sit dolorem mollitia amet! Natus mollitia incidunt sunt tenetur obcaecati ducimus, praesentium dolore odit aliquam sed similique? Iste, commodi. Iure iste maiores vel aut dolorum quo fuga distinctio voluptatem, voluptatibus non neque praesentium atque."
},
]

const item = document.getElementById('item');
const oneline = document.getElementById('oneline');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

let currentMenu=0;
window.addEventListener('DOMContentLoaded',function(){

    allMenu(currentMenu);
});

const allMenu=()=>{
    let menu=menuItems[currentMenu];
    item.textContent=menu.item;
    oneline.textContent=menu.oneline;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
}
previous.addEventListener('click',()=>{
    currentMenu--;
    allMenu(currentMenu);
})
next.addEventListener('click',()=>{
    currentMenu++;
    allMenu(currentMenu);
})