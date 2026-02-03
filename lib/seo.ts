import { Metadata } from "next";

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrlRelative?: string;
    keywords?: string[];
}

export function getSEOTags({
    title,
    description,
    canonicalUrlRelative,
    keywords = [],
}: SEOProps = {}): Metadata {
    const seoTitle = title || "Agentix - The AI UI Pack";
    const seoDescription = description || "A clean, futuristic AI-themed UI component library for React and Next.js";
    const canonicalUrl = `${"https://agentix.ui"}${canonicalUrlRelative || ""}`;

    const metadata: Metadata = {
        title: seoTitle,
        description: seoDescription,
        keywords,
        metadataBase: new URL('https://www.agentixui.com'),
        alternates: {
            canonical: canonicalUrlRelative,
        },
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: canonicalUrl,
            siteName: 'Agentix UI',
            locale: "en_US",
            type: "website",
            images: [{ url: 'www.agentixui.com' + "/banner.png" }],
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
            images: [{ url: 'www.agentixui.com' + "/banner.png" }],
        },
    };

    return metadata;
}

export function generateSchemaObject() {
    const websiteName = 'Agentix UI';
    const websiteUrl = 'www.agentixui.com';
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: websiteName,
        description: "A clean, futuristic AI-themed UI component library for React and Next.js",
        url: websiteUrl,
        image: 'www.agentixui.com' + "/banner.png",
        sameAs: [],
    };
}

export function getArticleSEOTags({
    title,
    description,
    canonicalUrlRelative,
    publishedTime,
    authors = [],
    tags = [],
    image,
}: SEOProps & {
    publishedTime?: string;
    authors?: string[];
    tags?: string[];
    image?: string;
} = {}): Metadata {
    const baseTags = getSEOTags({
        title,
        description,
        canonicalUrlRelative,
    });

    return {
        ...baseTags,
        openGraph: {
            ...baseTags.openGraph,
            type: "article",
            publishedTime,
            authors,
            tags,
            images: image
                ? [{ url: image }]
                : [{ url: 'www.agentixui.com' + "/banner.png" }],
        },
    };
}
