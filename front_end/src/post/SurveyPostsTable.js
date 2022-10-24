import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { ButtonTableColumn } from "./ButtonTableColumn";
import { useFetchSurvey } from "../hooks/useFetchSurveys";
import SurveyFormInputContext from "../context/SurveyFormInputContext";
import DeleteDataContext from "../context/DeleteDataContext";
import { useContext } from "react";
import { client } from "../api/api";

const SurveyPostsTable = ({
    setDisplayModalEditSurvey,
    setDisplayModalDeleteNotice,
}) => {
    const cols = ["Title", "Posted By", "Timestamp", ""];
    const selectedKeys = ["title", "postedBy", "createdAt"];
    const { surveyList, isLoading } = useFetchSurvey();
    const { setSurveyFormInput } = useContext(SurveyFormInputContext);
    const { setDataToDelete } = useContext(DeleteDataContext);

    const handleEditCLick = (e) => {
        const fetchSurveyData = async () => {
            try {
                const surveyId = e.target.parentNode.parentNode.id;
                const res = await client.get(`/survey/${surveyId}`);
                console.log("survey data: ", res.data);
                setSurveyFormInput({
                    title: res.data.title,
                    link: res.data.link,
                    description: res.data.description,
                    college: res.data.college,
                    endpoint: `/survey/update/${surveyId}`,
                });

                setDisplayModalEditSurvey(true);
                console.log("Survey Response: ", res.data);
            } catch (err) {
                alert(err);
                console.log(err);
            }
        };

        fetchSurveyData();
    };

    const handleDeleteClick = (e) => {
        console.log("Invoked at SurveyPostTable");
        const surveyId = e.target.parentNode.parentNode.id;
        setDataToDelete({
            endpoint: `/survey/delete/${surveyId}`,
        });
        setDisplayModalDeleteNotice(true);
    };

    return (
        <Table name="Posted Survey">
            <Columns columns={cols} />
            {isLoading ? (
                "loading"
            ) : (
                <Row
                    data={surveyList}
                    selectedKeys={selectedKeys}
                    actionColumn={
                        <ButtonTableColumn
                            setDisplayModalEdit={setDisplayModalEditSurvey}
                            setDisplayModalDeleteNotice={
                                setDisplayModalDeleteNotice
                            }
                            handleEditCLick={handleEditCLick}
                            handleDeleteClick={handleDeleteClick}
                        />
                    }
                />
            )}
        </Table>
    );
};

export { SurveyPostsTable };
