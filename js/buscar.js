document.addEventListener('DOMContentLoaded', function(event){
    coracao = document.querySelectorAll('.coracao')

    estado0 = 0
    estado1 = 0
    estado2 = 0
    estado3 = 0
    estado4 = 0
    estado5 = 0
    estado6 = 0
    estado7 = 0

    coracao[0].addEventListener('click', function(event){
        if (estado0 == 0){
            estado0 = 1
            coracao[0].src = "img/coracao_cheio.png"
        }
        else{
            estado0 = 0
            coracao[0].src = "img/coracao2.png"
        }
    })

    coracao[1].addEventListener('click', function(event){
        if (estado1 == 0){
            estado1 = 1
            coracao[1].src = "img/coracao_cheio.png"
        }
        else{
            estado1 = 0
            coracao[1].src = "img/coracao2.png"
        }
    })

    coracao[2].addEventListener('click', function(event){
        if (estado2 == 0){
            estado2 = 1
            coracao[2].src = "img/coracao_cheio.png"
        }
        else{
            estado2 = 0
            coracao[2].src = "img/coracao2.png"
        }
    })

    coracao[3].addEventListener('click', function(event){
        if (estado3 == 0){
            estado3 = 1
            coracao[3].src = "img/coracao_cheio.png"
        }
        else{
            estado3 = 0
            coracao[3].src = "img/coracao2.png"
        }
    })

    coracao[4].addEventListener('click', function(event){
        if (estado4 == 0){
            estado4 = 1
            coracao[4].src = "img/coracao_cheio.png"
        }
        else{
            estado4 = 0
            coracao[4].src = "img/coracao2.png"
        }
    })

    coracao[5].addEventListener('click', function(event){
        if (estado5 == 0){
            estado5 = 1
            coracao[5].src = "img/coracao_cheio.png"
        }
        else{
            estado5 = 0
            coracao[5].src = "img/coracao2.png"
        }
    })

    coracao[6].addEventListener('click', function(event){
        if (estado6 == 0){
            estado6 = 1
            coracao[6].src = "img/coracao_cheio.png"
        }
        else{
            estado6 = 0
            coracao[6].src = "img/coracao2.png"
        }
    })

    coracao[7].addEventListener('click', function(event){
        if (estado7 == 0){
            estado7 = 1
            coracao[7].src = "img/coracao_cheio.png"
        }
        else{
            estado7 = 0
            coracao[7].src = "img/coracao2.png"
        }
    })
})