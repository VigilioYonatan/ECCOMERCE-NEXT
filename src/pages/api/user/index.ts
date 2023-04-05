import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
// import { userController } from "~/services/user/database/user.controller";
// import { ZodValidationMiddleware } from "~/utils/server/helpers";

// const hander = nc({
//     onNoMatch: (_req: NextApiRequest, res: NextApiResponse) => {
//         res.status(404).json({
//             success: false,
//             message: "METHOD NOT PERRMITED",
//         });
//     },
// })
//     .get(userController.index)
//     .post(ZodValidationMiddleware());

// export default hander;
