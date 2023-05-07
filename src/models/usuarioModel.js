const connection = require('./connection');

const getById = async(id) => {
    const query = `SELECT Id,Nome,Email,Numero FROM usuarios WHERE Id=${id}`;
    const [usuario] = await connection.execute(query);
    return usuario;
};

const getLogin = async(login) => {
    const query =`SELECT Id,CNH,Titulo_Eleitor,Nome,Email,Numero FROM usuarios WHERE CNH='${login.CNH}' and Senha='${login.Senha}'`;
    const [usuario] = await connection.execute(query);
    return usuario;
};

const setRegister = async(usuario)=>{
    const query = `INSERT INTO usuarios(CNH,Titulo_Eleitor,Nome,Email,Senha,Numero) VALUES('${usuario.CNH}','${usuario.Titulo_Eleitor}','${usuario.Nome}','${usuario.Email}','${usuario.Senha}',${usuario.Numero})`;
    const [createdUsuario] = await connection.execute(query);
    return {insertId: createdUsuario.insertId};
};

module.exports = {
    getById,
    getLogin,
    setRegister
};
    