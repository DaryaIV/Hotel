import "../components/layout/layout.scss";
import "./form-elements/buttons/button.scss";
import "./form-elements/text-field/text-field.scss";
import "./form-elements/radio-button/radio-button.scss";
import "./form-elements/checkbox/checkbox.scss";
import "./form-elements/toggle/toggle.scss";
import "./form-elements/like-btn/like-btn.scss";
import "./form-elements/bullet-list/bullet-list.scss";
import "./form-elements/rate-button/rate-button.scss";
import "./form-elements/range-slider/range-slider.scss";
import './ui.scss';
import {initRangeSliderComponent} from "./form-elements/range-slider/range-slider";
import {initLikeBtn} from "./form-elements/like-btn/like-btn";

const initUI = () => {
    initRangeSliderComponent();
    initLikeBtn(".like-btn", 23);
};

$( function() {
    initUI();
});


