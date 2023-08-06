import bcrypt from 'bcryptjs';
import { AccountModel } from "../models/AccountModel.js";

export const getAccount = async (req, res) => {
    try {
        const accounts = await AccountModel.find();
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const register = async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const existingAccount = await AccountModel.findOne({ email });
        if (existingAccount) {
            return res.status(400).json({ message: 'Email already exists in the system' });
        }
    
        // Mã hóa mật khẩu trước khi lưu vào CSDL
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const account = new AccountModel({ email, password: hashedPassword, role: "user" });
        await account.save();
  
        res.status(201).json({ message: 'Account has been successfully registered' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while registering an account' });
    }
}
  
export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const account = await AccountModel.findOne({ email });
        if (!account) {
            return res.status(404).json({ message: 'Account not found with this email' });
        }

        const isPasswordMatch = await bcrypt.compare(password, account.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
  
        res.status(200).json({ message: 'Login successful', data: account });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while logging in' });
    }
}