export const renderCard = function(experience) {
  return `
      <div class="card bg-transparent">
          <div class="card-body card-color">
            <h4 class="card-title card-heading">${experience.title}</h4>
            <p class="card-text card-font">${experience.company}</p>
            <p class="card-text" style = "color:#9F9F9F; font-size:12px;">${experience.date}</p>
            <p class="card-text card-font">${experience.description}</p>
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
  dots: true,
    infinite: false,
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
          infinite: false,
          dots: true,
          draggable: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          draggable: true,
          arrows: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          draggable: true,
          arrows: true
        }
      }
    ]
  });
  
});


