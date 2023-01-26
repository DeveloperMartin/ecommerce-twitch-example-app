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
exports.locationService = void 0;
const models_1 = __importDefault(require("../models"));
class LocationService {
    getLocationList(isActive = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const location = yield models_1.default.location.findMany({
                where: {
                    isActive: isActive
                },
                select: {
                    locationId: true,
                    code: true,
                    description: true
                }
            });
            return location;
        });
    }
    getLocationByCode(locationCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const location = yield models_1.default.location.findUnique({
                where: {
                    code: locationCode
                },
                select: {
                    locationId: true,
                    code: true,
                    description: true
                }
            });
            return location;
        });
    }
    updateLocation(locationCode, location) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedLocation = yield models_1.default.location.update({
                where: {
                    code: locationCode
                },
                data: {
                    code: location.code,
                    description: location.description,
                    isActive: location.isActive
                }
            });
            return updatedLocation;
        });
    }
    createLocation(location) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLocation = yield models_1.default.location.create({
                data: {
                    code: location.code,
                    description: location.description
                },
                select: {
                    locationId: true,
                    code: true,
                    description: true
                }
            });
            return newLocation;
        });
    }
}
exports.locationService = new LocationService();
