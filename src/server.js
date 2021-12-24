const Express = require('express')

const data = [
    {
        'driver': 'Driver 1',
        'number': '01',
        'splits': [
            30100,
            30200,
            30300

        ]
    },
    {
        'driver':'Driver 2',
        'number': '02',
        'splits': [
            30100,
            30200,
            30400
        ]
    },
    {
        'driver': 'Driver 3',
        'number': '03',
        'splits': [
            30100,
            30200,
            30500
        ]
    },
    {
        'driver':'Driver 4',
        'number': '04',
        'splits': [
            30100,
            30200,
            30600
        ]
    },
    {
        'driver': 'Driver 5',
        'number': '05',
        'splits': [
            30100,
            30700,
            0
        ]
    },
    {
        'driver':'Driver 6',
        'number': '06',
        'splits': [
            30800,
            0,
            0
        ]
    }
]

const app = Express()

app.get('/results', (req, res) => {
    res.json(data)
})

app.listen(3001, () => console.log('Listening on port 3001'))
