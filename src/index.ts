// Завдання 1: Функція createPerson

interface PersonInterface {
    name: string;
    age: number;
    isActive: boolean;
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
    return {
        name,
        age,
        isActive
    };
}

// Завдання 2: Клас Calculator з декоратором LogMethodCalls

function LogMethodCalls(target: any, context: any) {
    const originalMethod = target[context.name];

    target[context.name] = function (...args: any[]) {
        console.log(`Calling "${context.name}" with arguments: ${args.join(", ")}`);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethodCalls
    add(a: number, b: number): number {
        return a + b;
    }

    @LogMethodCalls
    multiply(a: number, b: number): number {
        return a * b;
    }
}

// Завдання 3: Простір імен UserProfile

namespace UserProfile {
    export interface ProfileInterface {
        id: string;
        name: string;
        email: string;
    }

    export function createProfile(name: string, email: string): ProfileInterface {
        return {
            id: generateId(),
            name,
            email
        };
    }

    function generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}


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
