// jquery para voltar ao topo da página

// Função para subir ao topo
(function ($){
    "use strict";
    var main_wind = $(window);

    // Funcionamento do scroll
    main_wind.on("scroll", function(){
        var consultScroll = $(".inicio");

        // Verifica se a página rolou mais de 10px
        // Se sim, torna o botão visível, se não, torna invisível
        if ($(this).scrollTop() > 10){
            consultScroll.fadeIn();
            consultScroll.removeClass("invisivel");
        } else{
            consultScroll.fadeOut();
        }
        
    });

    // Quando "clicado" voltar ao início
    var goScroll = $(".emojione-monotone--up-arrow");
    goScroll.on("click", function (event){
        event.preventDefault();
        $("html, Body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    })

})(jQuery);