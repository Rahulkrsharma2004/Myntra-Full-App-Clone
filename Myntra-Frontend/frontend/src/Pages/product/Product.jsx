import { useEffect, useState } from "react";
import "./Product.css";
import ProductStr from "../../Components/Product/ProductStr";
import { Select, Skeleton, Checkbox } from "antd";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Box,
  VStack,
  Stack,
  RadioGroup,
  Divider,
  Text,
  CheckboxGroup,
  HStack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const search = useLocation().search;
  const [searchParams, setSearchParams] = useSearchParams();
  const category = new URLSearchParams(search).get("category");
  const [prevCategory, setPrevCategory] = useState(category);
  const [proLoading, setProLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPrevCategory(category);
    setPage(1);
  }, [prevCategory, category]);

  const sortOptions = [
    {
      label: "Low to High",
      value: "asc",
    },
    {
      label: "High to Low",
      value: "desc",
    },
  ];

  const getProducts = async () => {
    try {
      let endpoint = "https://myntra-app-backend.vercel.app/products/";
      const params = new URLSearchParams();

      if (category && category !== "") {
        params.append("category", category);
      }
      params.append("page", page);

      console.log(`Fetching products from: ${endpoint}?${params.toString()}`);

      const response = await axios.get(`${endpoint}?${params.toString()}`, {
        withCredentials: true,
      });

      console.log("API Response:", response.data);

      setProducts(response.data.products);

      setTimeout(() => {
        setProLoading(false);
      }, 5000);
    } catch (error) {
      console.log("Error fetching products:", error);
      setProLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category, page]);



  // filter functionality


  const handleSortChange = (value) => {
    console.log("Selected Sort By:", value);
    setSortBy(value);
  };

  const handleType = (el) => {
    setSearchParams({ ...searchParams, type: el });
  };

  const handleCategory = (el) => {
    setSearchParams({ ...searchParams, category: el });
  };

  const handleBrand = (el) => {
    setSearchParams({ ...searchParams, brand: el });
  };

  const handleSelectAllCategories = (checked) => {
    if (checked) {
      setSearchParams({
        ...searchParams,
        category: [
          "TShirts",
          "Jeans",
          "Kurta Sets",
          "Trousers",
        ],
      });
    } else {
      setSearchParams({ ...searchParams, category: [] });
    }
  };








  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "asc") {
      return a.price - b.price;
    } else if (sortBy === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="productCon">
      <div className="proContainer">
        <p className="proNavigation">
          <span>Home /</span> {category ? category : ""}
        </p>
        <div className="proSort">
          <Select
            size="large"
            placeholder="Sort-By-Price"
            className="sortBy"
            style={{
              width: 200,
              border: "2px solid gray",
              color: "black",
              borderRadius: "8px",
              outline: "none",
            }}
            options={sortOptions}
            onChange={handleSortChange}
          />
        </div>
      </div>
      <div className="proBox">
        <div className="proFilters">
          <VStack
            alignItems={"flex-start"}
            spacing={1}
            position={"sticky"}
            bottom={"1000px"}
          >
            <HStack mt={"8px"} pl={4} fontWeight={700}>
              FILTERS
            </HStack>
            <Divider />
            <Box pl={4}>
              <RadioGroup
                onChange={handleType}
                value={searchParams.get("type")}
                size={"sm"}
              ></RadioGroup>
            </Box>
            <Divider />
            <Box pl={4}>
              <Text
                fontSize={"14px"}
                fontWeight={700}
                color="#282c3f"
                textAlign={"left"}
              >
                CATEGORIES
              </Text>
              <CheckboxGroup
                size={"sm"}
                onChange={handleCategory}
                defaultValue={searchParams.getAll("category")}
              >
                <VStack alignItems={"flex-start"} mt={"3"} spacing={4}>
                  <Checkbox value="TShirts">TShirts</Checkbox>
                  <Checkbox value="Jeans">Jeans</Checkbox>
                  <Checkbox value="Kurta Sets">Kurta Sets</Checkbox>
                  <Checkbox value="Trousers">Trousers</Checkbox>
                  <Checkbox
                    value="All"
                    onChange={(e) =>
                      handleSelectAllCategories(e.target.checked)
                    }
                  >
                    Select All
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
            <Divider />
            <Box pl={4}>
              <Text
                fontSize={"14px"}
                fontWeight={700}
                color="#282c3f"
                textAlign={"left"}
              >
                BRAND
              </Text>
              <CheckboxGroup
                size={"sm"}
                onChange={handleBrand}
                defaultValue={searchParams.getAll("brand")}
              >
                <Stack alignItems={"flex-start"} mt={1} spacing={1}>
                  <Checkbox value={"Puma"}>Puma</Checkbox>
                  <Checkbox value={"Levis"}>Levis</Checkbox>
                  <Checkbox value={"Mewar"}>Mewar</Checkbox>
                  <Checkbox value={"Turtle"}>Turtle</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
          </VStack>
        </div>
        {proLoading ? (
          <div className="proGrid">
            {[...Array(30)].map((_, ind) => (
              <div key={ind}>
                <Skeleton active />
              </div>
            ))}
          </div>
        ) : (
          <div className="proGrid">
            {sortedProducts.map((pro, ind) => (
              <ProductStr product={pro} key={ind} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
