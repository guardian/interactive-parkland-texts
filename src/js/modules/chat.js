var scrollTop, height;

module.exports =  {
    init: function() {
        this.bindings();
        this.setValues();
        this.checkChats();
    },

    bindings: function() {
        $(window).scroll(function() {
            this.setValues();
            this.checkChats();
        }.bind(this));

        $(window).resize(function() {
            this.setValues();
        }.bind(this));
    },

    setValues: function() {
        scrollTop = $(window).scrollTop();
        height = $(window).height();
    },

    checkChats: function() {
        $('.texts-chat').each(function(index, value) {
            if (scrollTop > $(value).offset().top - ((height / 2))) {
                if (!$(value).hasClass('has-shown')) {
                    $(value).addClass('has-shown').removeClass('is-next');
                    $('.texts-chat:eq(' + (index + 1) + ')').addClass('is-next');
                }
            }
        }.bind(this));
    }
};