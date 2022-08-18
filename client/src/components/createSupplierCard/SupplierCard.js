import React from "react";
import { useState } from "react";
import axios from 'axios';



export default function SupplierCard() {

    // const [selectedFile, setSelectedFile] = useState(null);

    const dragArea = document.querySelector(".drag-area");
    const dragText = document.querySelector('.drop-text');
    // const button = document.querySelector('#selectImageCardButton');
    let files;
    
    // const [inputFiles, setInputFiles] = useState();
    
    // //todo: agregar un envento onclick opara el button del input
    //open the file explorer  
    const handleSelectFile = (e)=>{
        e.preventDefault();
        const inputFile = document.querySelector('#input-file');
        inputFile.click();
    }

    // const handleInputChange = (e)=>{
    //     files = this.files;
    //     dragArea.classList.add("dragActive");
    //     showFile(files);
    //     dragArea.classList.remove('dragActive');
    // }


    // const showFile = (files)=>{
    //     if(files.lenght === undefined){
    //         processFile(files)
    //     }else{
    //         for (const file of files){
    //             processFile(file)
    //         }
    //     }
    // }

    // const processFile = (file)=>{
    //     const docType = file.type;
    //     const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        
    //     //validate file extension
    //     if(docType.includes(validExtensions)){

    //     }else{
    //         //If image extension is not valid
    //         alert('Sorry, your image is not a valid file extension')
    //     }
    // }

    // // //while we drag elements it will be activated
    // const dragOver = (e) =>{
    //     e.preventDefault();

    //     dragArea.classList.add('dragActive');
    //     dragText.textContent = 'Drop to upload your image';
    // }
    
    // // //while we drag elements but noy inside de drag-area
    // const dragLeave = (e)=>{
    //     e.preventDefault();
    //     dragArea.classList.remove('dragActive');
    //     dragText.textContent = 'Drag and drop or';
    // }
    
    // // //When we drop files inside the drag-area
    // const drop = (e)=>{
    //     e.preventDefault();
    //     files = e.dataTransfer.files;
    //     showFile(files);
    //     dragArea.classList.remove('dragActive');
    //     dragText.textContent = 'Drag and drop or';
    // }

    return (
        <div className="container-fluid supplier-card-container">
            <div className="row justify-content-center p-4">
                <div className=" p-3">
                    <form className="row justify-content-center">
                        <div className="col-6 px-4 m-4 border rounded shadow">
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
                                <textarea className="col-12 form-control descriptionInputCardSupplier" name="description" type="text" value="" placeholder="Ex: I will design your IOS/Android App..." ></textarea>
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
                            <div className="input-group row g-0 mb-3 mt-5 justify-content-center">
                                <h4 className="text-center py-2 fs-5">Add an Image</h4>
                                <div  className="drag-area row justify-content-center rounded">
                                    <h6 className="drop-text text-center col-12 py-2 ">Drag and drop or</h6>
                                    <div className="col-12 ">
                                        <div className="d-flex justify-content-center">
                                            <button id="selectImageCardButton" className="btn btn-primary col-4" onClick={handleSelectFile} >Select your files</button>
                                            <input id="input-file" type="file" name="image" hidden   />
                                        </div>
                                    </div>
                                    {/*  */}

                                </div>
                                <div className="input-group row g-0 mb-3 mt-2">
                                    <label className="col-12 py-2 fs-5" htmlFor="price">Or add your favorite image url</label>
                                    <input className="col-12 form-control" name="price" type="" value=""  placeholder="url..." />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 