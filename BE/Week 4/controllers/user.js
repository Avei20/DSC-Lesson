
// add user 
// @access PUBLIC
// @route /user/add

const addUser = (req, res) => 
{
    const {name, role} = req.body

    //add ke database atau gmna gmna gitu deh 
    console.log(req.body)
    res.json ({message : 'ADD user', message: "Data insert success", data : req.body})
}

const getUser = (req, res) =>
{
    const users = [
        {
            name : 'Nana', 
            role : 'IT', 

        },
        {
            name : 'Rein', 
            role : 'IT', 

        },
        {
            name : 'Vein', 
            role : 'IT', 

        }
    ]
    res.json({message: "GET user", data : users})
}

const patchUser = (req, res) => 
{
    const { userid } = req.params
    const { name, role } = req.body
    console.log(userid, name, role)
    res.json ({message : 'UPDATE user succesfully', data : { userid, ...(req.body)}})
    // { userid, ...(req.body)} sama kaya
    // { userid, req.body.name, req.body.role } jadi isinya di tebarin setelah userid
}

const deleteUser = (req, res) =>
{   
    const userid = req.params


    res.json ({message : 'DELETE user sucess!', data : req.params})
}

module.exports = {
    addUser, 
    getUser,
    patchUser,
    deleteUser
}