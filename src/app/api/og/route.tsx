import { ImageResponse } from "@vercel/og";

import { siteConfig } from "@/config";

export const runtime = "edge";

const interRegular = fetch(new URL("../../../../public/fonts/Inter-Regular.ttf", import.meta.url)).then((res) =>
  res.arrayBuffer(),
);

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular;

    const url = new URL(req.url);
    const values = Object.fromEntries(url.searchParams);
    const heading = values.heading.length > 140 ? `${values.heading.substring(0, 140)}...` : values.heading;

    const logo = siteConfig.logoWhite;

    const logoUrl = logo.startsWith("/") ? siteConfig.siteUrl + logo : logo;

    // Dynamic font size calculation
    const getFontSize = (length: number) => {
      if (length < 40) return "text-[80px]";
      if (length < 80) return "text-[60px]";
      if (length < 120) return "text-[45px]";
      return "text-[35px]";
    };
    console.log("HELLO FROM API");

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start "
          style={{
            color: "#fff",
            background: "oklch(0.488 0.243 264.376)",
          }}
        >
          {logoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt="Logo" width={50} height={50} />
          )}
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              `values.type`
            </div>
            <div
              tw={`flex leading-[1.1] ${getFontSize(heading.length)} font-bold`}
              style={{
                fontFamily: "Inter Bold",
                fontWeight: "bold",
                marginLeft: "-3px",
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl" style={{ fontFamily: "Inter", fontWeight: "normal" }}>
              {siteConfig.siteUrl}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter Bold",
            data: fontRegular,
            weight: 700,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
