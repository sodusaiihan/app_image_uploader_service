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
exports.updatePostById = void 0;
const database_1 = __importDefault(require("../../../database"));
const updatePostById = (_, { postid, title, imageurl, description }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateFields = [];
        const values = [];
        let index = 1;
        const postIdQuery = 'SELECT * FROM posts WHERE postid = $1 LIMIT 1';
        const postIdValue = [postid];
        const row = yield database_1.default.query(postIdQuery, postIdValue);
        if (row.rowCount === 0) {
            return {
                success: false,
                message: `There is no post with that ${postid} id`,
            };
        }
        if (!postid) {
            return {
                success: false,
                message: 'Post id is required',
            };
        }
        if (title) {
            updateFields.push(`title = $${index}`);
            values.push(title);
            index++;
        }
        if (imageurl) {
            updateFields.push(`imageurl = $${index}`);
            values.push(imageurl);
            index++;
        }
        if (description) {
            updateFields.push(`description = $${index}`);
            values.push(description);
            index++;
        }
        if (updateFields.length === 0) {
            throw new Error('No fields to update');
        }
        values.push(postid);
        const query = `UPDATE posts SET ${updateFields.join(', ')} WHERE postid = $${index} RETURNING *`;
        yield database_1.default.query(query, values);
        return {
            success: true,
            message: 'Post updated successfully',
        };
    }
    catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'Failed to update post',
        };
    }
});
exports.updatePostById = updatePostById;
