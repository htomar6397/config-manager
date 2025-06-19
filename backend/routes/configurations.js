// routes/configuration.js
import express from 'express';
import Configuration from '../models/Configuration.js';

const router = express.Router();

/**
 * GET by configId
 */
router.get('/:id', async (req, res) => {
  try {
    const config = await Configuration.findOne({ configId: req.params.id }).lean({ virtuals: true });
    if (!config) return res.status(404).json({ error: 'Configuration not found' });
   
    res.status(200).json(config.data);
  } catch (error) {
    console.error(`GET /api/configurations/${req.params.id} error:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * PUT by configId
 */
router.put('/:id', async (req, res) => {
  try {
    const { remark } = req.body;
    if (typeof remark !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing remark' });
    }

    const updated = await Configuration.findOneAndUpdate(
      { configId: req.params.id },
      { remark },
      { new: true, lean: true }
    );

    if (!updated) return res.status(404).json({ error: 'Configuration not found' });

    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(`PUT /api/configurations/${req.params.id} error:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
