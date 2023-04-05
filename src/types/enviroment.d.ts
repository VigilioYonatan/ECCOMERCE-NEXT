namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        GITHUB_CLIENT_ID: string;
        GITHUB_CLIENT_SECRET: string;
        NEXTAUTH_SECRET: string;
        JWT_KEY: string;
    }
}
