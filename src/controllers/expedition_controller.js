import Expedition from '../models/expedition_model.js';

export const store = async (req, res) => {
    try {
        console.log(req.body)
        const expedition = await Expedition.create(req.body);
        console.log(expedition)
        return res.status(201).json(expedition);
    } catch {
        return res.status(400).json({ error: 'Falha na criação' });
    }
};