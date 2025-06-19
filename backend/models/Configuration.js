/**
 * Configuration Model
 * -------------------
 * Represents a configuration matrix/remark document in MongoDB.
 */
import mongoose from 'mongoose';

/**
 * @typedef {Object} Configuration
 * @property {string} configId - Unique identifier for the configuration
 * @property {string[][]} data - 2D matrix of string values
 * @property {string} [remark] - Optional remark field
 */
const ConfigurationSchema = new mongoose.Schema({
  configId: { type: String, unique: true, required: true, description: 'Unique config identifier' },
  data:    { type: [[String]], required: true, description: '2D matrix data' },
  remark:  { type: String, description: 'Optional remark' }
});

// Export the model
export default mongoose.model('Configuration', ConfigurationSchema);
