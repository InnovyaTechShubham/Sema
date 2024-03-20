import React from "react";
import { useFormik } from "formik";
import "./Registration.css";
import { Button } from "react-bootstrap";
import ReactDOM from 'react-dom';
import { registrationSchema } from "./RegistrationSchema";
import { Page, Text, View, Document, StyleSheet,pdf,ReactPDF } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import {jsPDF} from 'jspdf';
//Connecting to the Database





const initialValues = {
  first: "",
  last: "",
  email: "",
  address: "",
  collegename: "",
  
};

const exportPdf = async () => {
  const doc = new jsPDF({ orientation: "landscape" });
  doc.text("Hello world!", 10, 10);
  doc.save("Invoice.pdf");
};
const Registration = () => {
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
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      //alert(
       //`Please Check your Downloads `)
     
       //const styles = StyleSheet.create({
       // page: { backgroundColor: 'tomato' },
       // section: { color: 'white', textAlign: 'center', margin: 30 }
      //});

      // const MyDocument = (
      //  <Document>
         // <Page size={"A4"} orientation = "landscape" style={styles.page} >
          //  <View style={styles.section}>
           //   <Text>{values.first}</Text>
           //   <Text>{values.last}</Text>
              
  
           // </View>
           // <View style={styles.section}>
           //   <Text>We're inside a PDF!</Text>
           // </View>
        //  </Page>
      //  </Document>
    //  );
     
      ////const doc = new jsPDF({ orientation: "vertical" ,textAlign:"center"});
     // doc.text('Your Innovya Details are ', 10, 10);
      //doc.text('Your Name is : '+values.first + " " + values.last, 10, 20);
      //doc.text('Your Email is : '+values.email, 10, 30);
      //doc.text('Your Address is : '+values.address, 10, 40);
     // doc.text('Your College is : '+values.collegename, 10, 50);
      
      //doc.save("Invoice.pdf");
     
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
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mt-4">Enter Your Innovya Details</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            First Name
                          </label>
                          <input
                            id="first"
                            name="first"
                            className="form-control"
                            value={values.first}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.first && touched.first ? (
                            <small className="text-danger mt-1">
                              {errors.first}
                            </small>
                          ) : null}
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Last Name
                          </label>
                          <input
                            id="last"
                            name="last"
                            className="form-control"
                            value={values.last}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.last && touched.last ? (
                            <small className="text-danger mt-1">
                              {errors.last}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (
                            <small className="text-danger mt-1">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Address
                          </label>
                          <input
                            id="address"
                            name="address"
                            className="form-control"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                          />
                          {errors.address && touched.address ? (
                            <small className="text-danger mt-1">
                              {errors.address}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            College Name
                          </label>
                          <input
                            id="collegename"
                            name="collegename"
                            className="form-control"
                            value={values.collegename}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                          />
                          {errors.collegename && touched.collegename ? (
                            <small className="text-danger mt-1">
                              {errors.collegename}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={resetForm}
                          >
                            Clear
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={handleSubmit}
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Please update your details!
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;