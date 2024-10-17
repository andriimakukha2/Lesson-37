"use strict";
// Завдання 1: Функція createPerson
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function createPerson(name, age, isActive) {
    return {
        name,
        age,
        isActive
    };
}
// Завдання 2: Клас Calculator з декоратором LogMethodCalls
// Новий декоратор, сумісний з TypeScript 5.x
function LogMethodCalls(target, context) {
    const originalMethod = target[context.name];
    target[context.name] = function (...args) {
        console.log(`Calling "${context.name}" with arguments: ${args.join(", ")}`);
        return originalMethod.apply(this, args);
    };
}
let Calculator = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _add_decorators;
    let _multiply_decorators;
    return _a = class Calculator {
            add(a, b) {
                return a + b;
            }
            multiply(a, b) {
                return a * b;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [LogMethodCalls];
            _multiply_decorators = [LogMethodCalls];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _multiply_decorators, { kind: "method", name: "multiply", static: false, private: false, access: { has: obj => "multiply" in obj, get: obj => obj.multiply }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
// Завдання 3: Простір імен UserProfile
var UserProfile;
(function (UserProfile) {
    function createProfile(name, email) {
        return {
            id: generateId(),
            name,
            email
        };
    }
    UserProfile.createProfile = createProfile;
    function generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
})(UserProfile || (UserProfile = {}));
// Приклади використання
// Використання функції createPerson
const newPerson = createPerson('Олександр', 31, false);
console.log(newPerson);
// Використання класу Calculator
const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.multiply(3, 4)); // 12
// Використання UserProfile
const profile = UserProfile.createProfile('John Doe', 'john@example.com');
console.log(profile);
