const app = require('../app'); // Nota: Cambié './app' a '../app'
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
