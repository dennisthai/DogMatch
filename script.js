let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
    //bump active index to next 
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0 ;
    /* 0 is the value assigned to nextIndex if the condition before the ? evaluates to false, if true then activeIndex +1.*/
    const currentGroup = document.querySelector(`[data-index = "${activeIndex}"]`), //selects the current group
            nextGroup = document.querySelector(`[data-index = "${nextIndex}"]`); //selects the next group

        //Active group becomes after
    currentGroup.dataset.status = "after";

    //Next group becomes active

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
}


const handleHateClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
    
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentGroup.dataset.status = "before";
    
    nextGroup.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
  }


