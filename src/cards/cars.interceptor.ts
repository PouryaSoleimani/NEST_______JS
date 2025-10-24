import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class CarsGetAllInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("🟧 CARS INTERCEPTOR");
    return next.handle().pipe(
      map((data: any) => {
        return {
          ok: true,
          message: "GET ALL CARS == INTERCEPTOR ==",
          data: data.data,
        };
      }),
    );
  }
}
