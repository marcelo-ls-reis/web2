module.exports = {  /* exporta a função */
    index
}

function index(req, res) {
    res.render('index.ejs',
        {
            title: 'Rotas', /* <%= title %> exibe a propiedade no html */
            mensagem: 'Projeto rotas', /* <%= mensagem %> exibe a propiedade no html */
            autor: '2º DSM = Web II' /* <%= autor %> exibe a propiedade no html */
        })
}