import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: String,
      options: [String],
      correctOptionIndex: Number,
    },
  ],
});

export interface Test extends mongoose.Document {
  title: string;
  questions: {
    question: string;
    options: string[];
    correctOptionIndex: number;
  }[];
}
