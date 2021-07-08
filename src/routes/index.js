const UsuarioRoute = require('./usuarioRoute'); // Faz o import das rotas referente a usuarios.

module.exports = (app) => {
	UsuarioRoute(app);
}
