"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//const MongoClient = require("mongodb").MongoClient;
const mongodb_1 = require("mongodb");
//FRKVNSMNG
class FrekvensBusiness {
    getClassesByTeacherId(teacherId) {
        return __awaiter(this, void 0, void 0, function* () {
            const mongoClient = new mongodb_1.MongoClient("mongodb://heroku_hz7348t9:mc8oaj44u60kadnfssvtmdst3c@ds113749.mlab.com:13749/heroku_hz7348t9", { useNewUrlParser: true });
            const d = yield mongoClient.connect();
            const db = d.db();
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                resolve({
                    classes: yield db
                        .collection("class")
                        .find()
                        .toArray()
                });
            }));
        });
    }
    saveAttendance(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const mongoClient = new mongodb_1.MongoClient("mongodb://heroku_hz7348t9:mc8oaj44u60kadnfssvtmdst3c@ds113749.mlab.com:13749/heroku_hz7348t9", { useNewUrlParser: true });
            const d = yield mongoClient.connect();
            const db = d.db();
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const r = yield db.collection("attendance").insertOne(request);
                console.log(r);
                resolve({
                    status: true
                });
            }));
        });
    }
}
exports.FrekvensBusiness = FrekvensBusiness;
