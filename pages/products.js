import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Products from "../components/Products";
import { motion } from "framer-motion";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function Productss({ data }) {
  const [typeOfDressFilter, setTypeOfDressFilter] = useState("all"); //Type Of Dress Filter
  const [sizeFilter, setsizeFilter] = useState("all"); //Type Of Size Filter
  const [fitlertedData, setfitlertedData] = useState(data); //Filtered Data

  useEffect(() => {
    let product = data;
    product =
      typeOfDressFilter != "all"
        ? product.filter((p) => p.details.type === typeOfDressFilter)
        : product;
    product =
      sizeFilter != "all"
        ? product.filter((p) => p.details.size === sizeFilter)
        : product;
    return setfitlertedData(product);
  }, [sizeFilter, typeOfDressFilter]); //Update data when sizeFilter or typeOfDressFilter changes

  return (
    <Layout>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Stack direction="row" spacing={2}>
          <Item sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "25vh",
                height: "300px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack direction="column" spacing={2} sx={{ width: "30%" }}>
                <InputLabel>Type</InputLabel>
                <FormControl sx={{ minWidth: 120 }}>
                  <Select
                    onChange={(e) => setTypeOfDressFilter(e.target.value)}
                    value={typeOfDressFilter}
                    displayEmpty
                    sx={{ height: 40, borderRadius: 3 }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="t-shirt">T-shirt</MenuItem>
                    <MenuItem value="dress shirts">Dress Shirts</MenuItem>
                  </Select>
                </FormControl>
                <InputLabel>Size</InputLabel>
                <FormControl sx={{ minWidth: 120, height: 30 }}>
                  <Select
                    value={sizeFilter}
                    onChange={(e) => setsizeFilter(e.target.value)}
                    displayEmpty
                    sx={{ height: 40, borderRadius: 3 }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="xsmall">Xsmall</MenuItem>
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Box>
          </Item>
          <Item direction="row">
            <motion.div>
              <p
                style={{ marginLeft: "25px", fontWeight: "bold", fontSize: 17 }}
              >
                Products
              </p>
            </motion.div>
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                flexWrap: "wrap",
                margin: "10px",
              }}
            >
              {fitlertedData?.map((product) => {
                return <Products key={product.id} product={product} />;
              })}
            </Box>
          </Item>
        </Stack>
      </motion.div>
    </Layout>
  );
}

export default Productss;

export async function getStaticProps() {
  const res = await fetch(
    "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
  );
  const data = await res.json();
  return {
    props: {
      //data fetched from server
      data,
      revalidate: 100000,
    },
  };
}
