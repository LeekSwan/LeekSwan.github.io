export const renderCard = function(project) {
  return `
          <div class="card bg-transparent">
            <img class="card-img-top" src="${project.image}" alt="Card image cap"">
              <div class="card-body card-color">
                  <h5 class="card-title card-heading">${project.title}</h5>
                  <p class="card-text card-font">${project.description}</p>
                  <p class="card-text" style = "color:#9F9F9F; font-size:12px;">${project.tech}</p>
                  <a href="${project.link}" target="proj${project.id}" class="proj${project.id} btn btn-outline-light">Github</a>
              </div>
          </div>
         `
};

export const loadProjectsIntoDOM = function(project) {
  // Generate the cards using renderCard()
  let cards = $('<div class="slider-container" id="project-card-slider">');
  // let cards = $('<div class="card-deck">')
  for (let i = 0; i < project.length; i++) {
  cards.append(renderCard(project[i]));
  }
  // cards.wrapAll("<div class='slider-container' id='project-card-slider' />")
  //Append to element
  $("#project-slider").append(cards)
};



/**
* Use jQuery to execute the function after the page loads
*/
$(function() {
  loadProjectsIntoDOM(projectData)
  
  // Slider settings
  $('#project-card-slider').slick({
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


