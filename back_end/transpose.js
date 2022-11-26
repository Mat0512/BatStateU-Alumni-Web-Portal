const fs = require("fs");

const data = "";

const filterJson = () => {
    const sample = [
        {
            "First Name": "Joshua",
            "Middle Name": "Santos",
            "Last Name": "Mendoza",
            Age: 21,
            Gender: "Male",
            "Civil Status": "Single",
            "Permanent Address": "Puting Bato, Lemery, Batangas",
            "Contact Number": ["0956-226-3737", "0956-226-3737"],
            "Email Address": "joshuamendoza@gmail.com",
            College: "CICS",
            Course: {
                Program: "Bachelor of Science in Computer Science",
            },
            Major: {
                Specialization: "",
            },
            Batch: {
                "Year Graduated": 2017,
            },
            "Highest Educational Attainment": "Bachelor's",
            "Sr-code (undergraduate)": "17-00025",
            "G-suite account (undergraduate)": "NA",
            "Current Nature of Work": {
                "Profession Field": "Business",
            },
            "Name of Job": "Call Center Agent",
            "Employment Status": "Employed",
            "Employment Characteristic": "Regular/Permanent",
            "Status of Professional Registration": "Not Applicable",
            "Location of Work": "Lemery, Batangas",
            Email: "joshuamendoza@gmail.com",
            "Company Name": "Areniego Call center",
            "Length of Time before Employment": "Less than 1 month",
            "Job Satisfaction": "Satisfied",
            "Is your college degree relevant to your job?": "Related",
            "Overall, how would you rate the usefulness of your studies? [For finding an adequate job after finishing your studies.]":
                "Very useful",
            "Overall, how would you rate the usefulness of your studies? [For fulfilling your present professional tasks, if applicable.]":
                "Very useful",
            "Overall, how would you rate the usefulness of your studies? [For your future professional development":
                {
                    "career.]": "Very useful",
                },
            "Overall, how would you rate the usefulness of your studies? [For the development of your personality.]":
                "Very useful",
            "Overall, how would you rate the usefulness of your studies? [For the economic development of your country.]":
                "Very useful",
            "Previous Nature of Work": "",
            Reason: {
                "s of changing job": "",
                "s of unemployment": "",
            },
            "Is the curriculum you've finished relevant to your current job?":
                "Yes, the curriculum is relevant.",
            "What are the competencies you've learned in college in which you find useful in your current job?":
                "Communication skills, Human relation skills, Problem solving skills, Information technology skills, Critical thinking skills, Teaching skills, Time management, Analytical skills, Ethical skills",
        },
    ];

    const writeF = fs.writeFile(
        "samplejson.json",
        JSON.stringify(sample),
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("created");
            }
        }
    );
    const file = fs.readFile("tracking_dummy.json", (err, data) => {
        console.log(typeof data);

        //
    });
};

module.exports = filterJson;
