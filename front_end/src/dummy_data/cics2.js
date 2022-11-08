const employability = [
    {
        year: 2017,
        data: [
            {
                program: "Computer Science",
                employed: 60,
                unemployed: 10,
            },
            {
                program: "Information Technology",
                employed: 40,
                unemployed: 20,
            },
        ],
    },
    {
        year: 2018,
        data: [
            {
                program: "Computer Science",
                employed: 60,
                unemployed: 10,
            },
            {
                program: "Information Technology",
                employed: 50,
                unemployed: 20,
            },
        ],
    },
    {
        year: 2019,
        data: [
            {
                program: "Computer Science",
                employed: 60,
                unemployed: 10,
            },
            {
                program: "Information Technology",
                employed: 50,
                unemployed: 20,
            },
        ],
    },
    {
        year: 2020,
        data: [
            {
                program: "Computer Science",
                employed: 60,
                unemployed: 10,
            },
            {
                program: "Information Technology",
                employed: 40,
                unemployed: 20,
            },
        ],
    },
    {
        year: 2021,
        data: [
            {
                program: "Computer Science",
                employed: 60,
                unemployed: 10,
            },
            {
                program: "Information Technology",
                employed: 43,
                unemployed: 20,
            },
        ],
    },
];

const employabilityV2 = [
    {
        program: "Computer Science",
        employed: {
            2017: 20,
            2018: 23,
            2019: 26,
            2020: 28,
            2021: 40,
        },
        unemployed: {
            2017: 10,
            2018: 13,
            2019: 16,
            2020: 18,
            2021: 20,
        },
    },

    {
        program: "Information Technology",
        employed: {
            2017: 30,
            2018: 33,
            2019: 36,
            2020: 38,
            2021: 50,
        },
        unemployed: {
            2017: 10,
            2018: 13,
            2019: 11,
            2020: 18,
            2021: 30,
        },
    },
];
export { employability, employabilityV2 };
