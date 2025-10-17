import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class FriendsGetAllInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // BEFORE ROUTE HANDLER
    console.log("Before...");

    // AFTER ROUTE HANDLER
    return next.handle().pipe(
      map((data) => {
        return {
          ok: true,
          message: "ALL FRIENDS LIST FROM INTERCEPTOR",
          data: data.data.map((item) => {
            return {
              id: item.id,
              name: item.name,
              age: item.age,
              gender: item.gender,
            };
          }),
        };
      }),
    );
  }
}

@Injectable()
export class FriendsCreateInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          ok: true,
          message: "201 | USER CREATED | INTERCEPTOR",
          data: {
            id: data.data.id,
            fullname: data.data.name,
          },
        };
      }),
    );
  }
}
