import { Injectable }    from '@angular/core';

@Injectable()
export class Validators {
    static amountValidator(value: any): boolean {
        if (value < 0) {
            return true;
        } else {
            return false;
        }
    }
    static phoneOrEmailValidator(value: any): boolean {
        let regPhone = /^1\d{10}$/;
        let regEmail = /^\S+@\S+\.\S+$/;
        /*control.value = trimstring;*/
        if (!(value.match(regPhone) || value.match(regEmail))) {
            return true;
        } else {
            return false;
        }
    }
    static hasLetterValidator(value: any): boolean {
        let letter = new RegExp('[A-Za-z]');
        if (!letter.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    static hasUpLetterValidator(value: any): boolean {
        let letter = new RegExp('[A-Z]');
        if (letter.test(value)) {
            return false;
        } else {
            return true;
        }
    }
    static hasLowLetterValidator(value: any): boolean {
        let letter = new RegExp('[a-z]');
        if (letter.test(value)) {
            return false;
        } else {
            return true;
        }
    }
    static hasNumberValidator(value: any): boolean {
        let numericRegEx = new RegExp('[0-9]');
        if (!numericRegEx.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    static shortValidator(value: any): boolean {
        if (value.length < 8 || value.length > 64) {
            return true;
        } else {
            return false;
        }
    }
    static illegalCharValidator(value: any): boolean {
        let legalChar = /^[A-Za-z0-9_\d$@!%*#?&]+$/;
        if (!value.match(legalChar)) {
            return true;
        } else {
            return false;
        }
    }

    static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {

    }

    static required(value: string): boolean {
        return !(isBlank(value) || (isString(value) && value === ''));
    }

    static minLength(minLength: number, value: string): boolean {
        const length = typeof value === 'string' ? value.length : 0;
        return length < minLength;
    }

    static maxLength(maxLength: number, value: string): boolean {
        const length = typeof value === 'string' ? value.length : 0;
        return length > maxLength;
    }

    static pattern(pattern: string, value: string): boolean {
        let regex = new RegExp(`^${pattern}$`);
        return regex.test(value);
    }
}

export function isBlank(obj: any): boolean {
    return obj === undefined || obj === null;
}

export function isString(obj: any): obj is string {
    return typeof obj === 'string';
}
