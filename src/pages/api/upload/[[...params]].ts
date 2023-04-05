import {
    BadRequestException,
    HttpCode,
    Param,
    Post,
    Req,
    Res,
    createHandler,
} from "next-api-decorators";
import { type NextApiRequest, type NextApiResponse } from "next";
import fs from "node:fs";
import crypto from "node:crypto";
import formidable from "formidable";
export const config = {
    api: {
        bodyParser: false,
    },
};
type DirEntities = "product" | "user";
const DIR_ENTITIES: DirEntities[] = ["product", "user"];

class UploadController {
    @Post("/:entity")
    @HttpCode(200)
    async upload(
        @Req() req: NextApiRequest,
        @Res() res: NextApiResponse,
        @Param("entity") entity: DirEntities
    ) {
        let file = null;
        switch (entity) {
            case "product":
                file = parseFiles(req, res, undefined, entity);
                break;
            case "user":
                break;

            default:
                throw new BadRequestException(
                    `Entidad no válida - permitidas ${JSON.stringify(
                        DIR_ENTITIES
                    )}`
                );
        }
        return { message: file };
    }
}

const saveFile = (file: formidable.File, entity: string) => {
    const data = fs.readFileSync(file.filepath);
    const dirUpload = "./uploads";
    if (!fs.existsSync(dirUpload)) {
        fs.mkdirSync(dirUpload);
    }
    const dirEntity = `${dirUpload}/${entity}`;
    if (!fs.existsSync(dirEntity)) {
        fs.mkdirSync(dirEntity);
    }

    const nameUuid = crypto.randomUUID();
    const extension = file.originalFilename?.split(".").at(-1);
    const nameFile = `${nameUuid}.${extension}`;
    fs.writeFileSync(`${dirEntity}/${nameFile}`, data);
    fs.unlinkSync(file.filepath); // elimina
    return nameFile;
};

const parseFiles = (
    req: NextApiRequest,
    res: NextApiResponse,
    extensions = ["jpg", "png", "webp", "jpeg"],
    entity: string
) => {
    const form = new formidable.IncomingForm({ multiples: true });
    form.parse(req, async (err, _fields, files) => {
        if (err) {
            return res.json(err);
        }

        if ((files.file as formidable.File[]).length) {
            return res.json({
                success: false,
                msg: "Solo se permite un archivo",
            });
        }

        const extension = (files.file as formidable.File).originalFilename
            ?.split(".")
            .at(-1);

        if (!extensions.includes(extension as string)) {
            return res.json({
                success: false,
                msg: `Extension no válida - ${JSON.stringify(extension)}`,
            });
        }
        const filePath = saveFile(files.file as formidable.File, entity);
        return filePath;
    });
};

export default createHandler(UploadController);
