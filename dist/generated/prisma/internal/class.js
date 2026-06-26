"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.8.0",
    "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id           String   @id @default(uuid())\n  createdAt    DateTime @default(now()) @map(\"created_at\")\n  name         String\n  email        String   @unique()\n  passwordHash String\n\n  messages Message[]\n\n  @@map(\"users\")\n}\n\nmodel Message {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  content   String\n  userId    String   @map(\"user_id\")\n  parentId  Int?     @map(\"parent_id\")\n\n  user     User      @relation(fields: [userId], references: [id])\n  children Message[] @relation(\"MessageChildren\")\n  parent   Message?  @relation(fields: [parentId], references: [id], name: \"MessageChildren\")\n\n  @@map(\"messages\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"messages\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"MessageToUser\"}],\"dbName\":\"users\"},\"Message\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"parentId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"parent_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"MessageToUser\"},{\"name\":\"children\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"MessageChildren\"},{\"name\":\"parent\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"MessageChildren\"}],\"dbName\":\"messages\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"user\",\"children\",\"parent\",\"_count\",\"messages\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Message.findUnique\",\"Message.findUniqueOrThrow\",\"Message.findFirst\",\"Message.findFirstOrThrow\",\"Message.findMany\",\"Message.createOne\",\"Message.createMany\",\"Message.createManyAndReturn\",\"Message.updateOne\",\"Message.updateMany\",\"Message.updateManyAndReturn\",\"Message.upsertOne\",\"Message.deleteOne\",\"Message.deleteMany\",\"_avg\",\"_sum\",\"Message.groupBy\",\"Message.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"createdAt\",\"content\",\"userId\",\"parentId\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"name\",\"email\",\"passwordHash\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "iwEVIAkHAABNACAwAABKADAxAAAMABAyAABKADAzAQAAAAE0QABMACFDAQBLACFEAQAAAAFFAQBLACEBAAAAAQAgCwMAAFAAIAQAAE0AIAUAAFEAIDAAAE4AMDEAAAMAEDIAAE4AMDMCAFIAITRAAEwAITUBAEsAITYBAEsAITcCAE8AIQQDAAB-ACAEAAB9ACAFAAB_ACA3AABTACALAwAAUAAgBAAATQAgBQAAUQAgMAAATgAwMQAAAwAQMgAATgAwMwIAAAABNEAATAAhNQEASwAhNgEASwAhNwIATwAhAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACABAAAAAwAgAQAAAAMAIAEAAAADACABAAAAAQAgCQcAAE0AIDAAAEoAMDEAAAwAEDIAAEoAMDMBAEsAITRAAEwAIUMBAEsAIUQBAEsAIUUBAEsAIQEHAAB9ACADAAAADAAgAQAADQAwAgAAAQAgAwAAAAwAIAEAAA0AMAIAAAEAIAMAAAAMACABAAANADACAAABACAGBwAAfAAgMwEAAAABNEAAAAABQwEAAAABRAEAAAABRQEAAAABAQ0AABEAIAUzAQAAAAE0QAAAAAFDAQAAAAFEAQAAAAFFAQAAAAEBDQAAEwAwAQ0AABMAMAYHAAByACAzAQBaACE0QABZACFDAQBaACFEAQBaACFFAQBaACECAAAAAQAgDQAAFgAgBTMBAFoAITRAAFkAIUMBAFoAIUQBAFoAIUUBAFoAIQIAAAAMACANAAAYACACAAAADAAgDQAAGAAgAwAAAAEAIBQAABEAIBUAABYAIAEAAAABACABAAAADAAgAwYAAG8AIBoAAHEAIBsAAHAAIAgwAABJADAxAAAfABAyAABJADAzAQA9ACE0QAA8ACFDAQA9ACFEAQA9ACFFAQA9ACEDAAAADAAgAQAAHgAwGQAAHwAgAwAAAAwAIAEAAA0AMAIAAAEAIAEAAAAFACABAAAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgCAMAAGwAIAQAAG0AIAUAAG4AIDMCAAAAATRAAAAAATUBAAAAATYBAAAAATcCAAAAAQENAAAnACAFMwIAAAABNEAAAAABNQEAAAABNgEAAAABNwIAAAABAQ0AACkAMAENAAApADABAAAAAwAgCAMAAF0AIAQAAF4AIAUAAF8AIDMCAFsAITRAAFkAITUBAFoAITYBAFoAITcCAFwAIQIAAAAFACANAAAtACAFMwIAWwAhNEAAWQAhNQEAWgAhNgEAWgAhNwIAXAAhAgAAAAMAIA0AAC8AIAIAAAADACANAAAvACABAAAAAwAgAwAAAAUAIBQAACcAIBUAAC0AIAEAAAAFACABAAAAAwAgBgYAAFQAIBoAAFcAIBsAAFYAICwAAFUAIC0AAFgAIDcAAFMAIAgwAAA6ADAxAAA3ABAyAAA6ADAzAgA7ACE0QAA8ACE1AQA9ACE2AQA9ACE3AgA-ACEDAAAAAwAgAQAANgAwGQAANwAgAwAAAAMAIAEAAAQAMAIAAAUAIAgwAAA6ADAxAAA3ABAyAAA6ADAzAgA7ACE0QAA8ACE1AQA9ACE2AQA9ACE3AgA-ACENBgAAQwAgGgAAQwAgGwAAQwAgLAAASAAgLQAAQwAgOAIAAAABOQIAAAAEOgIAAAAEOwIAAAABPAIAAAABPQIAAAABPgIAAAABPwIARwAhCwYAAEMAIBoAAEYAIBsAAEYAIDhAAAAAATlAAAAABDpAAAAABDtAAAAAATxAAAAAAT1AAAAAAT5AAAAAAT9AAEUAIQ4GAABDACAaAABEACAbAABEACA4AQAAAAE5AQAAAAQ6AQAAAAQ7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQBCACFAAQAAAAFBAQAAAAFCAQAAAAENBgAAQAAgGgAAQAAgGwAAQAAgLAAAQQAgLQAAQAAgOAIAAAABOQIAAAAFOgIAAAAFOwIAAAABPAIAAAABPQIAAAABPgIAAAABPwIAPwAhDQYAAEAAIBoAAEAAIBsAAEAAICwAAEEAIC0AAEAAIDgCAAAAATkCAAAABToCAAAABTsCAAAAATwCAAAAAT0CAAAAAT4CAAAAAT8CAD8AIQg4AgAAAAE5AgAAAAU6AgAAAAU7AgAAAAE8AgAAAAE9AgAAAAE-AgAAAAE_AgBAACEIOAgAAAABOQgAAAAFOggAAAAFOwgAAAABPAgAAAABPQgAAAABPggAAAABPwgAQQAhDgYAAEMAIBoAAEQAIBsAAEQAIDgBAAAAATkBAAAABDoBAAAABDsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAEIAIUABAAAAAUEBAAAAAUIBAAAAAQg4AgAAAAE5AgAAAAQ6AgAAAAQ7AgAAAAE8AgAAAAE9AgAAAAE-AgAAAAE_AgBDACELOAEAAAABOQEAAAAEOgEAAAAEOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEARAAhQAEAAAABQQEAAAABQgEAAAABCwYAAEMAIBoAAEYAIBsAAEYAIDhAAAAAATlAAAAABDpAAAAABDtAAAAAATxAAAAAAT1AAAAAAT5AAAAAAT9AAEUAIQg4QAAAAAE5QAAAAAQ6QAAAAAQ7QAAAAAE8QAAAAAE9QAAAAAE-QAAAAAE_QABGACENBgAAQwAgGgAAQwAgGwAAQwAgLAAASAAgLQAAQwAgOAIAAAABOQIAAAAEOgIAAAAEOwIAAAABPAIAAAABPQIAAAABPgIAAAABPwIARwAhCDgIAAAAATkIAAAABDoIAAAABDsIAAAAATwIAAAAAT0IAAAAAT4IAAAAAT8IAEgAIQgwAABJADAxAAAfABAyAABJADAzAQA9ACE0QAA8ACFDAQA9ACFEAQA9ACFFAQA9ACEJBwAATQAgMAAASgAwMQAADAAQMgAASgAwMwEASwAhNEAATAAhQwEASwAhRAEASwAhRQEASwAhCzgBAAAAATkBAAAABDoBAAAABDsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BAEQAIUABAAAAAUEBAAAAAUIBAAAAAQg4QAAAAAE5QAAAAAQ6QAAAAAQ7QAAAAAE8QAAAAAE9QAAAAAE-QAAAAAE_QABGACEDRgAAAwAgRwAAAwAgSAAAAwAgCwMAAFAAIAQAAE0AIAUAAFEAIDAAAE4AMDEAAAMAEDIAAE4AMDMCAFIAITRAAEwAITUBAEsAITYBAEsAITcCAE8AIQg4AgAAAAE5AgAAAAU6AgAAAAU7AgAAAAE8AgAAAAE9AgAAAAE-AgAAAAE_AgBAACELBwAATQAgMAAASgAwMQAADAAQMgAASgAwMwEASwAhNEAATAAhQwEASwAhRAEASwAhRQEASwAhSQAADAAgSgAADAAgDQMAAFAAIAQAAE0AIAUAAFEAIDAAAE4AMDEAAAMAEDIAAE4AMDMCAFIAITRAAEwAITUBAEsAITYBAEsAITcCAE8AIUkAAAMAIEoAAAMAIAg4AgAAAAE5AgAAAAQ6AgAAAAQ7AgAAAAE8AgAAAAE9AgAAAAE-AgAAAAE_AgBDACEAAAAAAAABTkAAAAABAU4BAAAAAQVOAgAAAAFUAgAAAAFVAgAAAAFWAgAAAAFXAgAAAAEFTgIAAAABVAIAAAABVQIAAAABVgIAAAABVwIAAAABBRQAAIMBACAVAACKAQAgSwAAhAEAIEwAAIkBACBRAAABACALFAAAYAAwFQAAZQAwSwAAYQAwTAAAYgAwTQAAYwAgTgAAZAAwTwAAZAAwUAAAZAAwUQAAZAAwUgAAZgAwUwAAZwAwBxQAAIEBACAVAACHAQAgSwAAggEAIEwAAIYBACBPAAADACBQAAADACBRAAAFACAGAwAAbAAgBAAAbQAgMwIAAAABNEAAAAABNQEAAAABNgEAAAABAgAAAAUAIBQAAGsAIAMAAAAFACAUAABrACAVAABqACABDQAAhQEAMAsDAABQACAEAABNACAFAABRACAwAABOADAxAAADABAyAABOADAzAgAAAAE0QABMACE1AQBLACE2AQBLACE3AgBPACECAAAABQAgDQAAagAgAgAAAGgAIA0AAGkAIAgwAABnADAxAABoABAyAABnADAzAgBSACE0QABMACE1AQBLACE2AQBLACE3AgBPACEIMAAAZwAwMQAAaAAQMgAAZwAwMwIAUgAhNEAATAAhNQEASwAhNgEASwAhNwIATwAhBDMCAFsAITRAAFkAITUBAFoAITYBAFoAIQYDAABdACAEAABeACAzAgBbACE0QABZACE1AQBaACE2AQBaACEGAwAAbAAgBAAAbQAgMwIAAAABNEAAAAABNQEAAAABNgEAAAABAxQAAIMBACBLAACEAQAgUQAAAQAgBBQAAGAAMEsAAGEAME0AAGMAIFEAAGQAMAMUAACBAQAgSwAAggEAIFEAAAUAIAAAAAsUAABzADAVAAB3ADBLAAB0ADBMAAB1ADBNAAB2ACBOAABkADBPAABkADBQAABkADBRAABkADBSAAB4ADBTAABnADAGBAAAbQAgBQAAbgAgMwIAAAABNEAAAAABNQEAAAABNwIAAAABAgAAAAUAIBQAAHsAIAMAAAAFACAUAAB7ACAVAAB6ACABDQAAgAEAMAIAAAAFACANAAB6ACACAAAAaAAgDQAAeQAgBDMCAFsAITRAAFkAITUBAFoAITcCAFwAIQYEAABeACAFAABfACAzAgBbACE0QABZACE1AQBaACE3AgBcACEGBAAAbQAgBQAAbgAgMwIAAAABNEAAAAABNQEAAAABNwIAAAABBBQAAHMAMEsAAHQAME0AAHYAIFEAAGQAMAABBwAAfQAgBAMAAH4AIAQAAH0AIAUAAH8AIDcAAFMAIAQzAgAAAAE0QAAAAAE1AQAAAAE3AgAAAAEHAwAAbAAgBQAAbgAgMwIAAAABNEAAAAABNQEAAAABNgEAAAABNwIAAAABAgAAAAUAIBQAAIEBACAFMwEAAAABNEAAAAABQwEAAAABRAEAAAABRQEAAAABAgAAAAEAIBQAAIMBACAEMwIAAAABNEAAAAABNQEAAAABNgEAAAABAwAAAAMAIBQAAIEBACAVAACIAQAgCQAAAAMAIAMAAF0AIAUAAF8AIA0AAIgBACAzAgBbACE0QABZACE1AQBaACE2AQBaACE3AgBcACEHAwAAXQAgBQAAXwAgMwIAWwAhNEAAWQAhNQEAWgAhNgEAWgAhNwIAXAAhAwAAAAwAIBQAAIMBACAVAACLAQAgBwAAAAwAIA0AAIsBACAzAQBaACE0QABZACFDAQBaACFEAQBaACFFAQBaACEFMwEAWgAhNEAAWQAhQwEAWgAhRAEAWgAhRQEAWgAhAgYABAcGAgQDAAEEBwIFCAIGAAMBBAkAAQcKAAAAAAMGAAkaAAobAAsAAAADBgAJGgAKGwALAgMAAQUsAgIDAAEFMgIFBgAQGgATGwAULAARLQASAAAAAAAFBgAQGgATGwAULAARLQASCAIBCQsBCg4BCw8BDBABDhIBDxQFEBUGERcBEhkFExoHFhsBFxwBGB0FHCAIHSEMHiICHyMCICQCISUCIiYCIygCJCoFJSsNJi4CJzAFKDEOKTMCKjQCKzUFLjgPLzkV"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map