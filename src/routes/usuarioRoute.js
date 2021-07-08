const UsuarioController = require('../controllers/usuarioController'); // ... Importa o controlador de usuario.

module.exports = (app) => { // ... Exporta função com base na rota utilizada.
	app.post   ( '/usuario' ,  UsuarioController.post   );

	app.put    ( '/usuario' ,   UsuarioController.put   );
	
	app.delete ( '/usuario' ,  UsuarioController.delete );
	
	app.get    ( '/usuario' ,   UsuarioController.get   );
	
	app.get    ( '/usuarioExpecifico' , UsuarioController.getById );
};