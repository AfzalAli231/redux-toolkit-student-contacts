import { useEffect } from "react";
import {
  Paper,
  Typography,
} from "@material-ui/core";
import { getStudent, clearStudent } from "../../redux/features/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student.student);
  useEffect(() => {
    //eslint-disable-next-line
    dispatch(getStudent(params.id));
    return () => {
      //eslint-disable-next-line
      dispatch(clearStudent());
    };
  },[]);
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {student.firstName} {student.lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {student.phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {student.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {student.address}
      </Typography>
    </Paper>
  );
};

export default Student;
