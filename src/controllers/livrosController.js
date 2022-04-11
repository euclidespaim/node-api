import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err, livro) => {
            if (err) {
                res.status(500).send({message: `Erro ao cadastrar livro: ${err}`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }
}

export default LivroController;