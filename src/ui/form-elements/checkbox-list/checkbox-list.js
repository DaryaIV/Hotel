export const initCheckboxList = (selector, isExpanded = false) => {
    const CheckboxListBtn = $(selector);

    if (isExpanded) {
        CheckboxListBtn.addClass("checkbox-list_expanded");
    }

    CheckboxListBtn.find(".checkbox-list__btn").click(function() {
        if(CheckboxListBtn.hasClass("checkbox-list_expanded") ) {
            CheckboxListBtn.removeClass("checkbox-list_expanded")
        } else {
            CheckboxListBtn.addClass("checkbox-list_expanded");
        }
    });
};