const blogPage = async (req, res) => {
    const blogResponse = await fetch(`${process.env.BACKEND_URL}/api/blogs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    })

    const categoryResponse = await fetch(`${process.env.BACKEND_URL}/api/blog_categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    } )

    if(req.query.cat){
        const blogData = await blogResponse.json()
        const categoriesData = await categoryResponse.json()

        const filteredBlogs = blogData.data.filter(blog => blog.blog_category_id == req.query.cat)
    
        res.render("blog", {
            blogs: filteredBlogs,
            categories: categoriesData.data
        })
    }else{
        const blogData = await blogResponse.json()
        const categoriesData = await categoryResponse.json()

        res.render("blog", {
            blogs: blogData.data,
            categories: categoriesData.data
        })
    }
    
}

const blogSinglePage = async (req, res) => {
    const blogResponse = await fetch(`${process.env.BACKEND_URL}/api/blogs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    })
    const categoriesData = await fetch(`${process.env.BACKEND_URL}/api/blog_categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    } )
    
    const blogData = await blogResponse.json()
    const singleBlog = blogData?.data?.find(blog => blog?.blog_title?.replace(/\s/g, '-')?.toLowerCase() == req?.params?.blog_slug?.toLowerCase())

    const categories = await categoriesData.json()
    res.render("blog-single", {
        blog: singleBlog,
        categories: categories.data,
        blogs: blogData.data
    })
}

export default {
    blogPage,
    blogSinglePage
}