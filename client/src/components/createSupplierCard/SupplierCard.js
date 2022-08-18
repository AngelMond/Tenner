import React from "react";
import { useState } from "react";
import axios from 'axios';



export default function SupplierCard() {

    
    //open the file explorer when click button 
    const handleSelectFile = (e)=>{
        e.preventDefault();
        const inputFile = document.querySelector('#input-file');
        inputFile.click();
    }

    //Handle Description Input
    const [description, setDescription] = useState("");
    const handleInputDescription = (e)=>{
        setDescription(e.target.value)
    }

    //Handle basic price
    const [basicPrice, setBasicPrice] = useState();
    const handleBasicPrice = (e)=>{
        setBasicPrice(e.target.value);
    }
    //Handle standard price
    const [standard, setStandarPrice] = useState();
    const handleStandardPrice = (e)=>{
        setStandarPrice(e.target.value);
    }
    //Handle premium price
    const [premiumPrice, setPremiumPrice] = useState();
    const handlePremiumPrice = (e)=>{
        setPremiumPrice(e.target.value);
    }

    
    

    return (
        <div className="container-fluid supplier-card-container">
            <div className="row justify-content-center p-4">
                <div className=" p-3">
                    <form className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 px-4 m-4 border rounded shadow">
                            <h4 className="text-center p-4 fw-bold fs-2">Create your presentation card</h4>
                            <div className="input-group row g-0 mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option defaultValue value="0">FullStack</option>
                                    <option value="1">FrontEnd</option>
                                    <option value="2">BackEnd</option>
                                    <option value="3">Graphic Design</option>
                                    <option value="4">Scrum Master</option>
                                    <option value="5">DBA</option>
                                    <option value="6">IOS</option>
                                    <option value="7">Android</option>
                                </select>
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="description">Short description of your service</label>
                                <textarea onChange={handleInputDescription} className="col-12 form-control descriptionInputCardSupplier" name="description" type="text"  value={description} placeholder="Example: I will design your IOS/Android App..." ></textarea>
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Basic</label>
                                <input onChange={handleBasicPrice} value={basicPrice} className="col-12 form-control" name="price" type="number" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Standard</label>
                                <input onChange={handleStandardPrice} value={standard} className="col-12 form-control" name="price" type="number" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Premium</label>
                                <input onChange={handlePremiumPrice} value={premiumPrice} className="col-12 form-control" name="price" type="number" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3 mt-5 justify-content-center">
                                <h4 className="text-center py-2 fs-5">Add an Image</h4>
                                <div  className="drag-area row justify-content-center rounded">
                                    <h6 className="drop-text text-center col-12 py-2 ">Drag and drop or</h6>
                                    <div className="col-12 ">
                                        <div className="d-flex justify-content-center">
                                            <button id="selectImageCardButton" className="btn btn-primary col-10 col-md-7 col-lg-2 " onClick={handleSelectFile} >Select your files</button>
                                            <input id="input-file" type="file" name="image" hidden   />
                                        </div>
                                    </div>
                        

                                </div>
                                <div className="input-group row g-0 mb-3 mt-2">
                                    <label className="col-12 py-2 fs-5" htmlFor="price">Or add your favorite image url</label>
                                    <input onChange={handleUrlImage} value={urlImage} className="col-12 form-control" name="price" type="" placeholder="url..." />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 