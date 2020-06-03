require('jquery-bar-rating/dist/jquery.barrating.min');
// require('jquery-bar-rating/jquery.barrating');


export const initRateButton = (selector, rating) => {
    $(selector).barrating({
      theme: 'css-stars',
      initialRating: rating,
    });
 };
