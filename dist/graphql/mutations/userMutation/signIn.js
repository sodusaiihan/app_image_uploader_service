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
exports.signIn = void 0;
const database_1 = __importDefault(require("../../../database"));
const signIn = (_, { email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const user = yield database_1.default.query(query, values);
        const foundUser = user.rows.find((row) => row.email === email);
        if (!email) {
            return {
                success: false,
                message: 'Email is required',
            };
        }
        if (!password) {
            return {
                success: false,
                message: 'Password is required',
            };
        }
        if (!foundUser) {
            return {
                success: false,
                message: 'User not found',
            };
        }
        const validPassword = password === foundUser.password;
        if (!validPassword) {
            return {
                success: false,
                message: 'Invalid password',
            };
        }
        return {
            success: true,
            message: 'User authenticated successfully',
        };
    }
    catch (error) {
        return {
            success: false,
            message: 'Failed to sign in',
        };
    }
});
exports.signIn = signIn;
