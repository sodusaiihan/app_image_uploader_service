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
exports.createPost = void 0;
const database_1 = __importDefault(require("../../../database"));
const createPost = (_, { userid, title, imageurl, description }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = 'INSERT INTO posts (userId, title, imageUrl, description) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [userid, title, imageurl, description];
        yield database_1.default.query(query, values);
        return {
            success: true,
            message: 'Post created successfully',
        };
    }
    catch (error) {
        return {
            success: false,
            message: 'Failed to create post',
        };
    }
});
exports.createPost = createPost;
