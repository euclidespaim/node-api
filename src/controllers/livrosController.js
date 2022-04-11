import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Livro ${id} não encontrado!`});
            } else {
                res.status(200).send({message: `Livro ${id} encontrado!`, livro: livros});
            }
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

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err, livro) => {
            if (!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso!'});
            }else{
                res.status(500).send({message: `Erro ao atualizar livro: ${err}`});
            }
        })
    }

    static removerLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndRemove(id, (err, livro) => {
            if (!err) {
                res.status(200).send({message: `Livro ${id} removido com sucesso!`});
            }else{
                res.status(500).send({message: `Erro ao remover livro: ${err}`});
            }
        })
    }

}

export default LivroController;