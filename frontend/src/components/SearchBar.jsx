import React, { useState } from 'react'
import { Search, Calendar, Users, Settings } from 'lucide-react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from '@mui/material';
  import Button from '@mui/material/Button';
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';
  import InputLabel from '@mui/material/InputLabel';
  import FormControl from '@mui/material/FormControl';

const SearchBar = () => {
    const [state, setState] = useState('');
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState('');
    const [stateList, setStateList] = useState(['State 1', 'State 2', 'State 3']);
    const [rank, setRank] = useState('');
    const [examType, setExamType] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
  
    const examTypes = [
      { value: 'jee-main', label: 'JEE Main' },
      { value: 'jee-advanced', label: 'JEE Advanced' },
      { value: 'neet', label: 'NEET' },
      { value: 'bitsat', label: 'BITSAT' },
    ];
  return (
    <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap bg-custom-primary rounded-lg p-1">
            <div className="flex-1 min-w-[250px] bg-white rounded-md m-1 p-2">
              <div className="flex items-center gap-2">
                <Search className="text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Enter your JEE rank" 
                  className="w-full outline-none text-gray-800"
                />
              </div>
            </div>
            
            <div className="min-w-[200px] bg-custom-primary rounded-md m-1 p-2">
              <div className="flex items-center gap-2">
                <Calendar className="text-gray-400 w-5 h-5" />
                <select className="w-full outline-none text-gray-800">
                  <option>Course Duration</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                  <option>4 Years</option>
                </select>
              </div>
            </div>
            
            <div className="min-w-[200px] bg-custom-primary rounded-md m-1 p-2">
              <div className="flex items-center gap-2">
                <Users className="text-gray-400 w-5 h-5" />
                <select className="w-full outline-none text-gray-800">
                  <option>Course Type</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>Doctorate</option>
                </select>
              </div>
            </div>

              {/* Modify Search */}
        <Button
          className="min-w-[120px] bg-custom-primary text-custom-secondary rounded-md m-1 px-6 py-2 font-medium hover:opacity-90 flex items-center gap-2"
          onClick={() => setDialogOpen(true)}
        >
          <Settings className="w-4 h-4" />
          Modify Search
        </Button>
        <Dialog
  open={dialogOpen}
  onClose={() => setDialogOpen(false)}
  PaperProps={{
    style: {
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '400px',
      width: '100%',
    },
  }}
>
  <DialogTitle
    style={{
      fontSize: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1A73E8',
    }}
  >
    Additional Search Options
  </DialogTitle>
  <DialogContent
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
  >
    <FormControl fullWidth>
      <InputLabel>Home State</InputLabel>
      <Select
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{ borderRadius: '8px' }}
      >
        {stateList.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ borderRadius: '8px' }}
      >
        <MenuItem value="general">General</MenuItem>
        <MenuItem value="obc">OBC</MenuItem>
        <MenuItem value="sc">SC</MenuItem>
        <MenuItem value="st">ST</MenuItem>
      </Select>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel>Gender</InputLabel>
      <Select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{ borderRadius: '8px' }}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </FormControl>
  </DialogContent>
  <DialogActions
    style={{
      justifyContent: 'center',
      paddingTop: '20px',
    }}
  >
    <Button
      onClick={() => setDialogOpen(false)}
      style={{
        backgroundColor: '#1A73E8',
        color: '#fff',
        textTransform: 'none',
        borderRadius: '8px',
        padding: '8px 20px',
      }}
    >
      Save
    </Button>
  </DialogActions>
</Dialog>

            
            <button className="min-w-[120px] bg-blue-600 text-white rounded-md m-1 px-6 py-2 font-bold hover:bg-blue-700">
              Search
            </button>
          </div>
          
          <div className="mt-4 flex items-center gap-2 justify-center">
            <input type="checkbox" id="scholarship" className="rounded" />
            <label htmlFor="scholarship" className="text-sm">I'm looking for scholarship opportunities</label>
          </div>
        </div>
  )
}

export default SearchBar