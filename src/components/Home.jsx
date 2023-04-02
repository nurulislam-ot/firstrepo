import { useState } from 'react'
import {TextField,Checkbox,FormControl,InputLabel,Select,MenuItem,Stack} from '@mui/material'

const Home = ()=>{
    return <div>
        <TextField label='Enter your first name'/>
        <Checkbox defaultChecked />

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                label="Age"
                value={age}
                onChange={(event)=>{
                    setAge(event.target.value)
                }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>

        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider value={value} onChange={handleChange} />
            <VolumeUp />
        </Stack>
    </div>
}

export default Home