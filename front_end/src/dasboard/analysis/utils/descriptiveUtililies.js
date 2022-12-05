const generateEmployabilityStatement = (dataset, maxBatch) => {
    const minBatch = 2017;

    const statement = (program, employedCount, unEmployedCount) => {
        return `there are ${employedCount} total number of employed ${program.replace(
            /Bachelor of Science in /,
            "BS "
        )} graduates within batch ${minBatch}-${maxBatch}. Whereas, ${unEmployedCount} were unemployed.`;
    };

    //total responses count
    const totalResponses = dataset.reduce((accumulatedSum, data) => {
        let total = 0;
        for (let key in data.values) {
            console.log("resptotal", data.values[key]);
            const totalFIeldVal = Object.values(data.values[key]).reduce(
                (accSum, num) => accSum + num,
                0
            );
            total = total + totalFIeldVal;
        }
        return accumulatedSum + total;
    }, 0);

    let descriptiveStatement = "";
    const programs = dataset.map((data) => data.program);
    console.log("prog: ", programs);

    programs.forEach((program, i) => {
        console.log("program: ", program);
        dataset
            .filter((data) => data.program == program)
            .forEach((data) => {
                let totalEmployed = Object.values(data.values.employed).reduce(
                    (accSum, num) => accSum + num,
                    0
                );
                let totalUnemployed = Object.values(
                    data.values.unemployed
                ).reduce((accSum, num) => accSum + num, 0);

                descriptiveStatement = descriptiveStatement.concat(
                    `${i > 0 ? " On the other hand, " : ""}${statement(
                        program,
                        totalEmployed,
                        totalUnemployed
                    )}`
                );
            });
    });

    return (
        dataset.length > 0 &&
        `
     Based on the survey result, out of ${totalResponses} responses, ${descriptiveStatement}    
     `
    );
};

const generateCareersAnalysisStatement = (dataset) => {
    const fieldsTotal = [];
    const fields = Object.keys(dataset[0].values);
    console.log("dataset: ", dataset);

    //creates object with dataset field and its total for each data and stores in fieldsTotal
    fields.forEach((field) => {
        let data = { field: field, total: 0 };
        data.total = Object.values(dataset[0].values[field]).reduce(
            (accSum, num) => accSum + num,
            0
        );
        fieldsTotal.push(data);
    });

    const sortedDescendingLlist = fieldsTotal.sort((a, b) => b.total - a.total);
    console.log("sorted: ", sortedDescendingLlist);
    let accumulatedStatement = "";
    sortedDescendingLlist.forEach((data, i) => {
        if (i == 0) {
            accumulatedStatement = accumulatedStatement.concat(
                ` The top ${
                    sortedDescendingLlist.length >= 3 ? "3 current" : ""
                } career fields of ${dataset[0].program.replace(
                    /Bachelor of Science in /,
                    " BS "
                )} graduates are "${data.field}" with a total of ${
                    data.total
                } responses${sortedDescendingLlist.length === 1 ? ". " : ", "}`
            );
        }
        // else if (
        //     i == sortedDescendingLlist.length - 1 &&
        //     sortedDescendingLlist.length > 1
        // ) {
        //     accumulatedStatement = accumulatedStatement.concat(
        //         `and ${data.field} having ${data.total}.`
        //     );
        // }
        else if (i <= 2) {
            accumulatedStatement = accumulatedStatement.concat(
                `${i == 2 ? " and" : ""} ${data.field} having ${data.total}${
                    i == 2 ? "." : ","
                }`
            );
        } else {
        }
    });

    return accumulatedStatement;
};

const generateJobRelevanceStatement = (dataset) => {
    const statement = (program, relatedCount, notRelatedCount) => {
        return `there are ${relatedCount} responses who agree that their degree in ${program.replace(
            /Bachelor of Science in /,
            "BS "
        )} is related to their current job. Whereas, ${notRelatedCount} says that their college degree and current job are not related.`;
    };
    let descriptiveStatement = "";

    //sorting data by program to compute its total responses
    const programs = dataset.map((data) => data.program);

    programs.forEach((program, i) => {
        console.log("program: ", program);
        dataset
            .filter((data) => data.program == program)
            .forEach((data) => {
                let totalRelated = Object.values(data.values.Related).reduce(
                    (accSum, num) => accSum + num,
                    0
                );
                let totalUnrelated = Object.values(
                    data.values["Not Related"]
                ).reduce((accSum, num) => accSum + num, 0);

                descriptiveStatement = descriptiveStatement.concat(
                    `${i > 0 ? " On the other hand, " : ""}${statement(
                        program,
                        totalRelated,
                        totalUnrelated
                    )}`
                );
            });
    });
    return (
        dataset.length > 0 && `According to the result, ${descriptiveStatement}`
    );
};
const generateEmploymentTypeStatement = (dataset) => {
    let statement = ` For  the status of employment of ${dataset[0].program.replace(
        /Bachelor of Science in /,
        " BS "
    )}`;
    const fields = Object.keys(dataset[0].values);
    const dataTotalsByField = {};
    fields.forEach((field) => {
        dataTotalsByField[field] = {
            field: field,
            total: 0,
        };

        console.log("bem: ", Object.values(dataset[0].values[field]));
        dataTotalsByField[field].total = Object.values(
            dataset[0].values[field]
        ).reduce((accSum, num) => accSum + num, 0);
        console.log("dataaa", dataTotalsByField);
    });

    fields.forEach((field, i) => {
        const statementFindings =
            fields.length == i + 1 && fields.length > 0
                ? `and ${dataTotalsByField[field].field} with a total of ${dataTotalsByField[field].total}`
                : i === 0
                ? `, there are ${dataTotalsByField[field].total} who are ${dataTotalsByField[field].field}`
                : `, ${dataTotalsByField[field].total} for ${dataTotalsByField[field].field}.`;

        statement = statement.concat(statementFindings);
    });

    return statement;
};

const generateUnemploymentPeriodStatement = (dataset, maxBatch) => {
    const minBatch = 2017;

    const fieldsTotal = [];
    const fields = Object.keys(dataset[0].values);

    let accumulatedStatement = `Most of the ${dataset[0].program.replace(
        /Bachelor of Science in /,
        " BS "
    )} graduates within ${minBatch} - ${maxBatch} became `;

    fields.forEach((field) => {
        let data = { field: field, total: 0 };
        console.log("bem: ", Object.values(dataset[0].values[field]));
        data.total = Object.values(dataset[0].values[field]).reduce(
            (accSum, num) => accSum + num,
            0
        );
        console.log("dataaa", data);
        fieldsTotal.push(data);
    });

    const sortedDescendingLlist = fieldsTotal.sort((a, b) => b.total - a.total);

    sortedDescendingLlist.forEach((data, i) => {
        if (i == 0) {
            accumulatedStatement = accumulatedStatement.concat(
                `
                 employed in a span of "${data.field}" with ${
                    data.total
                } responses${sortedDescendingLlist.length === 1 ? ". " : ", "}`
            );
        } else if (
            i == sortedDescendingLlist.length - 1 &&
            sortedDescendingLlist.length > 1
        ) {
            accumulatedStatement = accumulatedStatement.concat(
                `. Then, the least waiting time that was experienced by the graduates before employment is ${data.field} with ${data.total} reponses.`
            );
        } else {
            accumulatedStatement = accumulatedStatement.concat(
                `${i == sortedDescendingLlist.length - 2 ? " and" : ""} ${
                    data.field
                } with ${data.total}, `
            );
        }
    });

    return accumulatedStatement;
};

export {
    generateEmployabilityStatement,
    generateCareersAnalysisStatement,
    generateJobRelevanceStatement,
    generateEmploymentTypeStatement,
    generateUnemploymentPeriodStatement,
};
