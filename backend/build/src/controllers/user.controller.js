"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usercontroller = void 0;
const tsoa_1 = require("tsoa");
let Usercontroller = class Usercontroller {
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield { name: 'John', surname: 'Doe', age: 10 };
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield [
                {
                    name: 'John',
                    surname: 'Doe',
                    age: 10
                },
                {
                    name: 'Pepe',
                    surname: 'Doe',
                    age: 10
                },
                {
                    name: 'Javier',
                    surname: 'Doe',
                    age: 10
                },
                {
                    name: 'Anibal',
                    surname: 'Loxi',
                    age: 25
                },
            ];
        });
    }
    createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hola me ejecute');
            return yield body;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)('get-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Usercontroller.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.Get)('get-users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Usercontroller.prototype, "getUsers", null);
__decorate([
    (0, tsoa_1.Post)('create-user'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Usercontroller.prototype, "createUser", null);
Usercontroller = __decorate([
    (0, tsoa_1.Route)('user') // localhost:3000/user
], Usercontroller);
exports.Usercontroller = Usercontroller;
