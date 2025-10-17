import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { userInfo } from "os";
import { map, Observable } from "rxjs";

export class UserGetAllInteceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          message: "USERS GET_ALL INTERCEPTOR",
          data: data.data.map((item) => {
            return {
              id: item.id,
              full_name: item.full_name,
              age: item.age,
              role: item.role,
              email: item.email,
              status: "Last Seen 18 hours Ago",
              isPremium: false,
            };
          }),
        };
      }),
    );
  }
}

export class UserGetSingleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          ok: true,
          message: "USER GET SINGLE INTERCEPTOR",
          data: { id: data.data.id, full_name: data.data.full_name, role: data.data.role },
        };
      }),
    );
  }
}
