// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cats } from '../../../data';

export default function handler(req, res) {
    // parse id as a number
    const id = +req.query.id;

    // try to find the cat with the id
    const cat = cats.find((cat) => cat.id === id);

    if (!cat) {
        return res.status(404).json({
            error: 'Cat not found',
        });
    }

    res.status(200).json(cat);
}
