
const controllerFatec = require('../controllers/fatecControllers')

app.get('/fatec/fatec', controllerFatec.fatec)

app.get('/noturno/noturno', controllerFatec.noturno)

app.get('/ads/ads', controllerFatec.ads)