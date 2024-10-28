import Explorer from '../models/explorer_model.js';

export const store = async (req, res) => {
    try {
        console.log(req.body)
        const explorer = await Explorer.create(req.body);
        console.log(explorer)
        return res.status(201).json(explorer);
    } catch {
        return res.status(400).json({ error: 'Falha na criação' });
    }
};

export const index = async (req, res) => {
    try {
        const explorer = await Explorer.find().exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(400).json({ error: 'Falha na busca' });
    }
};

export const show = async (req, res) => {
    try {
        const explorer = await Explorer.findById(req.params.id).exec();
        res.json(explorer);
    } catch (error) {
        res.status(400).send({error: 'Falha na busca detalhada'});
    }
};

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(400).json({ error: 'Falha na substituição' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Explorer.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Falha de deleção' });
    }
};