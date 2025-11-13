import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const role = req.user.role;
    console.log("USER ==>", role);
    if (role == "ADMIN") {
      return true;
    } else {
      return false;
    }
  }
} 