const app = require('../app');
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
