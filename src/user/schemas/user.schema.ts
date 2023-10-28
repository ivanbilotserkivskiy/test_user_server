import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  assignedTests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Test' }],
  completedTests: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'CompletedTest' },
  ],
});

export interface User {
  _id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  assignedTests: string[];
  completedTests: string[];
}
