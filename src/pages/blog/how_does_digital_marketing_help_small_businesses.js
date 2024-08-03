import React from 'react'
import BlogDetailsLayout from '../../component/BlogDetails';

const How_does_digital_marketing_help_small_businesses = () => {
    const blogContent = {
        title: "How does Digital Marketing Help Small Businesses?",
        mainImage: "assets/img/blog/blog_6.jpg",
        authorImage: "assets/img/icon/blank.png",
        author: "Themeholy",
        date: "15 Jan, 2022",
        content: `
            <p>It’s a fact that good marketing plays a very crucial role in growing a business, it can enhance your business and give confidence in continuous success. Though there are many types of marketing done to attract customers, it can be conventional marketing through offline mediums such as paper news, boardings, telecast on television, etc whereas digital marketing is quite different from the existing marketing style as it includes social media platforms to promote the business and other online platforms to introduce the products. Nowadays, where digital marketing has drastically changed the background of small businesses. Now ad agencies approach their ad company uniquely and remarkably. Digital marketing is not only beneficial for big businesses and brands but also helpful for small businesses too.</p>
            <p>Digital marketing helps small businesses in growing their businesses as it provides an equal platform for every business there the scale of business doesn’t matter at all. Digital marketing refers to the marketing activities that are being happened for the attack people and introduce products through the device or internet. The type of marketing uses various digital strategies by businesses to connect with the clients through online platforms, In simple words, digital marketing is the marketing that is done online. There are various methods under the spectrum of digital marketing, which are as follows- Search Engine Optimization (SEO), Pay-Per-Click (PPC), Content Marketing, Social Media Marketing (SMM), Affiliate Marketing, Email Marketing, Inbound Marketing. In this article, we are discussing some important facts that fevers in digital marketing and how digital help in growing business from small scale to large scale</p>
            <ul>
                <li><strong>Good communication skills:</strong> as digital marketing provides you a great platform and social media to have a direct conversation with people. As these online platforms establish instant communication between the brand and audience, another benefit from digital marketing is that you have a global audience for your brand, there is not any bond for the clients for your marketing and reach the audience much away.</li>
                <li><strong>Several visitors:</strong> giving priority to digital marketing helps in growing your business as the number of people that have reacted to the content is very huge and the response is very good as well. Every day, a business can share huge content with the audience via social media, emails, applications, newsletters, and so on. This way marketers can easily spread their message to a large audience.</li>
                <li><strong>Get digital information:</strong> as the digital data is safer and more accurate as compared to the conventional data as every people have posted their information accurately on the social media platform. Having digital marketing helps in getting this information about the clients and working accordingly to their needs. By knowing the pattern followed in the data, you will be able to know which product will work and which will not.</li>
                <li><strong>Encourage innovations:</strong> digital marketing is somehow most of the creative ideas and having a good sense of the market and special requirement of clients. Digital marketing promotes a different way to reach customers in an innovative and good way, where there is stiff competition in the market, you must have innovation and different ideas from the other companies. Having an innovative idea would help you in approaching a good level of clients and reliable clients.</li>
                <li><strong>Transparency in work:</strong> as digital marketing is quite transparent work and there is everything is clear to clients from the initial process to the final process of data. Good transparency in work is quite good and changes the mindset of clients to have other work too.</li>                
            </ul>
            <p>hence, there is no doubt in saying that digital marketing is creative and helps you to keep up with the trends!</p>
        `,
        tags: ["Education", "Online"],
        comments: [
            {
                authorImage: "assets/img/icon/blank.png",
                author: "David Malan",
                date: "September 20, 2022 at 9:09 pm",
                text: "Nice post. I learn something totally new and challenging on blogs I stumbleupon on a daily basis. It will always be interesting to read content from other writers and use something from other sites."
            },
            {
                authorImage: "assets/img/icon/blank.png",
                author: "Anadi Juila",
                date: "April 17, 2023 at 10:43 pm",
                text: "I was excited to find this website. I want to to thank you for your time just for this wonderful read!! I definitely really liked every part of it and I have you saved to fav to look at new things in your blog."
            }
        ],
        categories: [
            { name: "IT Solution", url: "" },
            { name: "SEO Marketing", url: "" },
            { name: "Web Development", url: "" },
            { name: "Cloud Solution", url: "" },
            { name: "Network Marketing", url: "" },
            { name: "UI/UX Design", url: "" }
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
                id: 1,
                image: "assets/img/blog/blog_1.jpg",
                title: "How digital marketing is different from traditional marketing?",
                url: "/how-digital-marketing-is-different-from-traditional-marketing",
                date: "15 Jan, 2022"
            },
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
            }
        ],
        popularTags: ["Technology", "Advice", "Solution", "Consultation", "Business", "Services", "Start Up", "Agency", "Software"]
    };
    return (
        <>
            <BlogDetailsLayout blogData={blogContent} />
        </>
    )
}

export default How_does_digital_marketing_help_small_businesses;