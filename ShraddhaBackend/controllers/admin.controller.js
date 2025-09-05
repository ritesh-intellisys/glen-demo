import AdminData from "../models/AdminData.js";
import DepositRequest from "../models/DepositRequest.js";
import Account from "../models/Account.js";

// =============== GET ALL ADMIN DATA ===============
export const getAdminData = async (req, res) => {
  try {
    const adminData = await AdminData.find({}).sort({ accountType: 1 });
    
    res.status(200).json({
      success: true,
      adminData
    });
  } catch (error) {
    console.error("Get Admin Data Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// =============== UPDATE ADMIN DATA ===============
export const updateAdminData = async (req, res) => {
  try {
    const { accountType, balance, currency, equity, margin } = req.body;
    const adminId = req.user.id;

    if (!accountType) {
      return res.status(400).json({ success: false, message: "Account type is required" });
    }

    // Validate numeric fields
    if (balance !== undefined && (isNaN(balance) || balance < 0)) {
      return res.status(400).json({ success: false, message: "Balance must be a valid positive number" });
    }
    if (equity !== undefined && (isNaN(equity) || equity < 0)) {
      return res.status(400).json({ success: false, message: "Equity must be a valid positive number" });
    }
    if (margin !== undefined && (isNaN(margin) || margin < 0)) {
      return res.status(400).json({ success: false, message: "Margin must be a valid positive number" });
    }

    const updateData = {
      lastUpdatedBy: adminId,
      lastUpdatedAt: new Date()
    };

    if (balance !== undefined) updateData.balance = balance;
    if (currency !== undefined) updateData.currency = currency;
    if (equity !== undefined) updateData.equity = equity;
    if (margin !== undefined) updateData.margin = margin;

    const adminData = await AdminData.findOneAndUpdate(
      { accountType },
      updateData,
      { upsert: true, new: true }
    );

    // Update all accounts of this type
    await Account.updateMany(
      { type: accountType },
      {
        balance: balance !== undefined ? balance : { $set: "balance" },
        currency: currency !== undefined ? currency : { $set: "currency" }
      }
    );

    res.status(200).json({
      success: true,
      message: "Admin data updated successfully",
      adminData
    });
  } catch (error) {
    console.error("Update Admin Data Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// =============== GET ACCOUNT TYPES ===============
export const getAccountTypes = async (req, res) => {
  try {
    // Get unique account types from created accounts
    const accountTypes = await Account.distinct('type');
    
    res.status(200).json({
      success: true,
      accountTypes
    });
  } catch (error) {
    console.error("Get Account Types Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// =============== GET DEPOSIT STATISTICS ===============
export const getDepositStatistics = async (req, res) => {
  try {
    const totalRequests = await DepositRequest.countDocuments();
    const pendingRequests = await DepositRequest.countDocuments({ status: 'pending' });
    const approvedRequests = await DepositRequest.countDocuments({ status: 'approved' });
    const rejectedRequests = await DepositRequest.countDocuments({ status: 'rejected' });

    const totalDeposited = await DepositRequest.aggregate([
      { $match: { status: 'approved' } },
      { $group: { _id: null, total: { $sum: '$verifiedAmount' } } }
    ]);

    res.status(200).json({
      success: true,
      statistics: {
        totalRequests,
        pendingRequests,
        approvedRequests,
        rejectedRequests,
        totalDeposited: totalDeposited[0]?.total || 0
      }
    });
  } catch (error) {
    console.error("Get Deposit Statistics Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
