const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Create a new user
router.post('/', async (req, res) => {
    console.log('Inside post app settings');

    const appSettingsData = req.body;

    let androidSettingsData = { ...appSettingsData.androidSettings };
    let iosSettingsData = { ...appSettingsData.iosSettings };

    try {
        const createdAppSettings = await prisma.AppSettings.create({
            data: {
                notificationType: appSettingsData?.notificationType,
                oneSignalAppID: appSettingsData?.oneSignalAppID,
                oneSignalApiKey: appSettingsData?.oneSignalApiKey,
                firebaseServerKey: appSettingsData?.firebaseServerKey,
                firebaseTopics: appSettingsData?.firebaseTopics,
                sportsApiBasedUrl: appSettingsData?.sportsApiBasedUrl,
                sportsApiKey: appSettingsData?.sportsApiKey,
                androidSettings: androidSettingsData,
                iosSettings: iosSettingsData
            }
        });
        return res.status(200).send({ message: 'App setting posted', createdAppSettings });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Failed to post app settings, Try again' });
    }
});


router.get('/', async (req, res) => {
    try {
        const appSettings = await prisma.AppSettings.findMany();
        return res.status(200).send(appSettings);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Failed to fetch app settings, Try again' });
    }
})

router.get('/hi', async (req, res) => {
    res.send('hello there')
})


module.exports = router;