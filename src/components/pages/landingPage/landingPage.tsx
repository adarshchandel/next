'use client'
import React, { useState } from 'react';
import './landingPage.css';
import NavAppBar from '@/components/common/navbar/navBar';
import DialogBox from '@/components/common/dialogbox';
import { useForm } from 'react-hook-form'
import { Box, Input, Stack, TextField } from '@mui/material';
import LocationPicker from '@/components/common/locationPicker';
import LocationAutocomplete from '@/components/common/locationPicker';
import { ISuggestions } from '@/components/common/locationPicker/types';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { isEmpty } from 'lodash'
// import playStoreIcon from "/icon/playstore.png";
// import appStoreIcon from "/icon/apple.png";

// const playStoreIcon = "/icon/playstore.png";
// const appStoreIcon = "/icon/apple.png";
const LandingPage = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [rideLocations, setRideLocations] = useState({
    startLocation: {} as ISuggestions,
    dropLocation: {} as ISuggestions
  })
  const { watch, setValue } = useForm();


  const handleLocation = (location: ISuggestions, locationType: string) => {
    console.log('i selected this location==', location);
    setRideLocations((prev) => ({ ...prev, [locationType]: location }))
  }


  return (
    <>
      <div className="landing-page">
        <section className="hero">
          <div className="hero-content">
            <h1>Your Ride, Anytime, Anywhere</h1>
            <p>Book a ride in just a few clicks. Safe, reliable, and at your fingertips.</p>
            <button className="cta-button" onClick={() => setDialogOpen(true)}>Book Now</button>
          </div>
        </section>
        <section className="features" id="features">
          <h2>Why Choose RideX?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>Fast Booking</h3>
              <p>Book a ride within seconds with our intuitive app.</p>
            </div>
            <div className="feature-item">
              <h3>Secure Payments</h3>
              <p>Pay seamlessly with multiple payment options, fully secured.</p>
            </div>
            <div className="feature-item">
              <h3>24/7 Support</h3>
              <p>We're here to assist you anytime, day or night.</p>
            </div>
          </div>
        </section>
      </div>
      {dialogOpen && <DialogBox clickOutsideToClose={false} open={dialogOpen} setOpen={() => setDialogOpen(false)} title='Add Ride Details' onConfirmation={() => setDialogOpen(false)}>
        <form>
          <Stack spacing={2}>
            {/* <TextField variant="outlined" fullWidth label='From Location' />
            <TextField variant="outlined" fullWidth label='To Location'/> */}
            <LocationAutocomplete onChange={(location) => handleLocation(location, 'startLocation')} label='Select Pickup Location' />

            <Timeline>
              {/* First dot */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ ...(!isEmpty(rideLocations.startLocation) && { bgcolor: 'primary.main' }) }} />
                  <TimelineConnector sx={{ height: "50px", ...(!isEmpty(rideLocations.startLocation) && { bgcolor: 'primary.main' }) }} /> {/* line goes down */}
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>

              {/* Second dot */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ ...(!isEmpty(rideLocations.dropLocation) && { bgcolor: 'primary.main' }) }} />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            </Timeline>

            <LocationAutocomplete onChange={(location) => handleLocation(location, 'dropLocation')} label='Select Drop Location' />

          </Stack>
        </form>

      </DialogBox>}
    </>
  );
};

export default LandingPage;
