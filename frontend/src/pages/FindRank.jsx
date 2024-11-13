import React, { useState } from 'react';
import '../styles/FindRank.css';
import logo from '../assets/findmycollegelogo.png';
import axios from 'axios'
import { TextField, MenuItem, FormControl, Select, Button, Grid } from '@mui/material';
import { useEffect } from 'react';

const FindRank = () => {
  const [state, setState] = useState('');
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('');
  const [stateList,setStateList] = useState([]);

  const getStates = async()=>{
    try{    
        let response =  await axios.post("https://countriesnow.space/api/v0.1/countries/states",{
            "country" : "india"
        });
        setStateList(response.data.data.states);
    }
    catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
        getStates();
  },[])

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className='findRankMain'>
      <div className='leftFindRank'>
        <div className='leftFindRankHeading'>
          <img src={logo} alt="FindMyCollege Logo" className='logo' />
          <p>
            Our platform is designed to help students to find the best colleges they can get into based on their scores. Simply enter your JEE score, and our system will provide a comprehensive list of colleges you are eligible for.
          </p>
          <div className='FindMyRankHeaderImg'>
            <img src="https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?t=st=1722157940~exp=1722161540~hmac=2ae7f441b385525150c3588ccb6dc2ef112631605c652d0565c2896d4db48a77&w=1800" alt="Find Rank Header" />
          </div>
        </div>
      </div>
      <div className='rightFindRank'>
        <h2>Enter Your Details</h2>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Enter JEE Rank"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{ 
                style: { 
                  color: '#FFFFFF', 
                  border: '1px solid #FFFFFF' // White border color
                } 
              }}
              InputLabelProps={{ 
                style: { color: 'transparent' } // Hide label
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <Select
                value={state}
                onChange={handleStateChange}
                displayEmpty
                sx={{ 
                  color: '#FFFFFF', // White text color
                  border: '1px solid #FFFFFF', // White border color
                  '.MuiSelect-icon': { color: '#FFFFFF' } // White color for dropdown icon
                }}
                renderValue={(selected) => {
                  if (selected === '') {
                    return <em>Select Home State</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value=""><em>Select Home State</em></MenuItem>
                {
                    stateList.map((item)=>{
                        return  <MenuItem value={item.name}>{item.name}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <Select
                value={category}
                onChange={handleCategoryChange}
                displayEmpty
                sx={{ 
                  color: '#FFFFFF', 
                  border: '1px solid #FFFFFF', 
                  '.MuiSelect-icon': { color: '#FFFFFF' } 
                }}
                renderValue={(selected) => {
                  if (selected === '') {
                    return <em>Select Category</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value=""><em>Select Category</em></MenuItem>
                <MenuItem value={'Category1'}>Category1</MenuItem>
                <MenuItem value={'Category2'}>Category2</MenuItem>
                <MenuItem value={'Category3'}>Category3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <Select
                value={gender}
                onChange={handleGenderChange}
                displayEmpty
                sx={{ 
                  color: '#FFFFFF', 
                  border: '1px solid #FFFFFF', 
                  '.MuiSelect-icon': { color: '#FFFFFF' } 
                }}
                renderValue={(selected) => {
                  if (selected === '') {
                    return <em>Select Gender</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value=""><em>Select Gender</em></MenuItem>
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Button
              sx={{
                backgroundColor: "#827397",
                color: "#ffffff",
                width: "25%",
                justifyContent: "center",
                display: "flex",
                margin: "auto",
                '&:hover': {
                  backgroundColor: "#827397", // Keep the background color the same on hover
                  opacity: 1, // Ensure no opacity change on hover
                }
              }}
              className='submitBtnFindMyRank'
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FindRank;
