import { createParamDecorator } from "@nestjs/common";
export const GetUser=createParamDecorator((data,ctx)=>{
const req=ctx.switchToHTTP().getRequest();
return req.user;
})