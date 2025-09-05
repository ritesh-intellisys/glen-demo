import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    // User reference
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
    // Account details
    type: { type: String, required: true }, // e.g., "Standard", "Platinum", "Premium", "Demo"
    status: { type: String, required: true, enum: ['Live', 'Demo', 'LIVE', 'DEMO'] },
    accountNumber: { type: String, unique: true },
    
    // Financial data
    balance: { type: Number, default: 0.00 },
    currency: { type: String, default: 'USD' },
    equity: { type: Number, default: 0.00 },
    margin: { type: Number, default: 0.00 },
    leverage: { type: String, default: '1:500' },
    
    // Account settings
    initialDeposit: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    
    // Metadata
    createdAt: { type: Date, default: Date.now },
    lastActivity: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

// Generate unique account number
accountSchema.pre('save', async function(next) {
  if (this.isNew) {
    const prefix = (this.status === 'Demo' || this.status === 'DEMO') ? 'DEMO' : 'LIVE';
    const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    this.accountNumber = `${prefix}${randomNum}`;
  }
  next();
});

const Account = mongoose.model("Account", accountSchema);
export default Account;
