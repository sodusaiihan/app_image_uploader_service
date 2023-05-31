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
exports.getUserById = void 0;
const database_1 = __importDefault(require("../../../database"));
const getUserById = (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id) {
            throw new Error('User id is required');
        }
        const query = 'SELECT * FROM users WHERE id = $1';
        const { rows } = yield database_1.default.query(query, [id]);
        return rows[0];
    }
    catch (error) {
        throw new Error('User not found');
    }
});
exports.getUserById = getUserById;
