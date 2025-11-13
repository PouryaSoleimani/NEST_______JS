import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const role = req.user.role;
    const getHandler = this.reflector.get("roles", context.getHandler());

    console.log("USER ROLE ==>", role);
    console.log("GET ==>", getHandler);
    const isValid = getHandler.some((item: any) => item === role);

    if (isValid == true) {
      return true;
    } else {
      return false;
    }
  }
} 