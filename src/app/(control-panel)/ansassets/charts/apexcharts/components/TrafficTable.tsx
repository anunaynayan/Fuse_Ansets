"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

type Traffic = { timestamp: string; users: number; responseTime: number };

export default function TrafficTable({ data }: { data: Traffic[] }) {
  return (
    <Card >
      <CardContent>
        <Typography variant="h6">
          Upcoming Traffic
        </Typography>
        <TableContainer style={{ maxHeight: 250, overflowY: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell >
                  Time
                </TableCell>
                <TableCell >
                  Users
                </TableCell>
                <TableCell >
                  Response Time (ms)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={i}>
                  <TableCell >
                    {new Date(row.timestamp).toLocaleTimeString()}
                  </TableCell>
                  <TableCell >{row.users}</TableCell>
                  <TableCell >
                    {row.responseTime}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
