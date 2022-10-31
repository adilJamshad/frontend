import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Logo
            </Typography>
            <Box sx={{ mx: 2 }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Overview
              </Link>
            </Box>
            <Box sx={{ mx: 2 }}>
              <Link
                to="/campaigns"
                style={{ color: "white", textDecoration: "none" }}
              >
                Campaigns
              </Link>
            </Box>
            <Box sx={{ mx: 2 }}>
              <Link
                to="/create-campaigns"
                style={{ color: "white", textDecoration: "none" }}
              >
                Create Campaigns
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
