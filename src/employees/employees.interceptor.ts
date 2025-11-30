import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class EmployeesGetAllInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");
    return next.handle().pipe(
      map((data) => {
        return {
          ok: true,
          message: "GET ALL EMPLOYEES FORM INTERCEPTOR",
          data: data.data,
        };
      }),
    );
  }
}

export class EmployeesGetSingleInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          ok: true,
          message: "GET SINGLE EMPLOYEE FROM INTERCEPTOR",
          data: data.data,
        };
      }),
    );
  }
}
