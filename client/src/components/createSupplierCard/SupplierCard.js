import React from "react";
import { useState } from "react";
import axios from 'axios';



export default function SupplierCard() {
    const inputFile = document.querySelector("input-file")

    const [selectedFile, setSelectedFile] = useState(null);

    const imageSelectedHandler = event =>{
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0]);
    }

    //Send hhtp request with axios
    const imageUploadHandler = ()=>{
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name);
        axios.post('agregar la ruta', fd)
            .then(res =>{
                console.log(res);
            })
    }
    

    // const buttonImageHandler = () =>{

    // }
    

    

    

    return (
        <div className="container-fluid supplier-card-container">
            <div className="row justify-content-center p-4">
                <div className=" p-3">
                    <form className="row justify-content-center">
                        <div className="col-4 px-4 m-4 border rounded shadow">
                            <h4 className="text-center p-2 fw-bold">Create your presentation card</h4>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="description">Short description of your service</label>
                                <textarea className="col-12 form-control descriptionInputCardSupplier" name="description" type="text" value="" placeholder="Ex: I will design your IOS Android" ></textarea>
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Basic</label>
                                <input className="col-12 form-control" name="price" type="" value="" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Standard</label>
                                <input className="col-12 form-control" name="price" type="" value="" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Premium</label>
                                <input className="col-12 form-control" name="price" type="" value="" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3 justify-content-center">
                                <h4 className="text-center py-2 fs-5">Add an Image</h4>
                                <div  className="drag-area row justify-content-center rounded">
                                    <h6 className="drop-text text-center col-12 py-2 ">Drag and drop or</h6>
                                    <div className="col-12 ">
                                        <div className="d-flex justify-content-center">
                                            <button id="selectImageCardButton" className="btn btn-primary col-4" >Select your files</button>
                                        </div>
                                    </div>
                                    <input id="input-file" type="file" name="image"  onChange={imageSelectedHandler}  />
                                    
                                </div>
                                <div id="preview" className="px-3 py-2">preview</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 