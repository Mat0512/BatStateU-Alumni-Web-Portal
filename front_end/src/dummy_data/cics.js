// assumed that the data have been aggregated based on batch range

//employment status chart
const employmentStatus = [
    {
        batch: 2017,
        program: ["Computer Science, Information Technology"],
        "Computer Science": {
            employed: 123,
            unemployed: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            employed: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            unemployed: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2018,
        program: ["Computer Science, Information Technology"],
        "Computer Science": {
            employed: 123,
            unemployed: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            employed: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            unemployed: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2019,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            employed: 123,
            unemployed: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            employed: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            unemployed: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2020,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            employed: 123,
            unemployed: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            employed: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            unemployed: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2021,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            employed: 123,
            unemployed: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            employed: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            unemployed: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
];

const careerFields = [
    {
        batch: 2017,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            fields: {
                "Architecture, Planning & Environmental Design": 23,
                Education: 40,
                International: 11,
                "Arts & Entertainment": 10,
                "Engineering & Computer Science": 52,
                "Law & Public Policy": 20,
                Business: 5,
                Environment: 23,
                "Science - Biological & Physical": 35,
                Communication: 30,
                Government: 5,
                "Social Impact": 13,
                "Health & Medicine": 59,
            },
        },
        "Information Technology": {
            fields: {
                "Architecture, Planning & Environmental Design": 24,
                Education: 45,
                International: 30,
                "Arts & Entertainment": 60,
                "Engineering & Computer Science": 23,
                "Law & Public Policy": 20,
                Business: 20,
                Environment: 23,
                "Science - Biological & Physical": 22,
                Communication: 54,
                Government: 14,
                "Social Impact": 13,
                "Health & Medicine": 40,
            },
        },
    },
    {
        batch: 2018,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            fields: {
                "Architecture, Planning & Environmental Design": 23,
                Education: 40,
                International: 11,
                "Arts & Entertainment": 10,
                "Engineering & Computer Science": 52,
                "Law & Public Policy": 20,
                Business: 5,
                Environment: 23,
                "Science - Biological & Physical": 35,
                Communication: 30,
                Government: 5,
                "Social Impact": 13,
                "Health & Medicine": 59,
            },
        },
        "Information Technology": {
            fields: {
                "Architecture, Planning & Environmental Design": 24,
                Education: 45,
                International: 30,
                "Arts & Entertainment": 60,
                "Engineering & Computer Science": 23,
                "Law & Public Policy": 20,
                Business: 20,
                Environment: 23,
                "Science - Biological & Physical": 22,
                Communication: 54,
                Government: 14,
                "Social Impact": 13,
                "Health & Medicine": 40,
            },
        },
    },
    {
        batch: 2019,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            fields: {
                "Architecture, Planning & Environmental Design": 23,
                Education: 40,
                International: 11,
                "Arts & Entertainment": 10,
                "Engineering & Computer Science": 52,
                "Law & Public Policy": 20,
                Business: 5,
                Environment: 23,
                "Science - Biological & Physical": 35,
                Communication: 30,
                Government: 5,
                "Social Impact": 13,
                "Health & Medicine": 59,
            },
        },
        "Information Technology": {
            fields: {
                "Architecture, Planning & Environmental Design": 24,
                Education: 45,
                International: 30,
                "Arts & Entertainment": 60,
                "Engineering & Computer Science": 23,
                "Law & Public Policy": 20,
                Business: 20,
                Environment: 23,
                "Science - Biological & Physical": 22,
                Communication: 54,
                Government: 14,
                "Social Impact": 13,
                "Health & Medicine": 40,
            },
        },
    },
    {
        batch: 2020,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            fields: {
                "Architecture, Planning & Environmental Design": 23,
                Education: 40,
                International: 11,
                "Arts & Entertainment": 10,
                "Engineering & Computer Science": 52,
                "Law & Public Policy": 20,
                Business: 5,
                Environment: 23,
                "Science - Biological & Physical": 35,
                Communication: 30,
                Government: 5,
                "Social Impact": 13,
                "Health & Medicine": 59,
            },
        },
        "Information Technology": {
            fields: {
                "Architecture, Planning & Environmental Design": 24,
                Education: 45,
                International: 30,
                "Arts & Entertainment": 60,
                "Engineering & Computer Science": 23,
                "Law & Public Policy": 20,
                Business: 20,
                Environment: 23,
                "Science - Biological & Physical": 22,
                Communication: 54,
                Government: 14,
                "Social Impact": 13,
                "Health & Medicine": 40,
            },
        },
    },
    {
        batch: 2021,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            fields: {
                "Architecture, Planning & Environmental Design": 23,
                Education: 40,
                International: 11,
                "Arts & Entertainment": 10,
                "Engineering & Computer Science": 52,
                "Law & Public Policy": 20,
                Business: 5,
                Environment: 23,
                "Science - Biological & Physical": 35,
                Communication: 30,
                Government: 5,
                "Social Impact": 13,
                "Health & Medicine": 59,
            },
        },
        "Information Technology": {
            fields: {
                "Architecture, Planning & Environmental Design": 24,
                Education: 45,
                International: 30,
                "Arts & Entertainment": 60,
                "Engineering & Computer Science": 23,
                "Law & Public Policy": 20,
                Business: 20,
                Environment: 23,
                "Science - Biological & Physical": 22,
                Communication: 54,
                Government: 14,
                "Social Impact": 13,
                "Health & Medicine": 40,
            },
        },
    },
];

const degreeRelevance = [
    {
        batch: 2017,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            relevant: 123,
            notRelevant: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            relevant: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            notRelevant: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2018,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            relevant: 123,
            notRelevant: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            relevant: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            notRelevant: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2019,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            relevant: 123,
            notRelevant: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            relevant: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            notRelevant: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2020,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            relevant: 123,
            notRelevant: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            relevant: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            notRelevant: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
    {
        batch: 2021,
        program: ["Computer Science, Information Technology"],

        "Computer Science": {
            relevant: 123,
            notRelevant: 1,
        },
        "Information Technology": {
            majors: [
                "Business Analytics",
                "Service Management",
                "Network Technology",
            ],
            relevant: {
                "Business Analytics": 103,
                "Service Management": 120,
                "Network Technology": 10,
                all: 233,
            },
            notRelevant: {
                "Business Analytics": 10,
                "Service Management": 10,
                "Network Technology": 10,
                all: 30,
            },
        },
    },
];

//batch range will be merged into 1 aggregate result

export { employmentStatus, careerFields, degreeRelevance };
