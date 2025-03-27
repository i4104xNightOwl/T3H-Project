export type IRequest<
    Method = string, 
    Path = string, 
    Body = any, 
    Params = any, 
    Query = any, 
    Headers = any, 
    Cookies = any
> = {
    method: Method;
    path: Path;
    body: Body;
    params: Params;
    query: Query;
    headers: Headers;
    cookies: Cookies;
}

export type IResponse<
    Status = number, 
    Body = any, 
    Data = any, 
    Headers = any, 
    Cookies = any
> = {
    status: Status;
    body: Body;
    data: Data;
    headers: Headers;
    cookies: Cookies;
}


export type ErrorResponse = IResponse<number, undefined, {
    errorCode: string;
    message: string;
}, any, any>;

export interface IRestfulHandler<T> {
    /**
     * Xử lý yêu cầu GET
     * @param req - Đối tượng yêu cầu
     * @param res - Đối tượng phản hồi
     */
    get(req: IRequest<"GET", string, any, any, any, any, any>, res: IResponse<number, any, any, any, any | ErrorResponse>): void;
    
    /**
     * Xử lý yêu cầu POST
     * @param req - Đối tượng yêu cầu
     * @param res - Đối tượng phản hồi
     */
    post(req: IRequest<"POST", string, any, T, any, any, any>, res: IResponse<number, T, any, any, any | ErrorResponse>): void;
    
    /**
     * Xử lý yêu cầu PUT
     * @param req - Đối tượng yêu cầu
     * @param res - Đối tượng phản hồi
     */
    put(req: IRequest<"PUT", string, any, T, any, any, any>, res: IResponse<number, T, any, any, any | ErrorResponse>): void;
    
    /**
     * Xử lý yêu cầu DELETE
     * @param req - Đối tượng yêu cầu
     * @param res - Đối tượng phản hồi
     */
    delete(req: IRequest<"DELETE", string, any, any, any, any, any>, res: IResponse<number, any, any, any, any | ErrorResponse>): void;
}

export abstract class Restful {
    /**
     * Đăng ký các hàm xử lý cho API
     * @param handlers - Mảng các hàm xử lý
     */
    abstract registerHandlers(handlers: IRestfulHandler<any>[]): void;
    
    /**
     * Lắng nghe các yêu cầu từ client
     * @param port - Port number
     */
    abstract listen(port: number): void;

    /**
     * Dừng lắng nghe các yêu cầu từ client
     */
    abstract stop(): void;
}

