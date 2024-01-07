
const get = async (req,res) => {
    res.send("Hii")
}

const getAll = async (req,res) => {
    res.json({message: "Hello from getAll controller and route i.e, backend"})
}

export {get, getAll}