export const renderCard = function(project) {
  return `
      <div class="card">
        <img class="card-img-top img-fluid" src="http://placehold.it/800x600/f44242/fff" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">${project.id}</h4>
            <p class="card-text">${project.title}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
         `    
};

export const loadProjectsIntoDOM = function(project) {
  // Generate the cards using renderCard()
  let cards1 = $('<div class="project-card-slider slider-container"></div>');
  for (let i = 0; i < project.length; i++) {
  cards1.append(renderCard(project[i]));
  }

  //Append to element
  $("#project-slider").append(cards1)

};



/**
* Use jQuery to execute the function after the page loads
*/
$(function() {
  loadProjectsIntoDOM(projectData);

  // Slider settings 
  $('.project-card-slider').slick({
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


