const jwt = require('jsonwebtoken');    
const bcrypt = require('bcryptjs');
const { User }= require('../models');

const secret = process.env.JWT_SECRET;

const createToken = (user) => {
    return jwt.sign({id: user.id}, secret, {expiresIn: '1d'})
}

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: 'Erro ao registrar' });

    }
}

exports.login = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({ where: {email}})
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Senha incorreta' });

        const token = createToken(user);
        return res.json({token, user})
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao fazer login' });
    }

}

