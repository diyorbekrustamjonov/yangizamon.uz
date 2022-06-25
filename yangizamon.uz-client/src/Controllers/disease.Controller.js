const diseasePage = async (req, res) => {
    const diseaseResponse = await fetch(`${process.env.BACKEND_URL}/api/diseases`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    })

    const categoryResponse = await fetch(`${process.env.BACKEND_URL}/api/disease_categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    } )

    if(req.query.cat){
        const diseaseData = await diseaseResponse.json()
        const categoriesData = await categoryResponse.json()

        const filtereddiseases = diseaseData.data.filter(disease => disease.disease_category_id == req.query.cat)
    
        res.render("disease", {
            diseases: filtereddiseases,
            categories: categoriesData.data
        })
    }else{
        const diseaseData = await diseaseResponse.json()
        const categoriesData = await categoryResponse.json()
        console.log(diseaseData)
        res.render("disease", {
            diseases: diseaseData.data,
            categories: categoriesData.data
        })
    }
    
}

const diseaseSinglePage = async (req, res) => {
    const diseaseResponse = await fetch(`${process.env.BACKEND_URL}/api/diseases`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    })
    const categoriesData = await fetch(`${process.env.BACKEND_URL}/api/disease_categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    } )

    const diseaseData = await diseaseResponse.json()
    const singleDisease = diseaseData?.data?.find(disease => disease?.disease_title?.replace(/\s/g, '-')?.toLowerCase() == req?.params?.disease_slug?.toLowerCase())

    const categories = await categoriesData.json()
    res.render("disease-single", {
        disease: singleDisease,
        categories: categories.data,
        diseases: diseaseData.data
    })
}

export default {
    diseasePage,
    diseaseSinglePage
}