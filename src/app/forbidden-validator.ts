import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const forbidNumberVal:ValidatorFn = (control:AbstractControl):ValidationErrors | null => {
    return control.value === 'bob' ? {forbid:true} : null;
}