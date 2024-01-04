// MultiStep.js
import React, { useRef, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  makeStyles,
  Grid,
  Typography,
  Hidden,
  Card, 
 
} from '@material-ui/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { FormItem } from '../FormItem';
import {  Row, Col, Form } from "react-bootstrap";
import VideoRecording from '../viditure';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Sign from '../Signature';
import "../../styles/form.css";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepContainer: {
    marginTop: theme.spacing(3),
    // width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3),
  },
}));

// export const length=6;




const LostOrStoelnForm = ({ formType, index, onPageUpdate, pagesAnswers, setViditure,prevButton, nextButton, setStep, handleStart, submitted }) => {
  const classes = useStyles();
  const totalPagesCount = 4;
  localStorage.setItem('pageLength',totalPagesCount);

  const pdfRef = useRef();

  const downloadPDF = () => {
    
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
     let pdf = new jsPDF('p', 'px', [1600, 1131]);
			pdf.addImage(imgData, 'PNG', 15, 15, 1040, 996);
			pdf.save('etpass-lost-or-stolen-application.pdf');
   
     

    })
  }
const steplabel = ['Personal Details', 'Address', 'Passport information', 'Viditure', 'Summary', 'Payment'];
   const isFormValid = () => {

    
    switch (index) {
      case 1:
        // Validate personal details form
        return (
          pagesAnswers.firstName &&
          pagesAnswers.middleName &&
          pagesAnswers.lastName &&
          pagesAnswers.phone &&
          pagesAnswers.dateOfBirth &&
          pagesAnswers.gender &&
          pagesAnswers.placeOfBirth &&
          pagesAnswers.nationality &&
          pagesAnswers.martialStatus 
          // pagesAnswers.countryCode
        );
      // case 2:
      //   // Validate address form
      //   return (
      //     pagesAnswers.region &&
      //     pagesAnswers.city &&
      //     pagesAnswers.state
          
      //   );
      // case 3:
      //   // Validate passport information form
      //   return (
      //     pagesAnswers.passportPageNumber &&
      //     pagesAnswers.oldPassportNumber &&
      //     pagesAnswers.oldPassportIssueDate 
      //     // &&
      //     // pagesAnswers.oldPassportExpirationDate &&
      //     // pagesAnswers.oldPassportPhoto &&
      //     // pagesAnswers.recentPassportSizePhoto
      //   );
      // Add cases for other steps if needed
      default:
        return true;
    }
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const renderForm = () => {
    return (
      <div>
        {index === 1 && (
         // FormItems for the first step// FormItems for the first step
        <>
          <h4>Renew Passport - Lost or Stolen I Don’t Have The Photo | Information</h4>
          <div className="row">
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.firstName}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
              label: 'ስም',
        type: 'text',
        value: 'firstNameAmharic'
                
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.middleName}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
               label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.lastName}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                 label: "የአባት ስም",
        type: 'text',
        value: 'middleNameAmharic'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.lastNameAmharic}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.lastName}
            />
            </Col>
             <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                 label: "የአያት ስም",
        type: 'text',
        value: 'lastNameAmharic'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.lastNameAmharic}
            />
            </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                 label: "Email",
        type: 'text',
        value: 'email'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.email}
            />
            </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                 label: "Phone",
        type: 'text',
        value: 'phone'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.phone}
            />
            </Col>


              <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                 label: "Date of birth",
        type: 'text',
        value: 'dateOfBirth'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.dateOfBirth}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Gender',
                type: 'select',
                value: 'gender',
                options: ['Male', 'Female'],
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.gender}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Place of birth',
                type: 'text',
                value: 'placeOfBirth',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.placeOfBirth}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Nationality',
                type: 'text',
                value: 'nationality',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.nationality}
            />
            </Col>
             <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                  label: 'Occupation',
        type: 'text',
        value: 'occupation'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.occupation}
            />
            </Col>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Martial Status',
                type: 'select',
                value: 'martialStatus',
                options: ['Married', 'Single'],
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.martialStatus}
            />
            </div>

              <div className="col-4">
            <FormItem
              item={{
                  label: 'Hair Color',
        type: 'text',
        value: 'hairColor'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.hairColor}
            />
            </div>

                 <div className="col-4">
            <FormItem
              item={{
                 label: 'Eye Color',
        type: 'text',
        value: 'eyeColor'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.eyeColor}
            />
            </div>

                 <div className="col-4">
            <FormItem
              item={{
                   label: 'Birth Certificate Unique ID',
        type: 'text',
        value: 'birthCertificateUniqueID'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.birthCertificateUniqueID}
            />
            </div>
                 <div className="col-4">
            <FormItem
              item={{
                   label: 'Height (cm)',
        type: 'number',
        value: 'height'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.height}
            />
            </div>
            
            
          </div>
        </>

        )}

        {index === 2 && (
          <>
            <h4>Renew Passport - Lost or Stolen I Don’t Have The Photo | Address</h4>
          <div className="row">
            {/* Extrapolate the data for Step 2 from your object and generate FormItems */}
            <div className="col-4">
            <FormItem
              item={{
                label: 'Region',
                type: 'text',
                value: 'region',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.region}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'City',
                type: 'text',
                value: 'city',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.city}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'State',
                type: 'text',
                value: 'state',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.state}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Zone',
                type: 'select',
                value: 'zone',
                options: ['Zone 1', 'Zone 2'],
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.zone}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Woreda',
                type: 'text',
                value: 'woreda',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.woreda}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Kebele',
                type: 'text',
                value: 'kebele',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.kebele}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Street',
                type: 'text',
                value: 'street',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.street}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'House number',
                type: 'text',
                value: 'houseNumber',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.houseNumber}
            />
            </div>
          </div>
            {/* Add other address form items here */}
          </>
        )}

        {index === 3 && (
          <>
            <h4>Renew Passport - Lost or Stolen I Don’t Have The Photo | Passport Information</h4>
            
          <div className="row">
            <div className="col-4">
              {/* Extrapolate the data for Step 3 from your object and generate FormItems */}
              <FormItem
                item={{
                  label: 'Passport page number',
                  type: 'number',
                  value: 'passportPageNumber',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.passportPageNumber}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport number',
                  type: 'text',
                  value: 'oldPassportNumber',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportNumber}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport issue date',
                  type: 'date',
                  value: 'oldPassportIssueDate',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportIssueDate}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport expiration date',
                  type: 'date',
                  value: 'oldPassportExpirationDate',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportExpirationDate}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport photo',
                  type: 'file',
                  value: 'oldPassportPhoto',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportPhoto}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Recent passport size photo',
                  type: 'file',
                  value: 'recentPassportSizePhoto',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.recentPassportSizePhoto}
              />
            </div>
          </div>
            {/* Add other passport information form items here */}
          </>
        )}

        {index === 4 && (
          <>
            <h4>Record Video</h4>
            <VideoRecording setViditure={setViditure}/>
           
            <h2 style={{fontWeight:'900px'}}>Sign here</h2>
            <div style={{maxWidth:'495px'}}>
            <Sign onPageUpdate={onPageUpdate}/>
            
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <Container>
      <Stepper activeStep={index - 1} alternativeLabel>
        {steplabel.map((val, step) => (
          <Step key={step} 
          onClick={()=>
          {
             if (isFormValid()) 
            setStep(step+1)}}>
            <StepLabel>{`${val}`}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Container className={classes.stepContainer}>
        {submitted ? (
          <div>
            <h3>Your request has been submitted!</h3>
            <h6>Thank You For Using ETPASS 🙏 🙏 🙏</h6>
            <Button variant="contained" color="primary" onClick={handleStart}>
              Start Over
            </Button>
          </div>
        ) : (
          <div>
            {index === totalPagesCount + 1 ? (
  
              
                    <>
                    <div ref={pdfRef}>
                <h3>Summary</h3>
                <h4>Please Check Your Answers</h4>
                {/* ... Display a summary of answers */}
                {/* The existing code for displaying answers can be used here */}
   <Container className="d-flex align-items-center justify-content-center p-3 h-100">
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start ml-4">
        <div className="bg-white-A700 flex flex-col gap-4 justify-end w-100 h-100 rounded-md">
          <Typography variant="h3" className="text-gray-900_03 text-center pt-4">
           Summary
          </Typography>
          <div className="bg-white-A700 border-black-900_19 border-solid border-t-2 flex flex-col items-center justify-start px-4 py-6">
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
         
                <ProfileInfo label="First Name" value={pagesAnswers.firstName} />
                <ProfileInfo label="Last Name" value={pagesAnswers.middleName} />
                 <ProfileInfo label="Phone" value={pagesAnswers.phone} />
                <ProfileInfo label="Date of Birth" value={pagesAnswers.dateOfBirth} />
                 <ProfileInfo label="gender" value={pagesAnswers.gender} />
               
               
              </Grid>
              <Grid item xs={12} md={6} className="border-gray-300_01 border-l-2 border-solid">
                <div className="flex flex-col gap-4 items-center justify-start mb-4"></div>
         <ProfileInfo label="Place of Birth" value={pagesAnswers.placeOfBirth} />
                <ProfileInfo label="Nationality" value={pagesAnswers.nationality} />
                 <ProfileInfo label="Martial Status" value={pagesAnswers.martialStatus} />
                <ProfileInfo label="Country code" value={pagesAnswers.countryCode} />
               
               
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
     <Container className="d-flex align-items-center justify-content-center p-3 h-100" style={{height:'auto'}}>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start ml-4">
        <div className="bg-white-A700 flex flex-col gap-4 justify-end w-100 h-100 rounded-md">
          
          <div className="bg-white-A700 border-black-900_19 border-solid border-t-2 flex flex-col items-center justify-start px-4 py-6">
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
  
                <ProfileInfo label="Region" value={pagesAnswers.region} />
                <ProfileInfo label="City" value={pagesAnswers.city} />
                      <ProfileInfo label="State" value={pagesAnswers.state} />
                <ProfileInfo label="Zone" value={pagesAnswers.zone} />
              </Grid>
              <Grid item xs={12} md={6} className="border-gray-300_01 border-l-2 border-solid">
                <div className="flex flex-col gap-4 items-center justify-start mb-4"></div>
                       <ProfileInfo label="Woreda" value={pagesAnswers.woreda} />
                <ProfileInfo label="Kebele" value={pagesAnswers.kebele} />
                        <ProfileInfo label="Street" value={pagesAnswers.street} />
                <ProfileInfo label="House Number" value={pagesAnswers.houseNumber} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
    <Container className="d-flex align-items-center justify-content-center p-3 h-100">
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start ml-4">
        <div className="bg-white-A700 flex flex-col gap-4 justify-end w-100 h-100 rounded-md">
          
          <div className="bg-white-A700 border-black-900_19 border-solid border-t-2 flex flex-col items-center justify-start px-4 py-6">
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <ProfileInfo label="Passport Page Number" value={pagesAnswers.passportPageNumber} />
                <ProfileInfo label="Old Passport Number" value={pagesAnswers.oldPassportNumber} />
              
              </Grid>
              <Grid item xs={12} md={6} className="border-gray-300_01 border-l-2 border-solid">
                <div className="flex flex-col gap-4 items-center justify-start mb-4"></div>
                 <ProfileInfo label="Old passport issue date" value={pagesAnswers.oldPassportIssueDate} />
                <ProfileInfo label="Old Passport expiration date" value={pagesAnswers.oldPassportExpirationDate} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p className='mt-2 fw-bold '>N.B Now you have to download the summary, print and sign the paper. after doing that you will have to upload it.</p>
              </div>
    
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
              <Button  variant="contained"
                      color="primary"
                     
                      className=" align-center mt-3" onClick={downloadPDF}>
                            Download PDF
                </Button> 
                    </div> 
                    </>
            ) : (
              <div>{renderForm()}</div>
            )}
          </div>
        )}
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className="back-button"
            onClick={prevButton}
            disabled={index === 1}
          >
            Previous
          </Button>
           <Button
            variant="contained"
            color="primary"
            className="next-button"
            onClick={() => {
              if (isFormValid()) {
                nextButton();
              } else {

               
               setOpen(true)
                
              }
            }}
            disabled={!isFormValid}
          >
            {index === 1
              ? 'Start'
              : index === totalPagesCount + 1
              ? 'Submit'
              : 'Next'}
          </Button>
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <p style={{color:'red'}}>Please fill all the required fields.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      </Container>
    </Container>
  );
};
const ProfileInfo = ({ label, value }) => (
  <div className="flex flex-row gap-4 items-center justify-start mt-4">
    <Typography variant="h6" className="text-gray-900_a3 w-32">
      {label}
    </Typography>
    <Typography variant="body1" className="text-gray-900_03">
      {value}
    </Typography>
  </div>
);

export default LostOrStoelnForm;
