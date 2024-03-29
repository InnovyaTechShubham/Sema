import React, { useCallback, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import data from "./DataSource.json";
import { doc, jsPDF } from "jspdf";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "../Dashboard/Dashboard.css";
import "../Dashboard/Components/home.css";
import axios from "axios";
import { Typography } from "@mui/material";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridFilterAltIcon,
} from "@mui/x-data-grid";

//Random Row Details Generator
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
import { Checkbox } from "@mui/material";
import { BsFilter } from "react-icons/bs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//Roles Array from which Randomly Generate Roles
const roles = ["Market", "Finance", "Development"];
const randomRole = () => {
  return randomArrayItem(roles);
};

//Add The required Information
function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  //Function Not Working ((Later Add API to add new Record))
  //Function to add new Record
  const handleClick = () => {
    const id = randomId(); // ID to be introduced here for New Record
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        name: "Name?",
        companyName: "Company Name?",
        type: "Select",
        email: "Your Email",
        city: "Select",
        state: "Select",
        contactNumber: "Your Phone",
        gstNumber: "GST No",
        productType: "Select",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  //AddRecord Button
  return <GridToolbarContainer></GridToolbarContainer>;
}

const FilterDialog = ({
  open,
  onClose,
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory,
  filterVendor,
  setFilterVendor,
  filterEmergencyType,
  setFilterEmergencyType,
  rows, // Add the 'rows' prop here
  setRows,
  handleCloseFilterDialog,
  openFilterDialog,
  getCategoryOptions,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  subCategories,
  filterOrigin,
  setFilterOrigin,
}) => {
  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
    setFilterCategory([]); // Reset the category filter when changing the type
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setFilterCategory(selectedCategory);
    setSelectedCategory(selectedCategory);
    setSelectedSubCategory(""); // Reset sub-category when category changes
  };

  const handleVendorChange = (event) => {
    setFilterVendor(event.target.value);
  };

  const handleEmergencyTypeChange = (event) => {
    setFilterEmergencyType(event.target.value);
  };

  const handleApplyFilter = useCallback(() => {
    const filteredData = rows.filter((row) => {
      const typeMatch =
        filterType === "" ||
        row.producttype.toLowerCase() === filterType.toLowerCase();
      const categoryMatch =
        filterCategory.length === 0 || filterCategory.includes(row.category);
      const vendorMatch =
        filterVendor === "" ||
        row.manufacturer.toLowerCase().includes(filterVendor.toLowerCase());
      const emergencyTypeMatch =
        filterEmergencyType === "" ||
        row.emergencytype.toLowerCase() === filterEmergencyType.toLowerCase();
      const subCategoryMatch =
        selectedSubCategory === "" ||
        row.subcategory.toLowerCase() === selectedSubCategory.toLowerCase();
      const originMatch =
        filterOrigin === "" ||
        row.origin.toLowerCase() === filterOrigin.toLowerCase();

      return (
        typeMatch &&
        categoryMatch &&
        vendorMatch &&
        emergencyTypeMatch &&
        originMatch &&
        subCategoryMatch
      );
    });

    setRows(filteredData);
    handleCloseFilterDialog();
  }, [
    rows,
    filterType,
    filterCategory,
    filterVendor,
    filterEmergencyType,
    selectedSubCategory,
    filterOrigin,
    handleCloseFilterDialog,
    setRows,
  ]);

  return (
    <Dialog open={openFilterDialog} onClose={handleCloseFilterDialog}>
      <DialogTitle>Filter</DialogTitle>
      <DialogContent>
        <div>
          <Typography>Type</Typography>
          <RadioGroup row value={filterType} onChange={handleTypeChange}>
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel
              value="pharmaceuticals"
              control={<Radio />}
              label="Pharma"
            />
            <FormControlLabel
              value="equipments"
              control={<Radio />}
              label="Equipment"
            />
          </RadioGroup>
        </div>
        <div>
          <Typography placeholder="Choose">Category</Typography>
          <Select
            multiple
            value={filterCategory}
            onChange={handleCategoryChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {getCategoryOptions(filterType).map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <Typography>Sub-Category</Typography>
          <Select
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            renderValue={(selected) => selected}
          >
            {subCategories[selectedCategory] && // Access 'subCategories' directly
              subCategories[selectedCategory].map((subcategory) => (
                <MenuItem key={subcategory.value} value={subcategory.value}>
                  {subcategory.label}
                </MenuItem>
              ))}
          </Select>
        </div>
        <div>
          <Typography>Vendor</Typography>
          <TextField
            value={filterVendor}
            onChange={handleVendorChange}
            placeholder="Search vendor"
            fullWidth
          />
        </div>
        <div>
          <Typography>Origin</Typography>
          <Select
            value={filterOrigin}
            onChange={(e) => setFilterOrigin(e.target.value)}
            renderValue={(selected) => selected}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={"india"}>India</MenuItem>
            <MenuItem value={"usa"}>USA</MenuItem>
            <MenuItem value={"korea"}>Korea</MenuItem>
            <MenuItem value={"germany"}>Germany</MenuItem>
            <MenuItem value={"france"}>France</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </div>

        <div>
          <Typography>Emergency type</Typography>
          <RadioGroup
            row
            value={filterEmergencyType}
            onChange={handleEmergencyTypeChange}
          >
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel value="cr" control={<Radio />} label="Critical" />
            <FormControlLabel value="is" control={<Radio />} label="Issued" />
          </RadioGroup>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseFilterDialog}>Cancel</Button>
        <Button onClick={handleApplyFilter}>Apply</Button>
      </DialogActions>
    </Dialog>
  );
};

export default function FullFeaturedCrudGrid() {
  const [subCategories, setSubCategories] = React.useState({
    Pharmaceuticals: [
      { value: "Cardiovascular", label: "Cardiovascular Medications" },

      { value: "Hormones", label: "Hormones" },
      { value: "Inhalable", label: "Inhalable Medications" },
      { value: "Oral", label: "Oral Medications" },
      { value: "Topical", label: "Topical Medications" },
    ],
    Dietary: [
      { value: "Amino", label: "Amino Acid Supplements" },
      { value: "Probiotics", label: "Prebiotics and Prebiotics" },
      { value: "Skincare", label: "Skincare Neutraceuticals" },
      { value: "Supplements", label: "Supplements" },
      { value: "Vitamins", label: "Vitamins and Minerals" },
    ],
    Ayush: [
      { value: "Ayurvedic", label: "Ayurvedic Medicines" },
      { value: "Herbal", label: "Herbal Extracts" },
      { value: "HerbalS", label: "Herbal Supplements" },
    ],
    Medical: [
      { value: "Cathelers", label: "Cathelers and Tubes" },
      { value: "Dental", label: "Dental Consumables" },
      { value: "Infection", label: "Infection Control Consumables" },
      { value: "Laboratory", label: "Laboratory Consumables" },
      { value: "Radiology", label: "Radiology Consumables" },
      { value: "Respiratory", label: "Respiratory Consumables" },
      { value: "Surgical", label: "Surgical Consumables" },
      { value: "Wound", label: "Wound Care Supplies" },
    ],
    Furniture: [
      { value: "Bed", label: "Patient Bed Furniture" },
      { value: "Seating", label: "Seating Furniture" },
      { value: "Storage", label: "Storage Furniture" },
      { value: "Diagnostic Furniture", label: "Diagnostic Furniture" },
      { value: "Patient Room Furniture", label: "Patient Room Furniture" },
      { value: "Rehabilitation Furniture", label: "Rehabilitation Furniture" },
      { value: "Laboratory Furniture", label: "Laboratory Furniture" },
      { value: "Waiting Area Furniture", label: "Waiting Area Furniture" },
      { value: "Surgical Room Furniture", label: "Surgical Room Furniture" },
      { value: "Privacy Furniture", label: "Privacy Furniture" },
    ],
    Instruments: [
      { value: "Diagnostic Instruments", label: "Diagnostic Instruments" },
      { value: "Surgical Instruments", label: "Surgical Instruments" },
      { value: "Endoscopy Instruments", label: "Endoscopy Instruments" },
      { value: "Orthopedic Instruments", label: "Orthopedic Instruments" },
      { value: "Dental Instruments", label: "Dental Instruments" },
      {
        value: "Gynecological and Obstetric Instruments",
        label: "Gynecological and Obstetric Instruments",
      },
      { value: "Cardiac Instruments", label: "Cardiac Instruments" },
      {
        value: "Microsurgical Instruments",
        label: "Microsurgical Instruments",
      },
      {
        value: "Neurosurgical Instruments",
        label: "Neurosurgical Instruments ",
      },
      { value: "Urological Instruments", label: "Urological Instruments" },
    ],

    Equipments: [
      { value: "Diagnostic Equipment", label: "Diagnostic Equipment" },
      { value: "Monitoring Equipment", label: "Monitoring Equipment" },
      { value: "Therapeutic Equipment", label: "Therapeutic Equipment" },
      { value: "Surgical Equipment", label: "Surgical Equipment" },
      { value: "Rehabilitation Equipment", label: "Rehabilitation Equipment" },
      { value: "Patient Care Equipment", label: "Patient Care Equipment" },
      { value: "Laboratory Equipment", label: "Laboratory Equipment" },
      {
        value: "Emergency Medical Equipment",
        label: "Emergency Medical Equipment",
      },
      {
        value: "Radiation Therapy Equipment",
        label: "Radiation Therapy Equipment",
      },
    ],
  });

  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState("");

  const [filterOrigin, setFilterOrigin] = React.useState("");

  const [rows, setRows] = React.useState([...data]);
  useEffect(() => {
    const getprod = async () => {
      try {
        const url = `http://localhost:4000/products`;
        const { data } = await axios.get(url);
        setRows(data.document);
      } catch (error) {
        console.log(error);
      }
    };

    getprod();
  }, []); // Empty dependency array ensures this effect runs only once
  //const [rows, setRows] = React.useState(data); //Process data without $oid
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [count, setCount] = React.useState(0);

  // Add these state variables for filter options
  const [filterType, setFilterType] = React.useState("");
  const [filterCategory, setFilterCategory] = React.useState([]);
  const [filterVendor, setFilterVendor] = React.useState("");
  const [filterEmergencyType, setFilterEmergencyType] = React.useState("");

  const [openFilterDialog, setOpenFilterDialog] = React.useState(false);

  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };

  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  const getCategoryOptions = (type) => {
    const pharmaceuticalCategories = [
      "Pharmaceuticals",
      "Dietary",
      "Ayush",
      "Medical",
    ];
    const equipmentCategories = ["Furniture", "Instruments", "Equipments"];

    if (type === "pharmaceuticals") {
      return pharmaceuticalCategories;
    } else if (type === "equipments") {
      return equipmentCategories;
    } else {
      return [];
    }
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row._id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row._id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row._id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const onRowsSelectionHandler = (id) => {
    const selectedIDs = new Set(id);
    const selectedRowsData = id.map((id) => rows.find((row) => row.id === id));
    setCount(selectedIDs);
  };
  //On selection We Get The Row Data //Print Button
  const handlePrint = () => {
    console.log(count);
    if (count.valueOf(0) !== 0) {
      console.log(count);
      const myIterator = count.values();
      let pdftext = "";
      for (const entry of myIterator) {
        for (var jsonentry of data) {
          pdftext += "\n";
          if (entry === jsonentry._id) {
            // pdftext += "Name is " + jsonentry.name + " " +
            // "Company Name is " + jsonentry.companyName + "" +
            // "From City " + jsonentry.city + "" +
            // "Whose contact is " + jsonentry.contactNumber;
          }
        }
      }
      const doc = new jsPDF({ orientation: "vertical", textAlign: "center" });
      doc.text("Your Selected Row IDs are ", 10, 10);
      if (pdftext != "") {
        doc.text(pdftext, 20, 20);
        doc.save("Invoice.pdf");
      } else {
        alert("Please Select The Rows To Generate PDF");
      }
      window.location.reload(false);
    } else {
      alert("Please Select The Rows To Generate PDF");
    }
  };

  //Defining The columns from the JSON Object and include the Last two Buttons in that.
  const columns = [
    {
      field: "producttype",
      headerName: "Product Type",
      headerAlign: "left",
      width: 150,
      align: "left",

      editable: true,
    },
    {
      field: "name",
      headerName: "Product Name",

      width: 200,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",

      width: 120,
      editable: true,
    },
    {
      field: "manufacturer",
      headerName: "Manufacturer",

      width: 150,
      editable: true,
    },
    {
      field: "origin",
      headerName: "Origin",

      width: 150,
      editable: true,
    },

    {
      field: "category",
      headerName: "Category",
      field: "subcategory",
      headerName: "Sub Category",
      width: 150,
      editable: true,
    },
    {
      field: "emergencytype",
      headerName: "Emergency Type",
      width: 150,
      editable: true,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <main className="main-container">
      <div>
        <section
          class="p-5 w-100"
          style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
        >
          <div class="row">
            <div class="col">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-3"></div>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    "& .actions": {
                      color: "text.secondary",
                    },
                    "& .textPrimary": {
                      color: "text.primary",
                    },
                  }}
                >
                  <div className="row mt-3">
                    <div className="col">
                      <Stack direction="row" spacing={5}>
                        <h4>Total Products</h4>
                      </Stack>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="col">
                    <Button
                      color="primary"
                      startIcon={<BsFilter />}
                      variant="contained"
                      onClick={handleOpenFilterDialog}
                    >
                      Filter
                    </Button>
                    <FilterDialog
                      open={openFilterDialog}
                      onClose={handleCloseFilterDialog}
                      filterType={filterType}
                      setFilterType={setFilterType}
                      filterCategory={filterCategory}
                      setFilterCategory={setFilterCategory}
                      filterVendor={filterVendor}
                      setFilterVendor={setFilterVendor}
                      filterEmergencyType={filterEmergencyType}
                      setFilterEmergencyType={setFilterEmergencyType}
                      rows={rows} // Pass the 'rows' state as a prop
                      setRows={setRows}
                      handleCloseFilterDialog={handleCloseFilterDialog}
                      openFilterDialog={openFilterDialog}
                      getCategoryOptions={getCategoryOptions}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                      selectedSubCategory={selectedSubCategory}
                      setSelectedSubCategory={setSelectedSubCategory}
                      subCategories={subCategories}
                      filterOrigin={filterOrigin}
                      setFilterOrigin={setFilterOrigin}
                    />

                    <Button
                      color="primary"
                      startIcon={<SaveIcon />}
                      variant="contained"
                      onClick={handlePrint}
                    >
                      Export To PDF
                    </Button>
                  </div>

                  <br />
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row: any) => row._id}
                    editMode="row"
                    checkboxSelection
                    onRowSelectionModelChange={(id) =>
                      onRowsSelectionHandler(id)
                    }
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slots={{
                      toolbar: EditToolbar,
                    }}
                    slotProps={{
                      toolbar: { setRows, setRowModesModel },
                    }}
                  />
                </Box>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
