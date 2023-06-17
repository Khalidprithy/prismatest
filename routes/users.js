// routes/users.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Create a new user
router.post('/', async (req, res) => {
    const { name, email } = req.body;

    try {
        const user = await prisma.user.create({
            data: { name, email },
        });

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Update a user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const user = await prisma.user.update({
            where: { id },
            data: { name, email },
        });

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.user.delete({
            where: { id },
        });

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
