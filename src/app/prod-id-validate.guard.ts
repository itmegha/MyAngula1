import { CanActivateFn } from '@angular/router';

export const prodIdValidateGuard: CanActivateFn = (route, state) => {

  const id = +route.paramMap.get('id')!;
  if(isNaN(id)){
    alert("enter valid id");
    return false;
  }
  return true;
};
