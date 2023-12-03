document.addEventListener('DOMContentLoaded', function(event){
    filtros = document.querySelectorAll('.main_items')

    estado0 = 0
    estado1 = 0
    estado2 = 0
    estado3 = 0
    estado4 = 0
    estado5 = 0
    estado6 = 0
    estado7 = 0
    estado8 = 0
    estado9 = 0

    filtros[0].addEventListener('click', function(event){
        if (estado0 == 0){
            estado0 = 1
            filtros[0].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado0 = 0
            filtros[0].style.backgroundColor = 'white'
        }
    })

    filtros[1].addEventListener('click', function(event){
        if (estado1 == 0){
            estado1 = 1
            filtros[1].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado1 = 0
            filtros[1].style.backgroundColor = 'white'
        }
    })

    filtros[2].addEventListener('click', function(event){
        if (estado2 == 0){
            estado2 = 1
            filtros[2].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado2 = 0
            filtros[2].style.backgroundColor = 'white'
        }
    })

    filtros[3].addEventListener('click', function(event){
        if (estado3 == 0){
            estado3 = 1
            filtros[3].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado3 = 0
            filtros[3].style.backgroundColor = 'white'
        }
    })

    filtros[4].addEventListener('click', function(event){
        if (estado4 == 0){
            estado4 = 1
            filtros[4].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado4 = 0
            filtros[4].style.backgroundColor = 'white'
        }
    })

    filtros[5].addEventListener('click', function(event){
        if (estado5 == 0){
            estado5 = 1
            filtros[5].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado5 = 0
            filtros[5].style.backgroundColor = 'white'
        }
    })

    filtros[6].addEventListener('click', function(event){
        if (estado6 == 0){
            estado6 = 1
            filtros[6].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado6 = 0
            filtros[6].style.backgroundColor = 'white'
        }
    })

    filtros[7].addEventListener('click', function(event){
        if (estado7 == 0){
            estado7 = 1
            filtros[7].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado7 = 0
            filtros[7].style.backgroundColor = 'white'
        }
    })

    filtros[8].addEventListener('click', function(event){
        if (estado8 == 0){
            estado8 = 1
            filtros[8].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado8 = 0
            filtros[8].style.backgroundColor = 'white'
        }
    })

    filtros[9].addEventListener('click', function(event){
        if (estado9 == 0){
            estado9 = 1
            filtros[9].style.backgroundColor = '#c8ecd0'
        }
        else{
            estado9 = 0
            filtros[9].style.backgroundColor = 'white'
        }
    })
})