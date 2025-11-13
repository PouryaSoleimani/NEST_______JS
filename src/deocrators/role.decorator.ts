import { SetMetadata } from "@nestjs/common";

export function RolesDecorator(...roles: string[]) {
  console.log("ROLES ==>", roles);
  return SetMetadata("roles", roles);
}
