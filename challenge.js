/* Taking one or more of the sliders you made earlier this week and change it so it runs on a timer, instad of clicking next and previous buttons.
Also how can you make your slideshow stop changing slides, while a user hovers their mouse  over the slides.  */


window.addEventListener('load', function(){
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';
    const slider = document.querySelector('#slider-wrapper ul');

    let leftPosition = 0;
    let counter = 0; 

    slider.style.width = totalWidth;
   
    let mySlider = setInterval(sliderEx, 3000);

    function sliderEx(){
        counter ++;
        if(counter == slideCount){
            counter = 0;
            leftPosition = 0;
            slider.style.left = leftPosition;
        }else{
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        }
    };

    document.getElementById('slider-wrapper').addEventListener('mouseover', function(){
        clearInterval(mySlider);
    });

    document.getElementById('slider-wrapper').addEventListener('mouseout', function(){
        mySlider = setInterval(sliderEx, 3000);
    });


});



