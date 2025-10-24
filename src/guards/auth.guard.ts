import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardGetAll implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    console.log("AUTH GUARD .... ");
    return true;
  }
}

export class AuthGuardGetSingle implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const res = context.switchToHttp().getRequest();
    return true;
  }
}

//* LOCAL AUTH GUARD
@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {} 