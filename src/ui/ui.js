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
import "./form-elements/rich-checkbox-btn/rich-checkbox-btn.scss";
import "./form-elements/feedback/feedback.scss";
import "./form-elements/icon-list/icon-list.scss";
import "./form-elements/title/title.scss";
import "./form-elements/sub-text-field/sub-text-field.scss";
import "./form-elements/dropdown/dropdown.scss";
import "./form-elements/checkbox-list/checkbox-list.scss";
import './ui.scss';
import {initRangeSliderComponent} from "./form-elements/range-slider/range-slider";
import {initLikeBtn} from "./form-elements/like-btn/like-btn";
import {initCheckboxList} from "./form-elements/checkbox-list/checkbox-list";
import {initRateButton} from "./form-elements/rate-button/rate-button";
import {initMaskedTextField} from "./form-elements/text-field/text-field";

const initUI = () => {
    initRangeSliderComponent();
    initLikeBtn(".like-btn", 23);
    initCheckboxList("#list-unexpanded");
    initCheckboxList("#list-expanded", true);
    initRateButton("#ui-rate-btn", 4);
    initRateButton("#ui-rate-btn2", 5);
    initMaskedTextField("#masked-text")

};

$( function() {
    initUI();
});


