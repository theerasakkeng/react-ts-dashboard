import { useState, useEffect, useCallback, FC, ChangeEvent } from "react";
import "./Customer.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";

import { useLoading } from "../../context/loading";
import axios from "axios";
import Api from "../../api/api";

const Customer: FC = () => {
  const { show, hide } = useLoading();

  const [page, setPage] = useState<number>(1);
  const [dataTable, setDataTable] = useState<any>(null);

  const fetchCustomer = (page: number) => {
    show();
    Api.GetCustommer(page)
      .then((response: any) => {
        //   console.log(response);
        setDataTable(response);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          hide();
        }, 3000);
      });
  };

  useEffect(() => {
    fetchCustomer(page);
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
    fetchCustomer(value);
  };
  if (dataTable) {
    return (
      <div>
        <TableContainer
          sx={{
            borderRadius: "10px 10px 0 0",
            minWidth: "100%",
            overFlow: "auto",
            position:"relative"
          }}
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
