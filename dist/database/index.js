"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Repository = new pg_1.Pool({
    user: process.env.SERVICE_USERNAME,
    host: process.env.SERVICE_HOST,
    database: process.env.SERVICE_DATABASE,
    password: process.env.SERVICE_PASSWORD,
    port: parseInt(process.env.SERVICE_PORT || '5432'),
});
exports.default = Repository;
