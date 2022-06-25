const homePage = async (req, res) => {
    const response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": process.env.ADMIN_TOKEN
        }
    } )
    const data = await response.json()
    res.render("index", {
        doctors: data.data.filter(doctor => doctor.user_role != "admin")
    })
}

export default {
    homePage
}