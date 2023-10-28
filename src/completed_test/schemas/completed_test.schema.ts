import * as mongoose from 'mongoose';

export const CompletedTestSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  dateCompleted: { type: Date, default: Date.now },
});

export interface CompletedTest extends mongoose.Document {
  testId: string;
  userId: string;
  score: number;
  dateCompleted: Date;
}
