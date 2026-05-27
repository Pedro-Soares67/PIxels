/******************Add the story ******************/
const image_profile = [
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9ZKoD3VqogyJZa8n7B4Cs48YLI7lHCz4Sw&s','Pedro'],
    ['https://c.ndtvimg.com/2026-04/kmh35bi4_trump-jesus_625x300_14_April_26.jpg?im=FaceCrop,algorithm=dnn,width=270,height=300','Trump'],
    ['https://static.wikia.nocookie.net/viloes/images/e/e0/Jeff_the_Killer.webp/revision/latest/thumbnail/width/360/height/450?cb=20220603192746&path-prefix=pt-br','Iago'],
    ['https://www.estadao.com.br/resizer/v2/PXPAQXGOPZH3DDY6GL6IUKLG7E.jpg?quality=80&auth=46dd0bffc664e61889e65bd0bb2401273bd3e21f169d62f9add39e11476776d2&width=380','Jeffr'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbc7yviHnfmO4PdeFKv2-TbiT3zmxMSRWxA&s','Keven'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrn4q1oY6BkbqkJWbIPAZxBiIrfyePNt2UQ&s','Daddy'],
    ['https://i.pinimg.com/474x/e8/28/6e/e8286ed2e512757a9e0831ed9ebe0599.jpg','Raiam'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGLJXjDh_teN4aH7dNJzE0TQHcC0VO9itkA&s', 'Em0x'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})