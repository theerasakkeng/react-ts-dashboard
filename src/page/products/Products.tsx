import { FC, useEffect, useState } from "react";
import "./Products";

import Grid from "@mui/material/Unstable_Grid2";

import ProductCard from "../../components/card/ProductCard";

import { useLoading } from "../../context/loading";

import Api from "../../api/api";

const Products: FC = () => {
  const { show, hide } = useLoading();

  const [products, setProducts] = useState<any>([]);
  const [urlImage, setUrlImage] = useState<string>("");

  const getProductsData = async () => {
    show();
    try {
      let res: any = await Api.GetProduct();
      console.log(res);
      setProducts(res);
    } catch (err) {
      console.log(err);
    } finally {
      hide();
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  const getUrlImage = (url: string) => {
    setUrlImage(url);
    console.log(urlImage);
  };

  const productElements = products.map((item: any) => {
    return (
      <Grid xs={12} sm={6} md={3} lg={2} key={item.id}>
        {products.length > 0 && <ProductCard productData={item} />}
      </Grid>
    );
  });

  const setUrl = (url: string) => {};

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={1}>
        {productElements}
      </Grid>
    </div>
  );
};

export default Products;
