export default function Blog() {

  const blogs = [

    {
      image: "/images/model.jpeg",
      category: "Beauty",
      title: "Top Luxury Hair Trends in 2026",
      description:
        "Discover the latest premium hairstyles and salon transformations dominating this year.",
    },

    {
      image: "/images/model2.jpeg",
      category: "Skincare",
      title: "5 Secrets For Healthy Glowing Skin",
      description:
        "Professional skincare techniques used by premium beauty specialists.",
    },

    {
      image: "/images/spa-area.jpeg",
      category: "Wellness",
      title: "Why Spa Therapy Improves Mental Wellness",
      description:
        "Luxury spa sessions help reduce stress and improve self-confidence naturally.",
    },

  ];

  return (

    <section className="blog-section" id="blog">

      <div className="section-title">

        <p>OUR BLOG</p>

        <h2>
          Beauty &
          <span className="gold-text">
            {" "}Lifestyle Journal
          </span>
        </h2>

      </div>

      <div className="blog-grid">

        {blogs.map((blog, index) => (

          <div
            className="blog-card"
            key={index}
          >

            <img
              src={blog.image}
              alt={blog.title}
            />

            <div className="blog-content">

              <span className="blog-category">
                {blog.category}
              </span>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <a href="#">
                Read More →
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}