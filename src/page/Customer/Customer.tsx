import {
  useState,
  useEffect,
  useCallback,
  FunctionComponent,
  ChangeEvent,
} from "react";
import "./Customer.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";

import axios from "axios";
import Api from "../../api/api";

const Customer: FunctionComponent = () => {
  const [page, setPage] = useState<number>(1);
  const [dataTable, setDataTable] = useState<any>(null);

  const fetchCustomer = useCallback(() => {
    Api.GetCustommer(page).then((response: any) => {
      //   console.log(response);
      setDataTable(response);
    });
  }, [page]);

  useEffect(() => {
    fetchCustomer();
    // const fectData = async () => {
    //   try {
    //     const res: any = await Api.GetCustommer(page);
    //     setDataTable(res.data);
    //     console.log(res.data);
    //     console.log(dataTable);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fectData();
    return () => setPage(1);
  }, []);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    Api.GetCustommer(value).then((response: any) => {
      setDataTable(response);
    });
  };
  if (dataTable) {
    return (
      <div>
        <TableContainer
          sx={{ borderRadius: "10px", minWidth: "100%", overFlow: "auto" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: "10%" }}>
                  No.
                </TableCell>
                <TableCell align="center" sx={{ width: "10%" }}>
                  Picture
                </TableCell>
                <TableCell align="center" sx={{ width: "25%" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ width: "25%" }}>
                  Last Name
                </TableCell>
                <TableCell align="center">E-mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.data.map((data: any, index: number) => (
                <TableRow key={index}>
                  <TableCell align="left">{data.id}</TableCell>
                  <TableCell align="left">
                    <Avatar src={data.avatar} />
                  </TableCell>
                  <TableCell align="left">{data.first_name}</TableCell>
                  <TableCell align="left">{data.last_name}</TableCell>
                  <TableCell align="left">{data.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="pagination-section">
          <Pagination
            variant="outlined"
            shape="rounded"
            count={dataTable.total_pages}
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Customer;
