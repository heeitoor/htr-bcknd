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
const express_1 = require("express");
const Enums_1 = require("../core/Enums");
const Global_1 = require("../Global");
const mongodb_1 = require("mongodb");
class FrekvensRoute {
}
FrekvensRoute.prefix = "/frekvens";
FrekvensRoute.definition = express_1.Router()
    .get(FrekvensRoute.prefix + "/class/:teacherId", (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send(yield Global_1._mediator.send({
        body: {
            teacherId: req.params.teacherId
        },
        type: Enums_1.Handler.FrekvensGetClassesRequest
    }));
}))
    .get(FrekvensRoute.prefix + "/student", (req, res) => __awaiter(this, void 0, void 0, function* () { }))
    .post(FrekvensRoute.prefix + "/user", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const mongoClient = new mongodb_1.MongoClient("mongodb://heroku_hz7348t9:mc8oaj44u60kadnfssvtmdst3c@ds113749.mlab.com:13749/heroku_hz7348t9", { useNewUrlParser: true });
    const d = yield mongoClient.connect();
    const db = d.db();
    const r = yield db.collection("user").findOne({ userName: req.body.userName });
    if (!r) {
        res.send({
            error: true
        });
        return;
    }
    res.send(r);
}))
    .post(FrekvensRoute.prefix + "/attendance", (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send(yield Global_1._mediator.send({
        body: {
            id: req.body.id,
            date: req.body.date,
            teacherId: req.body.teacherId,
            attendances: req.body.attendances
        },
        type: Enums_1.Handler.FrekvensSaveAttendanceRequest
    }));
}));
exports.FrekvensRoute = FrekvensRoute;
