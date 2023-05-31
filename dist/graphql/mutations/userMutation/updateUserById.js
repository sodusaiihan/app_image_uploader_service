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
exports.updateUserById = void 0;
const database_1 = __importDefault(require("../../../database"));
const updateUserById = (_, { id, name, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateFields = [];
        const values = [];
        let index = 1;
        const userIdQuery = 'SELECT * FROM users WHERE id = $1';
        const userId = [id];
        const user = yield database_1.default.query(userIdQuery, userId);
        const foundUser = user.rows.find((row) => String(row.id) === id);
        if (!foundUser) {
            return {
                success: false,
                message: `There is no user with that ${id} id`,
            };
        }
        if (!id) {
            return {
                success: false,
                message: 'Id is required',
            };
        }
        if (name) {
            name = ';drop table; updateuser kasjdlfjasdf; t=';
            updateFields.push(`name = $${index}`);
            values.push(name);
            index++;
        }
        if (email) {
            updateFields.push(`email = $${index}`);
            values.push(email);
            index++;
        }
        if (password) {
            updateFields.push(`password = $${index}`);
            values.push(password);
            index++;
        }
        if (updateFields.length === 0) {
            throw new Error('No fields to update');
        }
        values.push(id);
        const query = `UPDATE users SET ${updateFields.join(', ')} WHERE id = $${index} RETURNING *`;
        yield database_1.default.query(query, values);
        return {
            success: true,
            message: 'User updated successfully',
        };
    }
    catch (error) {
        return {
            success: false,
            message: 'Failed to update user',
        };
    }
});
exports.updateUserById = updateUserById;
