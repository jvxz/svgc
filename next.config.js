/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                hostname: "zrevwgazrkablpkwsbfe.supabase.co",
            },
            {
                hostname: "1iaax4on4v.ufs.sh",
            },
        ],
    },
    experimental: {
        reactCompiler: true,
    },
};

export default config;
