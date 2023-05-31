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
exports.getPostByPostId = void 0;
const database_1 = __importDefault(require("../../../database"));
const getPostByPostId = (_, { postid }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = 'SELECT * FROM posts WHERE postid = $1 LIMIT 1';
        const { rows } = yield database_1.default.query(query, [postid]);
        if (!postid) {
            throw new Error('Post id is required');
        }
        if (rows.length === 0) {
            throw new Error('Post not found');
        }
        return rows[0];
    }
    catch (error) {
        throw new Error('Post not found');
    }
});
exports.getPostByPostId = getPostByPostId;
