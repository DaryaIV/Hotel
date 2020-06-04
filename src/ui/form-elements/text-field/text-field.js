require('inputmask/dist/jquery.inputmask.min');

export const initMaskedTextField = (selector) => {
    $ (document).ready(function( ){
        $ (selector).inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", placeholder: "ДД.ММ.ГГГГ"});
      });
    }