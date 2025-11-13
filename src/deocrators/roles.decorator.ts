import { SetMetadata } from "@nestjs/common";

export function RolesDecorator(...roles: string[]) {
  console.log("ROLES ==>", roles);
  // CREATING A METADATA NAMED 'roles'
  return SetMetadata("roles", roles);
}
 