// OBS: Aqui foi criado funções com os nomes dos metodos mas eles podem ser alterados para o que cada função faz.
// Está sendo usado os status 200 e 201 que significam sucesso (200) e sucesso sem retorno (201).

exports.post = (req, res, next) => { // .......... Exporta a função 'post', normalmente responsavel por adicional algo.
	let nome = req.params.nome; // ........... Recebe os dados a serem salvos;

	res.status(201).send('Rota POST!'); // ... Retorna o sucesso do salvamento;
};

exports.put = (req, res, next) => { // ... Exporta a função 'put', normalmente responsavel por alterar algo.
	let usuario = {
		id: req.params.id,
		nome: req.params.nome
	}; // ............................ Recebe os dados a serem alterados.

	res.status(201).send(`Rota PUT com ID e Nome para ser alterado! --> ID:${usuario.id}, Nome: ${usuario.nome}`); /* ... Retorna o sucesso do salvamento. */
};

exports.delete = (req, res, next) => { // ........................... Exporta a função 'delete', normalmente responsavel por deletar algo.
	let id = req.params.id; // .................................. Recebe o id do dado a ser deletado.

	res.status(200).send(`Rota DELETE com ID! --> ${id}`); // ... Retona o secesso.
};

exports.get = (req, res, next) => { // .......... Exporta a função 'get', normalmente responsavel por solicitar algo.
	res.status(200).send('Rota GET!'); // ... Retorna o sucesso e os dados solicitados.
};

exports.getById = (req, res, next) => { // ................... Exporta a função 'get' com aceitação de parametros , normalmente responsavel por solicitar algo passando algum parametro.
	let id = req.params.id; // ........................... Recebe o id para buscar um dado expecifico.

	res.status(200).send(`Rota GET com ID! ${id}`); // ... Retorna o sucesso e o dado solicitado com base no id.
};
