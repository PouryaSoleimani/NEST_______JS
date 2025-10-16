import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

export class ProductsGetAllInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          ok: true,
          message: "MESSAGE FORM INTERCEPTOR",
          data: data.data.map((item) => {
            return { id: item.id, title: item.title, price: item.price };
          }),
        };
      }),
    );
  }
}

export class ProductsAvailablesInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          ok: true,
          message: "AVAILABLE PRODUCTS FORM INTERCEPTOR",
          data: data.availables.map((item) => {
            return { title: item.title, status: "AVAILABLE" };
          }),
        };
      }),
    );
  }
}
