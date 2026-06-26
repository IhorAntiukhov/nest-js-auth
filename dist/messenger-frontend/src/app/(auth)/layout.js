"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthLayout;
const card_1 = require("@/components/ui/card");
const react_1 = __importDefault(require("react"));
function AuthLayout({ children }) {
    return (<div className="flex flex-col flex-1 justify-center items-center">
      <card_1.Card className="w-full max-w-96">{children}</card_1.Card>
    </div>);
}
//# sourceMappingURL=layout.js.map