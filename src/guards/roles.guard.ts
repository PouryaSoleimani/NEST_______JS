import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest();
    console.log("USER ==>", user.user);
    return true;
  }
} 