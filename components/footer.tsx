


import Link from "next/link";
import { Button } from "./ui/container/button";
import { Container } from "./ui/container/container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";
// import { SendIcon } from "@/src/icons/bento-icons";
// import { FlickeringGrid } from "./flickering-grid";

export const Footer = () => {
    const product = [
        {
            title: "Components",
            href: "/components",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        // {
        //     title: "Integrations",
        //     href: "#",
        // },
        // {
        //     title: "Multi Agent",
        //     href: "#",
        // },
        // {
        //     title: "Workflow API",
        //     href: "#",
        // },
    ];

    // const company = [
    //     {
    //         title: "Sign In",
    //         href: "/sign-in",
    //     },
    //     {
    //         title: "About",
    //         href: "/about",
    //     },
    //     {
    //         title: "Contact",
    //         href: "/contact",
    //     },
    //     {
    //         title: "Pricing",
    //         href: "/pricing",
    //     },
    //     {
    //         title: "Careers",
    //         href: "/careers",
    //     },
    //     {
    //         title: "Docs",
    //         href: "#",
    //     },
    //     {
    //         title: "Changelog",
    //         href: "#",
    //     },
    //     {
    //         title: "Glossary",
    //         href: "#",
    //     },
    // ];

    // const legal = [
    //     {
    //         title: "Privacy Policy",
    //         href: "/privacy-policy",
    //     },
    //     {
    //         title: "Terms of Service",
    //         href: "/terms-of-service",
    //     },
    //     {
    //         title: "Cookie Policy",
    //         href: "/cookie-policy",
    //     },
    // ];
    return (
        <Container>
            <div className="grid grid-cols-1 px-4 py-20 sm:grid-cols-2 gap-12 ">
                <div className="mb-6 col-span-1">
                    <Logo />
                    <SubHeading as="p" className="mt-4 max-w-lg text-left">
                        AI UI components for AI Apps
                    </SubHeading>
                    <Button as={Link} href="/components" className="mt-4 mb-8 lg:mb-0">Browse components</Button>
                    <div className="mt-6">
                        <Link 
                            href="https://x.com/agentix_ui" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <img 
                                src="https://cdn.brandfetch.io/idS5WhqBbM/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1768324401335" 
                                alt="Follow us on X" 
                                className="h-8 w-8 transition-opacity hover:opacity-80"
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2 md:col-span-1 md:mb-0">
                    <p className="text-sm font-medium text-gray-600">Product</p>
                    {product.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className="text-footer-link my-2 text-sm font-medium"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
            {/* <div className="relative h-[200px]">
                <FlickeringGrid
                    text={"Agentix"}
                    fontSize={90}
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    color="#6B7280"
                    maxOpacity={0.3}
                    flickerChance={0.1}
                />
            </div> */}

        </Container>
    );
};



// import Link from "next/link";
// import { Button } from "./ui/container/button";
// import { Container } from "./ui/container/container";
// import { Logo } from "./logo";
// import { SubHeading } from "./subheading";
// // import { SendIcon } from "@/src/icons/bento-icons";
// import { FlickeringGrid } from "./flickering-grid";

// export const Footer = () => {
//     const product = [
//         { title: "Agent Builder", href: "#" },
//         { title: "Simulation", href: "#" },
//         { title: "Integrations", href: "#" },
//         { title: "Multi Agent", href: "#" },
//         { title: "Workflow API", href: "#" },
//     ];

//     const company = [
//         { title: "Sign In", href: "/sign-in" },
//         { title: "About", href: "/about" },
//         { title: "Contact", href: "/contact" },
//         { title: "Pricing", href: "/pricing" },
//         { title: "Careers", href: "/careers" },
//         { title: "Docs", href: "#" },
//         { title: "Changelog", href: "#" },
//         { title: "Glossary", href: "#" },
//     ];

//     const legal = [
//         { title: "Privacy Policy", href: "/privacy-policy" },
//         { title: "Terms of Service", href: "/terms-of-service" },
//         { title: "Cookie Policy", href: "/cookie-policy" },
//     ];

//     // גובה האזור שנחשף - שיניתי ל-500px כדי שיהיה מספיק מרחב לאפקט, אפשר לשנות לפי הצורך
//     const revealHeight = "h-[500px]";

//     return (
//         <div className="relative">
//             {/* חלק 1: התוכן העליון (ה"וילון")
//                חובה להוסיף צבע רקע (bg-white/black) כדי להסתיר את הגריד שנמצא מתחת.
//                ה-z-10 מבטיח שהוא יהיה מעל הגריד.
//             */}
//             <div className="relative z-10 bg-white dark:bg-black shadow-xl">
//                 <Container>
//                     <div className="grid grid-cols-1 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
//                         <div className="mb-6 sm:col-span-2 md:col-span-4 lg:col-span-3">
//                             <Logo />
//                             <SubHeading as="p" className="mt-4 max-w-lg text-left">
//                                 AI UI components for AI Apps
//                             </SubHeading>
//                             <Button as={Link} href="/components" className="mt-4 mb-8 lg:mb-0">
//                                 Browse components
//                             </Button>
//                         </div>
                        
//                         {/* השארתי את הקוד המקורי שלך בהערה, אם תרצה להחזיר אותו פשוט מחק את ההערות */}
//                         {/* <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
//                             <p className="text-sm font-medium text-gray-600">Product</p>
//                             {product.map((item) => (
//                                 <Link href={item.href} key={item.title} className="text-footer-link my-2 text-sm font-medium">
//                                     {item.title}
//                                 </Link>
//                             ))}
//                         </div>
//                         <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
//                             <p className="text-sm font-medium text-gray-600">Company</p>
//                             {company.map((item) => (
//                                 <Link href={item.href} key={item.title} className="text-footer-link my-2 text-sm font-medium">
//                                     {item.title}
//                                 </Link>
//                             ))}
//                         </div>
//                         <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
//                             <p className="text-sm font-medium text-gray-600">Legal</p>
//                             {legal.map((item) => (
//                                 <Link href={item.href} key={item.title} className="text-footer-link my-2 text-sm font-medium">
//                                     {item.title}
//                                 </Link>
//                             ))}
//                         </div> 
//                         */}
//                     </div>
//                 </Container>
//             </div>

//             {/* חלק 2: ה-Spacer (המרווח הריק)
//                זה דיב שקוף שתופס מקום בדף הרגיל בדיוק בגובה של הגריד.
//                בלי זה, לא יהיה לאן לגלול כדי לחשוף את הגריד.
//             */}
//             <div className={`w-full ${revealHeight} bg-transparent pointer-events-none`} />

//             {/* חלק 3: הגריד המקובע (החלק שנחשף)
//                הוא מקובע (fixed) לתחתית ויושב ב-z-index שלילי.
//                הוא מחכה שהמשתמש יגלול את החלק העליון למעלה כדי להתגלות.
//             */}
//             <div className={`fixed bottom-0 left-0 w-full  ${revealHeight} flex flex-col justify-end`}>
//                 <FlickeringGrid
//                     text={"Agentix"}
//                     fontSize={90}
//                     className="h-full w-full"
//                     squareSize={2}
//                     gridGap={2}
//                     color="#6B7280"
//                     maxOpacity={0.3}
//                     flickerChance={0.1}
//                 />
//             </div>
//         </div>
//     );
// };