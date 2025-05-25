const db = require('./models');

db.sequelize.sync({ alter: true })
    .then(() => console.log('Conectado e sicronizado com o banco!'))
    .catch((err) => console.log('Erro ao conectar e sincronizar com o banco!', err))