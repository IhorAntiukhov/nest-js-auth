'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FormInput;
const react_1 = __importDefault(require("react"));
const field_1 = require("./field");
const input_1 = require("./input");
const react_hook_form_1 = require("react-hook-form");
function FormInput({ name, control, placeholder, description, type, errors, }) {
    const isError = errors[name]?.message;
    return (<field_1.Field data-invalid={isError}>
      <react_hook_form_1.Controller name={name} control={control} render={({ field }) => (<input_1.Input id={name} type={type} placeholder={placeholder} {...field} onInput={field.onChange}/>)}/>

      {isError ? (<field_1.FieldError>{errors[name]?.message?.toString()}</field_1.FieldError>) : (<field_1.FieldDescription>{description}</field_1.FieldDescription>)}
    </field_1.Field>);
}
//# sourceMappingURL=form-input.js.map