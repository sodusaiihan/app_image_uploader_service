"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const database_1 = __importDefault(require("../../../database"));
const signUp = (_, { name, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailQuery = 'SELECT * FROM users WHERE email = $1';
        const emailValue = [email];
        const user = yield database_1.default.query(emailQuery, emailValue);
        const foundUser = user.rows.find((row) => row.email === email);
        if (name.trim() === '') {
            return {
                success: false,
                message: 'Name is required',
            };
        }
        if (foundUser) {
            return {
                success: false,
                message: 'User already exists',
            };
        }
        if (email.trim() === '') {
            return {
                success: false,
                message: 'Email is required',
            };
        }
        if (password.trim() === '') {
            return {
                success: false,
                message: 'Password is required',
            };
        }
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, password];
        yield database_1.default.query(query, values);
        return {
            success: true,
            message: 'User registered successfully',
        };
    }
    catch (error) {
        return {
            success: false,
            message: 'Failed to sign up user',
        };
    }
});
exports.signUp = signUp;
