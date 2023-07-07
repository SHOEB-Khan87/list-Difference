import React, { useState } from "react"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
function App() {

  let [aitem, setAitem] = useState("");
  let [bitem, setBitem] = useState("");
  let [result, setResult] = useState("");

  let changea = (e) => {
    setAitem(e.target.value)
  }

  let changeb = (e) => {
    setBitem(e.target.value)
  }

  let compute = () => {
    let a = aitem.split('\n').map(elem => elem.trim());
    let b = bitem.split('\n').map(elem => elem.trim());

    let uniqueA = a.filter(elem => !b.includes(elem));
    let uniqueB = b.filter(elem => !a.includes(elem));
    let common = a.filter(elem => b.includes(elem));
    let combined = [...uniqueA, ...uniqueB]

    let list = {
      uniqueA,
      uniqueB,
      common,
      combined
    }
    setResult(list)
    console.log(common)
  }
  console.log(result)
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Please enter text as a list</h3>
      </div>
      <Container >
        <Grid style={{ marginTop: "50px" }} container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField multiline value={aitem} onChange={changea} sx={{ width: "100%" }} label="Aitems" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextField multiline value={bitem} onChange={changeb} sx={{ width: "100%" }} label="Bitems" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Button onClick={compute} disabled={aitem === "" && bitem === ""} sx={{ width: "100%", height: "55px" }} variant="contained">cumpute</Button>
          </Grid>
        </Grid></Container>

     {result && result !== "" ?  <>  {result.uniqueA.length === 0 ? "" :  <Grid style={{ marginTop: "20px" }} container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{ display: "flex", justifyContent: "center",alignItems:"center" }}>
            <h2>Items present only in A:</h2>
          </div>
          <ul>
            {result && result.uniqueA.map((elem, id) => {
              return <li style={{ display: "flex", justifyContent: "center",fontSize:"22px" }} key={id}> {elem}</li>
            })}</ul>
        </Grid>
      </Grid>}

      {result.uniqueB.length === 0 ? "" :  <Grid style={{ marginTop: "20px" }} container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h2>Items present only in B:</h2>
            </div>
            <ul>
          {result && result.uniqueB.map((elem,id)=>{
            return <li style={{display:"flex",justifyContent:"center",fontSize:"22px"}} key={id}> {elem}</li>
          })}</ul>
            </Grid>
            </Grid>}

        {result.common.length === 0 ? "" :    <Grid style={{ marginTop: "20px" }} container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h2>Items present in both A and B:</h2>
            </div>
            <ul>
          {result && result.common.map((elem,id)=>{
            return <li style={{display:"flex",justifyContent:"center",fontSize:"22px"}} key={id}> {elem}</li>
          })}</ul>
            </Grid>
            </Grid>}

            {result.combined.length === 0 ? "" :    <Grid style={{ marginTop: "20px" }} container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h2>Items combining both A and B (unique):</h2>
            </div>
            <ul>
          {result && result.combined.map((elem,id)=>{
            return <li style={{display:"flex",justifyContent:"center",fontSize:"22px"}} key={id}> {elem}</li>
          })}</ul>
            </Grid>
            </Grid>} </> : ""}

    </>


  );
}

export default App;
