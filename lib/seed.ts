import { getPayload } from "payload";
import config from "../payload.config";

const categories = [
    {
        name: "Writing",
        slug: "writing",
        subcategories: [
            { name: "Article Writing", slug: "article-writing" },
            { name: "Academic Writing", slug: "academic-writing" },
            { name: "Transcription", slug: "transcription" },
            { name: "Chat Moderation", slug: "chat-moderation" },
            { name: "Copywriting", slug: "copywriting" },
            { name: "Ghostwriting", slug: "ghostwriting" },
            { name: "Ebook Creation", slug: "ebook-creation" }
        ]
    },
    {
        name: "Writing Tools & Services",
        slug: "writing-tools",
        subcategories: [
            { name: "Plagiarism Checkers", slug: "plagiarism-checkers" },
            { name: "AI Content Detectors", slug: "ai-content-detectors" },
            { name: "Grammar Checkers", slug: "grammar-checkers" },
            { name: "Paraphrasing Tools", slug: "paraphrasing-tools" },
            { name: "Citation Generators", slug: "citation-generators" },
            { name: "Proofreading Services", slug: "proofreading-services" }
        ]
    },
    {
        name: "Freelancing Platforms",
        slug: "freelancing",
        subcategories: [
            { name: "Upwork", slug: "upwork" },
            { name: "Fiverr", slug: "fiverr" },
            { name: "Freelancer", slug: "freelancer" },
            { name: "PeoplePerHour", slug: "peopleperhour" },
            { name: "Toptal", slug: "toptal" }
        ]
    },
    {
        name: "Payment Processing",
        slug: "payment-processing",
        subcategories: [
            { name: "Stripe", slug: "stripe" },
            { name: "PayPal", slug: "paypal" },
            { name: "Payoneer", slug: "payoneer" },
            { name: "Wise", slug: "wise" },
            { name: "Skrill", slug: "skrill" },
            { name: "Revolut", slug: "revolut" },
            { name: "Cash App", slug: "cash-app" }
        ]
    },
    {
        name: "Cloud & Tools",
        slug: "cloud-tools",
        subcategories: [
            { name: "Google Workspace", slug: "google-workspace" },
            { name: "Microsoft 365", slug: "microsoft-365" },
            { name: "Canva Pro", slug: "canva-pro" },
            { name: "Grammarly Premium", slug: "grammarly" },
            { name: "Notion", slug: "notion" },
            { name: "Dropbox", slug: "dropbox" },
            { name: "Adobe Creative Cloud", slug: "adobe" }
        ]
    },
    {
        name: "Social Media",
        slug: "social-media",
        subcategories: [
            { name: "Instagram", slug: "instagram" },
            { name: "TikTok", slug: "tiktok" },
            { name: "Facebook", slug: "facebook" },
            { name: "Twitter (X)", slug: "twitter" },
            { name: "LinkedIn", slug: "linkedin" },
            { name: "YouTube", slug: "youtube" },
            { name: "Snapchat", slug: "snapchat" },
            { name: "Pinterest", slug: "pinterest" },
            { name: "Threads", slug: "threads" }
        ]
    },
    {
        name: "eCommerce",
        slug: "ecommerce",
        subcategories: [
            { name: "Amazon Seller", slug: "amazon-seller" },
            { name: "Shopify", slug: "shopify" },
            { name: "eBay", slug: "ebay" },
            { name: "Etsy", slug: "etsy" },
            { name: "Walmart Seller", slug: "walmart-seller" }
        ]
    },
    {
        name: "Gaming",
        slug: "gaming",
        subcategories: [
            { name: "Steam", slug: "steam" },
            { name: "Epic Games", slug: "epic-games" },
            { name: "PlayStation", slug: "playstation" },
            { name: "Xbox", slug: "xbox" },
            { name: "Nintendo", slug: "nintendo" },
            { name: "Roblox", slug: "roblox" },
            { name: "Minecraft", slug: "minecraft" }
        ]
    },
    {
        name: "Streaming Platforms",
        slug: "streaming",
        subcategories: [
            { name: "Netflix", slug: "netflix" },
            { name: "Spotify", slug: "spotify" },
            { name: "Hulu", slug: "hulu" },
            { name: "Amazon Prime Video", slug: "prime-video" },
            { name: "Disney+", slug: "disney-plus" },
            { name: "YouTube Premium", slug: "youtube-premium" }
        ]
    }
];

const seed = async () => {
    try {
        console.log("Starting seeding process...");
        const payload = await getPayload({ config });

        for (const category of categories) {
            // Check if parent category already exists
            const existingParent = await payload.find({
                collection: "categories",
                where: {
                    slug: {
                        equals: category.slug
                    }
                }
            });

            let parentCategory;
            if (existingParent.docs.length === 0) {
                console.log(`Creating parent category: ${category.name}`);
                parentCategory = await payload.create({
                    collection: "categories",
                    data: {
                        name: category.name,
                        slug: category.slug,
                        color: "#1e964c",
                        parent: null,
                    },
                });
            } else {
                console.log(`Parent category ${category.name} already exists, skipping...`);
                parentCategory = existingParent.docs[0];
            }

            for (const subcategory of category.subcategories || []) {
                // Check if subcategory already exists
                const existingSubcategory = await payload.find({
                    collection: "categories",
                    where: {
                        AND: [
                            {
                                slug: {
                                    equals: subcategory.slug
                                }
                            },
                            {
                                parent: {
                                    equals: parentCategory.id
                                }
                            }
                        ]
                    }
                });

                if (existingSubcategory.docs.length === 0) {
                    console.log(`Creating subcategory: ${subcategory.name}`);
                    await payload.create({
                        collection: "categories",
                        data: {
                            name: subcategory.name,
                            slug: subcategory.slug,
                            color: "#1e964c",
                            parent: parentCategory.id,
                        },
                    });
                } else {
                    console.log(`Subcategory ${subcategory.name} already exists, skipping...`);
                }
            }
        }
        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error during seeding process:", error);
        process.exit(1);
    }
}

// Handle process events for graceful shutdown
process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Performing graceful shutdown...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Performing graceful shutdown...');
    process.exit(0);
});

// Run the seed function
seed()
    .then(() => {
        console.log('Seeding process finished, exiting...');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Fatal error during seeding:', error);
        process.exit(1);
    });