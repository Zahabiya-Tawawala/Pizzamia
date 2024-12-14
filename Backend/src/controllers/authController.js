const register = async (req, res) => {
    const {username, email, password, role} = req.body;
}

const login = async (req, res) => {
    // Login logic
}

module.exports = {
    register,
    login   
}