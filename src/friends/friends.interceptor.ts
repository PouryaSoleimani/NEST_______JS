import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Friend } from "generated/prisma";
import { Observable, map } from "rxjs";

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

@Injectable()
export class FriendsGetSingleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data: { ok: true; message: string; data: Friend }) => {
        return {
          ok: true,
          message: "GET SINGLE FRIEND ROUTE || INTERCEPTOR",
          data: {
            id: data.data.id,
            name: data.data.name,
            age: data.data.age,
            gender: data.data.gender,
            status: "CAME FROM INTERCEPTOR",
          },
        };
      }),
    );
  }
}
