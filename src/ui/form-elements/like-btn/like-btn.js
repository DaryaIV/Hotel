export const initLikeBtn = (selector, likeCount) => {
    const likeBtn = $(selector);
    $(".like-btn__count").text(likeCount);

    likeBtn.click(function() {
        if($(this).hasClass("like-btn_liked") ) {
            $(this).removeClass("like-btn_liked")
            likeCount -= 1;
            $(".like-btn__icon").text("favorite_border");
        }
        else {
            likeCount += 1;
            $(this).addClass("like-btn_liked");
            $(".like-btn__icon").text("favorite");
        }
        $(".like-btn__count").text(likeCount);

    });
};