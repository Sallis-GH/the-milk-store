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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const products_1 = __importDefault(require("./db/products"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/api/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, products_1.default)();
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    if (limit && page) {
        const productPage = products.splice((page - 1) * limit, limit);
        productPage.length ? res.json(productPage) : res.status(404).send('Page Not Found');
        return;
    }
    res.json(products);
}));
app.get('/api/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, products_1.default)();
    const filteredProducts = products.filter(product => product.id === req.params.id);
    if (filteredProducts.length < 1) {
        res.status(404).send('Product not found');
        return;
    }
    res.json(filteredProducts);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
