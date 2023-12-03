document.addEventListener('DOMContentLoaded', function(event){
    operador = document.querySelectorAll('.operador')
    h6 = document.querySelectorAll('h6')
    quantidade = h6[1]

    operador[0].addEventListener('click', function(event){
        n = parseInt(quantidade.innerHTML)
        n += 1

        quantidade.innerHTML = n
    })

    operador[1].addEventListener('click', function(event){
        n = parseInt(quantidade.innerHTML)

        if (n > 0){
            n -= 1
            quantidade.innerHTML = n
        }
    })
})