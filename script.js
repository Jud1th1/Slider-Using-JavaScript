//Lets start with putting the script inside an event handler for when the window loads so that
//it doesn't do anything until all the pictures have donwloaded. 

window.addEventListener('load', function(){
    // 1️⃣ How many slides are in the slider?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    // 2️⃣ How wide is each slide? (We get the width of the slider container itself)
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    // 3️⃣ Total width of the full strip of slides (all slides side by side)
    const totalWidth = slideCount * slideWidth + 'px';
    // 4️⃣ Grab the actual <ul> that contains all the slides- Slider DOM element 
    const slider = document.querySelector('#slider-wrapper ul');
    // 5️⃣ Get the Next and Previous buttons
    const next = document.getElementById('next');
    const previous = document.getElementById('prev');

    // 6️⃣ Set up a position tracker and counter for which slide is showing
    let leftPosition = 0;
    let counter = 0; 
    // 7️⃣ Set the <ul>'s total width so all slides fit in a row
    slider.style.width = totalWidth;

    // 8️⃣ Handle NEXT button click
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
    
   
    // 9️⃣ Handle PREVIOUS button click
    previous.addEventListener('click', function(){
        counter --;

        if (counter < 0){
            counter = slideCount - 1;
        }

        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

});