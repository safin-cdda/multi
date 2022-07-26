import requestIp from "request-ip";

export const middleware = (req) => {
    console.log(requestIp.getClientIp(req));
};
