import Species from '../models/species_model.js';

export const store = async (req, res) => {
    try {
        console.log(req.body)
        const species = await Species.create(req.body);
        console.log(species)
        return res.status(201).json(species);
    } catch {
        return res.status(400).json({ error: 'Falha na criação' });
    }
};

export const index = async (req, res) => {
    try {
        const species = await Species.find().exec();
        return res.status(200).json(species);
    } catch (error) {
        return res.status(400).json({ error: 'Falha na busca' });
    }
};

export const show = async (req, res) => {
    try {
        const species = await Species.findById(req.params.id).exec();
        res.json(species);
    } catch (error) {
        res.status(400).send({error: 'Falha na busca detalhada'});
    }
};

export const update = async (req, res) => {
    try {
        const species = await Species.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(species);
    } catch (error) {
        return res.status(400).json({ error: 'Falha na substituição' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Species.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Falha de deleção' });
    }
};