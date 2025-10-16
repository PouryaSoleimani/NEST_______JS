import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

export class TransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log("BEFORE ...");
    console.log(context.getHandler())
    return next.handle().pipe(
      map((data) => {
        console.log("AFTER ...");
        console.log('DATA =>', data)
        const newData = data.availables.map(item => ({ id: item.id, title: item.title, price: item.price }))
        return newData
      }),
    );
  }
}
