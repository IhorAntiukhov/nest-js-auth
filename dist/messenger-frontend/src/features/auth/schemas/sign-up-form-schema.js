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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpFormSchema = void 0;
const zod = __importStar(require("zod"));
const form_error_messages_1 = __importDefault(require("../constants/form-error-messages"));
const zodObject = {
    name: zod
        .string(form_error_messages_1.default.fieldRequired)
        .nonempty(form_error_messages_1.default.fieldRequired),
    email: zod.email({
        error: (issue) => !issue.input
            ? form_error_messages_1.default.fieldRequired
            : form_error_messages_1.default.invalidEmail,
    }),
    password: zod
        .string(form_error_messages_1.default.fieldRequired)
        .nonempty(form_error_messages_1.default.fieldRequired)
        .min(6, form_error_messages_1.default.passwordTooShort),
    confirmPassword: zod
        .string(form_error_messages_1.default.fieldRequired)
        .nonempty(form_error_messages_1.default.fieldRequired),
};
exports.signUpFormSchema = zod
    .object(zodObject)
    .refine((data) => data.password === data.confirmPassword, {
    error: form_error_messages_1.default.passwordsUnmatch,
    path: ["confirmPassword"],
});
//# sourceMappingURL=sign-up-form-schema.js.map