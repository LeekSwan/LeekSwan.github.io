export const renderCard = function(experience) {
  return `
      <div class="card">
        <img class="card-img-top img-fluid" src="http://placehold.it/800x600/f44242/fff" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">${experience.id}</h4>
            <p class="card-text">${experience.title}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
         `    
};

export const loadExperiencesIntoDOM = function(experience) {
  // Generate the cards using renderCard()
  let cards = $('<div class="experience-card-slider slider-container"></div>');
  for (let i = 0; i < experience.length; i++) {
  cards.append(renderCard(experience[i]));
  }

  //Append to element
  $("#experience-slider").append(cards)

};



/**
* Use jQuery to execute the function after the page loads
*/
$(function() {
  
  loadExperiencesIntoDOM(experienceData);
// Slider settings 
$('.experience-card-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: false,
  speed: 500,
  draggable: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        draggable: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: false
      }
    }
  ]
});
});


