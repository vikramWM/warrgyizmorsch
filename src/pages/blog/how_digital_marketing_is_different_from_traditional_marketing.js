import React from 'react'
import BlogDetailsLayout from '../../component/BlogDetails';

const How_digital_marketing_is_different_from_traditional_marketing = () => {
    const blogContent = {
        title: "How digital marketing is different from traditional marketing?",
        mainImage: "assets/img/blog/blog_1.jpg",
        authorImage: "assets/img/icon/blank.png",
        author: "Admin",
        date: "15 Jan, 2022",
        content: `
            <p>Traditional marketing is considered when marketing activities for an organization are undertaken in a conventional way such as by television, Papernews, etc. And digital marketing is when the organization uses online platforms to promote the service and products of the company. As today’s time is a digital era and everyone much depend on online platform to get something or buy something that’s why digital marketing considers as one of the effective ways to introduce your product and services to the public without any interruption. The marketing system has completely changed now due to the popularity of the digital dependency of the public. Now, the market has drifted towards digital marketing instead of traditional marketing. The market now shifted to digital marketing and many companies prefer digital platforms to introduce and publish their products through e-commerce websites, google ads, emails, etc. Ours most frequently used social media platforms. Digital marketing is way much different from conventional traditional marketing in terms of Getting more Business, getting their products published, and marketing.</p>
            <ul>
                <li><strong>Cost friendly:</strong> Digital marketing is cost-friendly and cheaper than traditional marketing, as traditional marketing requires much amount for marketing in television publishing, paper news publishing, hoarding, etc. digital marketing is handy and the marketers can grab the attention of their clients more easily and quickly. Also, traditional marketing always requires good investment for better results, whereas digital marketing can boom your business with few amounts and little investments.</li>
                <li><strong>Better results:</strong> Digital marketing is quite effective and gives better result in terms of marketing and gathering business for their clients as digital marketing only boom to the targeted audience that’s why results come from digital marketing is quite good. As today time is the digital era and everyone depends on the digital market and trust digital results.</li>
                <li><strong>Less documentation:</strong> The traditional marketing is full of documentation work, where brochures and product details mention in hard copy, where readers re-read these documents, this thing requires many documents where else the digital marketing requires only e-documents, where the fear of loss is very less and readers can read that documents anytime according to their convenience.</li>
                <li><strong>Interaction:</strong> Digital marketing is quite different from traditional marketing in terms of interaction with the public as traditional marketing has less public interaction as it only publishes and introduces their product through offline medium and it becomes much difficult for any person to get contact with that organization. Digital marketing here plays the king role where people can easily get connected with the representation of the particular organization. Digital marketing also allows clients to post their reviews and comment about their services.</li>
                <li><strong>Market analysis:</strong> With traditional marketing you cannot analyze the market in better ways as one cannot evaluate the perfect result and outsource the working method. On the other hand, digital marketing gives you exact data about the market analysis from the number of audience to responders, you may get everything through digital marketing and good analysis.</li>
                <li><strong>Strategy refinement:</strong> Digital marketing is different from the conventional using trading marketing in the strategy refinement terms. As traditional marketing doesn’t provide the real-time result, not the real number of the audience and viewer that’s why drafting a strategy to grab more audience in traditional marketing needs a long time than digital marketing. Digital marketing provides real-time results from the purchase to the sale of final products, the number of clients, etc. thus strategic refinement is easy through digital marketing, any company can modify their policies any time according to public response.</li>
            </ul>
            
            <p>Thus, we can analyze that digital marketing is quite different and gives better results than traditional marketing.</p>
        `,
        tags: ["Education", "Online"],
        comments: [
            {
                authorImage: "assets/img/icon/blank.png",
                author: "Mark",
                date: "September 14, 2022 at 10:58 pm",
                text: "Thanks for your blog, nice to read. Do not stop."
            },
            {
                authorImage: "assets/img/icon/blank.png",
                author: "דירות דיסקרטיות בירושלים - israel night club",
                date: "November 21, 2022 at 9:33 pm",
                text: "Very good article. I absolutely love this site. Thanks!"
            },
            {
                authorImage: "assets/img/icon/blank.png",
                author: "Ricky Sanford",
                date: "March 31, 2023 at 8:54 pm",
                text: "This is my first time pay a quick visit at here and i am really happy to read everthing at one place"
            }
        ],
        categories: [
            { name: "IT Solution", url: "javascript:void(0);" },
            { name: "SEO Marketing", url: "javascript:void(0);" },
            { name: "Web Development", url: "javascript:void(0);" },
            { name: "Cloud Solution", url: "javascript:void(0);" },
            { name: "Network Marketing", url: "javascript:void(0);" },
            { name: "UI/UX Design", url: "javascript:void(0);" }
        ],
        gallery: [
            { src: "assets/img/widget/gallery_1_1.jpg" },
            { src: "assets/img/widget/gallery_1_2.jpg" },
            { src: "assets/img/widget/gallery_1_3.jpg" },
            { src: "assets/img/widget/gallery_1_4.jpg" },
            { src: "assets/img/widget/gallery_1_5.jpg" },
            { src: "assets/img/widget/gallery_1_6.jpg" }
        ],
        recentPosts: [
            {
                id: 2,
                image: "assets/img/blog/blog_2.jpg",
                title: "How digital marketing helps in business growth?",
                url: "/how-digital-marketing-helps-in-business-growth",
                date: "15 Jan, 2022"
            },            
            {
                id: 3,
                image: "assets/img/blog/blog_3.jpg",
                title: "Top Digital Marketing Strategies for gyms",
                url: "/top-digital-marketing-strategies-for-gym",
                date: "15 Jan, 2022"
            },
            {
                id: 4,
                image: "assets/img/blog/blog_4.jpg",
                title: "Top 10 Digital Marketing Strategies for startups",
                url: "/top-10-digital-marketing-strategies-for-the-startups",
                date: "15 Jan, 2022"
            },
            {
                id: 5,
                image: "assets/img/blog/blog_5.jpg",
                title: "Top Digital Marketing Strategies for product launches",
                url: "/top-digital-marketing-strategies-for-the-product-launch",
                date: "15 Jan, 2022"
            },
            {
                id: 6,
                image: "assets/img/blog/blog_6.jpg",
                title: "How does Digital Marketing Help Small Businesses?",
                url: "/how-does-digital-marketing-help-small-businesses",
                date: "15 Jan, 2022"
            }
        ],
        popularTags: ["Technology", "Advice", "Solution", "Consultation", "Business", "Services", "Start Up", "Agency", "Software"]
    };
    return (
        <>
            <div style={{ height: '108px', backgroundColor: '#18336c' }}></div>
            <BlogDetailsLayout blogData={blogContent} />
        </>
    )
}

export default How_digital_marketing_is_different_from_traditional_marketing;