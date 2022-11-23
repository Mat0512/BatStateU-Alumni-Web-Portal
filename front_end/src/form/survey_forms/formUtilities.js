const matchCollegeProgramInputs = (college) => {
    const programs = {
        CICS: [
            "Bachelor of Science in Information Technology",
            "Bachelor of Science in Computer Science",
        ],
        CIT: [
            "Bachelor of Industrial Technology: Major in Automotive Technology",
            "Bachelor of Industrial Technology: Major in Civil Technology",
            "Bachelor of Industrial Technology: Major in Computer Technology",
            "Bachelor of Industrial Technology: Major in Drafting Technology",
            "Bachelor of Industrial Technology: Major in Electrical Technology",
            "Bachelor of Industrial Technology: Major in Food Technology",
            "Bachelor of Industrial Technology: Major in Computer Technology",
            "Bachelor of Industrial Technology: Major in Drafting Technology",
            "Bachelor of Industrial Technology: Major in Electrical Technology",
            "Bachelor of Industrial Technology: Major in Food Technology",
            "Bachelor of Industrial Technology: Major in Control Technology",
            "Bachelor of Industrial Technology: Major in Mechanical Technology",
            "Bachelor of Industrial Technology: Major in Mechatronics Technology",
            "Bachelor of Industrial Technology: Major in Welding and Fabrication Technology",
        ],
        CEAFA: [
            "Bachelor of Science in Chemical Engineering",
            "Bachelor of Science in Civil Engineering",
            "Bachelor of Science in Computer Engineering",
            "Bachelor of Science in Electrical Engineering",
            "Bachelor of Science in Electronics Engineering",
            "Bachelor of Science in Food Engineering",
            "Bachelor of Science in Industrial Engineering",
            "Bachelor of Science in Instrumentation & Control Engineering",
            "Bachelor of Science in Mechanical Engineering",
            "Bachelor of Science in Mechatronics Engineering",
            "Bachelor of Science in Petroleum Engineering",
            "Bachelor of Science in Sanitary Engineering",
            "Bachelor of Science in Automotive Engineering",
            "Bachelor of Science in Aerospace Engineering",
            "Bachelor of Science in Transportation Engineering",
            "Bachelor of Science in Biomedical Engineering",
            "Bachelor of Science in Geodetic Engineering",
            "Bachelor of Science in Geological Engineering",
            "Bachelor of Science in Ceramics Engineering",
            "Bachelor of Science in Metallurgical Engineering",
            "Bachelor of Science in Naval Architecture and Marine Engineering",
            "Bachelor of Science in Architecture",
            "Bachelor of Fine Arts and Design major in Visual Communication",
            "Bachelor of Science in Interior Design",
        ],
    };

    console.log("programs: ", programs[college]);

    return programs[college];
};

export { matchCollegeProgramInputs };
