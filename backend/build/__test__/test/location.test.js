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
Object.defineProperty(exports, "__esModule", { value: true });
const client_singleton_1 = require("../database-simulator/client-singleton");
const location_service_1 = require("../../src/services/location.service");
test('Probar creacion de nueva location', () => __awaiter(void 0, void 0, void 0, function* () {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    client_singleton_1.prismaMock.location.create.mockResolvedValue(location);
    const newLocation = {
        code: "Prueba",
        description: "Descripción prueba"
    };
    yield expect(location_service_1.locationService.createLocation(newLocation)).resolves.toEqual(location);
}));
test('Editar un location', () => __awaiter(void 0, void 0, void 0, function* () {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    client_singleton_1.prismaMock.location.update.mockResolvedValue(location);
    const updateLocaton = {
        code: "prueba2",
        description: "Descripción prueba2",
        isActive: true
    };
    yield expect(location_service_1.locationService.updateLocation(location.code, updateLocaton)).resolves.toEqual(location);
}));
test('Seleccionar una location', () => __awaiter(void 0, void 0, void 0, function* () {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    client_singleton_1.prismaMock.location.findUnique.mockResolvedValue(location);
    yield expect(location_service_1.locationService.getLocationByCode(location.code)).resolves.toEqual(location);
}));
test('Listar locaciones', () => __awaiter(void 0, void 0, void 0, function* () {
    const location = {
        locationId: 1,
        code: "prueba",
        description: "Descripción prueba",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    client_singleton_1.prismaMock.location.findMany.mockResolvedValue([location]);
    yield expect(location_service_1.locationService.getLocationList(location.isActive)).resolves.toEqual([location]);
}));
