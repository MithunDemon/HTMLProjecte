const likebutton = document.querySelector('.mtm-like');
const unlikebutton = document.querySelector('.mtm-unlike');

const likecount = document.querySelector('.like-count');

console.log('likecount');

let likes = 0;


likebutton.addEventListener('click' ,() =>{
    console.log('i am chicked button');
    likes++;

    likecount.innerHTML = `${likes} likes`;
});

unlikebutton.addEventListener('click' ,() =>{
    console.log('i am not chicked button');
   
    if(likes > 0)
    {
      likes--;
    }

    likecount.innerHTML = `${likes} likes`;
});

