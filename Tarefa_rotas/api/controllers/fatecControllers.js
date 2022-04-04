module.exports = { 
    fatec,
    noturno,
    ads
}

function fatec(req, res) {
    res.render('fatec/fatec.ejs',
        {
            title: 'Rotas', 
            mensagem: 'Projeto rotas', 
            autor: '2º DSM = Web II'
        })
}

function noturno(req, res) {
    res.render('noturno/noturno.ejs',
        {
            title: 'Rotas', 
            mensagem: 'Projeto rotas', 
            autor: '2º DSM = Web II'
        })
}

function ads(req, res) {
    res.render('ads/ads.ejs',
        {
            title: 'Rotas', 
            mensagem: 'Projeto rotas', 
            autor: '2º DSM = Web II'
        })
}
