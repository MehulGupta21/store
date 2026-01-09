import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    const params = new URLSearchParams({
      engine: "google_images",
      q: `${query} site:pinterest.com`,
      gl: "in",
      hl: "en",
      api_key: process.env.SERP_API_KEY!,
    });

    const response = await fetch(
      `https://serpapi.com/search.json?${params.toString()}`,
      { cache: "no-store" }
    );

    const data = await response.json();

    console.log("SERP RAW RESPONSE:", data);

    const rawImages =
      data.images_results ||
      data.google_images ||
      [];

    const images = rawImages.slice(0, 12).map((img: any, i: number) => ({
      id: i + 1,
      image: img.original || img.thumbnail || img.image,
      title: img.title || query,
      link: img.link || img.source,
      source: "Pinterest",
    }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error("SERP API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch recommendations" },
      { status: 500 }
    );
  }
}
