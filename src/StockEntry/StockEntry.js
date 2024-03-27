import { StockSchema } from "./StockEntrySchema";
<<<<<<< HEAD
import Axios from "axios"
import { useState, React, CSSProperties } from 'react'
import { useFormik } from "formik";
//import "./HospitalRegistration.css";
import { MenuItem,Button } from "@mui/material";
import { useNavigate, } from "react-router-dom";
import Box from '@mui/material/Box';
import axios from 'axios'
import { Select, FormControl, InputLabel,FormHelperText } from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import LoaderOverlay from '../Loader/LoaderOverlay.js';
import "./StockEntry.css"





=======
import Axios from "axios";
import { useState, useEffect, React, CSSProperties } from "react";
import { useFormik } from "formik";
import { MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import { FormControl, InputLabel, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LoaderOverlay from "../Loader/LoaderOverlay.js";
import "./StockEntry.css";
import fetchSearchResults from "../utils/fetchSearchResults.js";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
>>>>>>> 487ef9576d83fdffca60b1e7e2db59db763c4706

const initialValues = {
    productid: "",
    name:"",
    phone:"",
    batchno: "",
    unitcost: "",
    totalquantity: "",
    doe: "",
    dom: "",
    



};


const StockEntry = () => {
<<<<<<< HEAD
     const [prodnames,setProdNames] = useState([]);
     const [category,setCategory] = useState(null)
     const [manufacturer,setManufacturer] = useState(null)
     const [upc,setUpc] = useState(null)
     const [type,setType] = useState(null)
     const [id,setId] = useState(null)
     const [doe,setDoe] = useState(null)
     const [dom,setDom] = useState(null)
     

=======
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prodnames, setProdNames] = useState([]);
  const [category, setCategory] = useState(null);
  const [manufacturer, setManufacturer] = useState(null);
  const [upc, setUpc] = useState(null);
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [doe, setDoe] = useState(null);
  const [dom, setDom] = useState(null);

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim().length >= 3) {
      try {
        const results = await fetchSearchResults(term);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCategory(product.category);
    setType(product.producttype);
    setUpc(product.upccode);
    setManufacturer(product.manufacturer);
    setId(product._id);
    setName(product.name);
    setSearchTerm("");
    setSearchResults([]);
  };

  const highlightSearchTerm = (text) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <b key={index} style={{ color: "black" }}>
              {part}
            </b>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  const SearchIconWrapper = styled.div`
    padding: 0 16px;
    height: 100%;
    position: absolute;
    display: flex;
    alignitems: center;
  `;

  const SearchContainer = styled.div`
    position: relative;
    width: 100%;
  `;

  const getprod = async () => {
    try {
      const url = `http://localhost:4000/products`;
      const { data } = await axios.get(url);
>>>>>>> 487ef9576d83fdffca60b1e7e2db59db763c4706




    const getprod = async () => {
        try {
            
            const url = `http://localhost:4000/products`;
            const { data } = await axios.get(url);
           
             const prodnamesarray = new Array(data.document.length)
             const cat = new Array(data.document.length)
             const type = new Array(data.document.length)
             const manu = new Array(data.document.length)
             const upc = new Array(data.document.length)
             const id = new Array(data.document.length)

            
            for (let i = 0; i < data.document.length; i++) {
                prodnamesarray[i] = data.document[i].name;
                cat[i] = data.document[i].category;
                type[i] = data.document[i].producttype;
                manu[i] = data.document[i].manufacturer;
                upc[i] = data.document[i].upccode;
                id[i] = data.document[i]._id;
              
                
              }
              
              setProdNames(prodnamesarray);
           // window.location = "/"
           const len = prodnames.length;
            let flag = -1;
            for (let a = 0; a < len; a++) {
                if (prodnames[a] == name) {
                    flag = a;
                    break;
                }
            }
              
              setCategory(cat[flag]);
              setType(type[flag]);
              setUpc(upc[flag]);
              setManufacturer(manu[flag]);
              setId(id[flag]);
           
        } catch (error) {
            console.log(error);
        }
       
    };

    getprod();
    const [open, setOpen] = useState(false);

   
    let [color, setColor] = useState("#ffffff");
    
    let [name, setName] = useState("")

    
   
    
  
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();
    const navigateToVerify = () => {
        navigate('/verify');
    }
<<<<<<< HEAD
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
    } = useFormik({
        initialValues,
        validationSchema: StockSchema,
        onSubmit: (values, action) => {
            console.log("1")
            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            const fulldate = `${year}/${month<10?`0${month}`:`${month}`}/${date}`;

            const stock = {
                "productid": id,
                "name":values.name,
                "phone":values.phone,
                "batchno": values.batchno,
                "unitcost": values.unitcost,
                "totalquantity": values.totalquantity,
                "doe": doe,
                "dom": dom,
                
=======
  };

  getprod();
  const [open, setOpen] = useState(false);
>>>>>>> 487ef9576d83fdffca60b1e7e2db59db763c4706

            };

<<<<<<< HEAD
            const history = {
                "date" :fulldate,
                "productid": id,
                "quantity":values.totalquantity,
                "type":"Product Entry,"

            }

            try {
                console.log("2")
                const loadUsers = async () => {
                    const response = await Axios.post("http://localhost:4000/poststocks", stock);
                    const historyresponse = await Axios.post("http://localhost:4000/posthistory", history);
                    let userData = (await response).data;
                    //let id = (await response).data.id;
                    console.log(response);
                    console.log(historyresponse);
                    console.log(userData);
                    //localStorage.setItem("token", userData)
                    //localStorage.setItem("id", id)
                    window.location = '/stockentry'
                   // setLoading(false);
                   // handleClickOpen();
                   alert("Stock Registered Successfully");
                };
                loadUsers();
=======
  let [name, setName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
>>>>>>> 487ef9576d83fdffca60b1e7e2db59db763c4706

                /*try {
                    return await Axios.get('http://localhost:4000/api/users').then(content => content.data);
                  } catch (error) {
                    throw {
                      code: error.code,
                      message: error.message,
                      responseStatus: error.response?.status,
                      url
                    };
                  }*/
                /*Axios.post('http://localhost:4000/api/users',post).then(response => {
                    localStorage.setItem("token", response.message);
                    console.log(response.message)
                  });*/



                // const { user: res } =  Axios.post(url, post);
                // localStorage.setItem("token", response.message);
                //console.show(response.message)
                // window.location = "/login";
                //return <HospitalRegistration/>
                /* ReactDOM.render(
                     <Router>
                       <Login />
                     </Router>,
                     document.getElementById('root')
                   );*/
            } catch (error) {
                alert("Error Registering Stock")
                console.error("Error creating post:", error);
            }
            action.resetForm();
        },
    });

    return (
        <div>
            <section
                class="p-5 w-100"
                style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
            >
                <div class="row">
                    <div class="col-12">
                        <div class="card text-black" style={{ borderRadius: "25px" }}>
                            <div class="card-body p-md-3">
                                <form onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col">

<<<<<<< HEAD
                                        <p class="text-left h2 mb-3 mt-4">Stock Information:</p>
                                        
                                        <div className="row mt-3">
                                        <InputLabel  id="demo-simple-select-label">Product Name*</InputLabel>
                                                    <Select
                                                         sx={{ backgroundColor:"#FFFF" , height:"80%"   }}
                                                        labelId="demo-simple-select-label"
                                                        id="product-name"
                                                        value={name}
                                                        label="Product Name"
                                                        onChange={e => setName(e.target.value)}

                                                >
                                                    {prodnames.map((value, key) => (
                                                        <MenuItem
                                                            key={key}
                                                            value={value}>
                                                            {value}
                                                        </MenuItem>
                                                    ))}

                                                </Select>
                                            </div>
                                            <div className="row mt-3">
                                                <label htmlFor="first" className="form-label">
                                                    Product UPC/Product Name/Manufacturer
                                                </label>
                                                <input
                                                    id="firstname"
                                                    name="firstname"
                                                    className="form-control"
                                                    placeholder={upc}
                                                    value={values.upccode}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    disabled={true}
                                                />
                                                {errors.firstname && touched.firstname ? (
                                                    <small className="text-danger mt-1">
                                                        {errors.firstname}
                                                    </small>
                                                ) : null}
                                            </div>
                                            
                                            <div className="row mt-3">
                                                <label htmlFor="last`" className="form-label">
                                                    Manufacturer
                                                </label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    className="form-control"
                                                    value={values.phone}
                                                    placeholder={manufacturer}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                   
                                                    disabled={true}
                                                />
                                                {errors.phone && touched.phone ? (
                                                    <small className="text-danger mt-1">
                                                        {errors.phone}
                                                    </small>
                                                ) : null}
                                            </div>
                                            <div className="row mt-3">
                                               
                                                    <label htmlFor="first" className="form-label">
                                                        Product Type
                                                    </label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        value={values.email}
                                                        placeholder={type}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={true}
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <small className="text-danger mt-1">
                                                            {errors.email}
                                                        </small>
                                                    ) : null}
                                                

                                            </div>
                                            <div className="row mt-3">
                                               
                                                    <label htmlFor="first" className="form-label">
                                                        Product Category/Sub Category
                                                    </label>
                                                    <input
                                                        id="address"
                                                        name="address"
                                                        className="form-control"
                                                        placeholder = {category}
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="text"
                                                        disabled={true}
                                                    />
                                                    {errors.address && touched.address ? (
                                                        <small className="text-danger mt-1">
                                                            {errors.address}
                                                        </small>
                                                    ) : null}
                                                
                                            </div>
                                        
                                    </div>
                                    <br/>
                                    <div class="col md-5 ">
                                    <br />   
                                    
                                       
                                       

                                        <div class="row  ">
                                            
                                           
                                        <Box
                                                sx={{
                                                    border: "1px solid black",
                                                    borderRadius: "5px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    width: "100%",
                                                    margin: "10px",
                                                    height: 500,
                                                }}
                                            >
                                                <img
                                                    width="96"
                                                    height="96"
                                                    src="https://img.icons8.com/color/96/add-image.png"
                                                    alt="add-image"
                                                />
                                            </Box>
                                        </div>
                                        <br />


                                        <div class="row align-items-right">
                                        
                                            <div class="row">
                                            
                                                

                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div class="row">
                                    <div class="row">


                                        <p class="text-left h2 mb-3 mt-4">Vendor Details</p>
                                    
                                        <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label">
                                                        Name*
                                                    </label>
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        className="form-control"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.name && touched.name ? (
                                                        <small className="text-danger mt-1">
                                                            {errors.name}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label">
                                                        Phone Number*
                                                    </label>
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        className="form-control"
                                                        value={values.phone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="text"
                                                    />
                                                    {errors.phone && touched.phone ? (
                                                        <small className="text-danger mt-1">
                                                            {errors.phone}
                                                        </small>
                                                    ) : null}
                                                </div>
                                               
                                            </div>
                                            
                                        <p class="text-left h2 mb-3 mt-4">Stock Details</p>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label">
                                                        Batch Number*
                                                    </label>
                                                    <input
                                                        id="batchno"
                                                        name="batchno"
                                                        className="form-control"
                                                        value={values.batchno}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.batchno && touched.batchno ? (
                                                        <small className="text-danger mt-1">
                                                            {errors.batchno}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label">
                                                        Unit Cost*
                                                    </label>
                                                    <input
                                                        id="unitcost"
                                                        name="unitcost"
                                                        className="form-control"
                                                        value={values.unitcost}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="text"
                                                    />
                                                    {errors.unitcost && touched.unitcost ? (
                                                        <small className="text-danger mt-1">
                                                            {errors.unitcost}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col text-left">
                                                    <label htmlFor="last`" className="form-label">
                                                        Total Quantity*
                                                    </label>
                                                    <input
                                                        id="totalquantity"
                                                        name="totalquantity"
                                                        className="form-control"
                                                        value={values.totalquantity}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="text"
                                                    />
                                                    {errors.totalquantity && touched.totalquantity ? (
                                                        <small className="text-danger mt-1">
                                                            {errors.totalquantity}
                                                        </small>
                                                    ) : null}
                                                </div>
                                            </div>
                                           
                                            <br/>
                                            <br/>
                                            <div className="row mt-3 justify-items-center">


                                                <div className="col text-center">
                                                       
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="Date of Manufacturing*"
                                                        value={dom}
                                                        onChange={(newValue) => setDom(newValue)}
                                                    />
                                                    </LocalizationProvider>
                                                    </div>
                                                <div className="col text-center">
                                                
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="Date of Expiry*"
                                                        value={doe}
                                                        backgroundColor="#ffffff"
                                                        onChange={(newValue) => setDoe(newValue)}
                                                    />
                                                    </LocalizationProvider>
                                                </div>
                                            </div>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <div class="row justify-content-around">
                                                <br/>
                                                <div class="col-3">
                                                <Button variant='outlined' onClick= {resetForm} size='large' >Clear</Button>
                                                </div>
                                                <br/>
                                                <br/>
                                                <div class="col-3">
                                                <Button variant='contained' onClick= {handleSubmit} size='large'>Add Stock</Button>
                                                </div>
                                            </div>
                                            

                                        
                                    </div>


                                </div>
                                </form>
                            </div>
                        </div>
=======
                      <div className="row mt-3">
                        <InputLabel id="demo-simple-select-label">
                          Product Name*
                        </InputLabel>
                        <div style={{ position: "relative" }}>
                          <SearchIcon
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "19px",
                              transform: "translateY(-50%)",
                            }}
                          />
                          <input
                            placeholder="Search Your Product"
                            aria-label="search"
                            value={searchTerm}
                            onChange={(e) => handleSearchChange(e)}
                            style={{
                              width: "100%",
                              paddingLeft: "40px",
                              paddingTop: "8px",
                              paddingBottom: "8px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          />
                          {searchResults.length > 0 && (
                            <div
                              style={{
                                position: "absolute",
                                backgroundColor: "white",
                                width: "100%",
                                zIndex: 1,
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                                maxHeight: "200px",
                                overflowY: "auto",
                              }}
                            >
                              {searchResults.map((product) => (
                                <div
                                  key={product._id}
                                  style={{
                                    padding: "8px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                  }}
                                  onClick={() => handleProductSelect(product)}
                                >
                                  {highlightSearchTerm(product.name)}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="row mt-3">
                        <label htmlFor="first" className="form-label">
                          Product UPC/Product Name/Manufacturer
                        </label>
                        <input
                          id="firstname"
                          name="firstname"
                          className="form-control"
                          placeholder={upc}
                          value={values.upccode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={true}
                        />
                        {errors.firstname && touched.firstname ? (
                          <small className="text-danger mt-1">
                            {errors.firstname}
                          </small>
                        ) : null}
                      </div>

                      <div className="row mt-3">
                        <label htmlFor="last`" className="form-label">
                          Manufacturer
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          className="form-control"
                          value={values.phone}
                          placeholder={manufacturer}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={true}
                        />
                        {errors.phone && touched.phone ? (
                          <small className="text-danger mt-1">
                            {errors.phone}
                          </small>
                        ) : null}
                      </div>
                      <div className="row mt-3">
                        <label htmlFor="first" className="form-label">
                          Product Type
                        </label>
                        <input
                          id="email"
                          name="email"
                          className="form-control"
                          value={values.email}
                          placeholder={type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={true}
                        />
                        {errors.email && touched.email ? (
                          <small className="text-danger mt-1">
                            {errors.email}
                          </small>
                        ) : null}
                      </div>
                      <div className="row mt-3">
                        <label htmlFor="first" className="form-label">
                          Product Category/Sub Category
                        </label>
                        <input
                          id="address"
                          name="address"
                          className="form-control"
                          placeholder={category}
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          disabled={true}
                        />
                        {errors.address && touched.address ? (
                          <small className="text-danger mt-1">
                            {errors.address}
                          </small>
                        ) : null}
                      </div>
>>>>>>> 487ef9576d83fdffca60b1e7e2db59db763c4706
                    </div>
                </div>

            </section>
        </div>
    );
};

export default StockEntry;