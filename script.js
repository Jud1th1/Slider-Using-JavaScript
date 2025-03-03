//Lets start with putting the script inside an event handler for when the window loads so that
//it doesn't do anything until all the pictures have donwloaded. 

window.addEventListener('load', function(){
    //How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    //How wide is each slide?
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    //Total width of the slider
    const totalWidth = slideCount * slideWidth + 'px';
    //Slider DOM element 
    const slider = document.querySelector('#slider-wrapper ul');
    //Next button 
    const next = document.getElementById('next');
    //Previous button 
    const previous = document.getElementById('prev');


    let leftPosition = 0;
    let counter = 0; 
    slider.style.width = totalWidth;

    next.addEventListener('click', function(event){
        event.preventDefault();
        counter ++;
        if(counter == slideCount){
            //set the counter to 0
            counter = 0;
            //set the left position to 0
            leftPosition = 0;
            //move the slider into posistion
            slider.style.left = leftPosition;
        }else{
            //move the slider to the next slide
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        }
    });
   

    previous.addEventListener('click', function(){
        counter --;

        if (counter < 0){
            counter = slideCount - 1;
        }

        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

});