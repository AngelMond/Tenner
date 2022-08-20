import React from "react";
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_CARDSUPPLIER } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';



export default function SupplierCard() {
    let navigate = useNavigate();

    const [addCardSupplier, {error, data}] = useMutation(CREATE_CARDSUPPLIER);

    const [validated] = useState(false);
    const [userFormData, setUserFormData] = useState({ 
        role: '', 
        description: '', 
        basicPrice: '', 
        standardPrice: '', 
        premiumPrice: '', 
        image: '',  
     });

     const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      }

    //open the file explorer when click button 
    const handleSelectFile = (e)=>{
        e.preventDefault();
        const inputFile = document.querySelector('#input-file');
        inputFile.click();
    }

    //HandleSubmitForm
    const handleFormSubmit = async (e)=>{
        e.preventDefault();

        try{
            const {data} = await addCardSupplier({
            variables: {input: userFormData},
            });         
             window.location.reload();
        }catch(err){
            console.log(err);
        }
        setUserFormData({
            description: '',
            basicPrice: '',
            standardPrice: '',
            premiumPrice: '',
            image: '',
          });          
    }
    

    return (
        <div className="container-fluid supplier-card-container">
            <div className="row justify-content-center p-4">
                <div className=" p-3">
                    <form onSubmit={handleFormSubmit} validated = {validated}  className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 px-4 m-4 border rounded shadow">
                            <h4 className="text-center p-4 fw-bold fs-2">Create your presentation card</h4>
                            <div className="input-group row g-0 mb-3">
                                <select onChange={handleInputChange} value={userFormData.role} className="form-select" name="role" aria-label="Default select example">
                                    <option defaultValue value="0">Select your role</option>
                                    <option value="FullStack">FullStack</option>
                                    <option value="FrontEnd">FrontEnd</option>
                                    <option value="BackEnd">BackEnd</option>
                                    <option value="GraphicDesign">Graphic Design</option>
                                    <option value="ScrumMaster">Scrum Master</option>
                                    <option value="DBA">DBA</option>
                                    <option value="IOS">IOS</option>
                                    <option value="Android">Android</option>
                                </select>
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="description">Short description of your service</label>
                                <textarea onChange={handleInputChange} className="col-12 form-control descriptionInputCardSupplier" name="description" type="text"  value={userFormData.description} placeholder="Example: I will design your IOS/Android App..." ></textarea>
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Basic</label>
                                <input onChange={handleInputChange} value={userFormData.basicPrice} className="col-12 form-control" name="basicPrice" type="number" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Standard</label>
                                <input onChange={handleInputChange} value={userFormData.standardPrice} className="col-12 form-control" name="standardPrice" type="number" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Premium</label>
                                <input onChange={handleInputChange} value={userFormData.premiumPrice} className="col-12 form-control" name="premiumPrice" type="number" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3 mt-5 justify-content-center">
                                <h4 className="text-center py-2 fs-5">Add an Image</h4>
                                <div  className="drag-area row justify-content-center rounded">
                                    <h6 className="drop-text text-center col-12 py-2 ">Drag and drop or</h6>
                                    <div className="col-12 ">
                                        <div className="d-flex justify-content-center">
                                            <button id="selectImageCardButton" className="btn btn-primary col-10 col-md-7 col-lg-2 " onClick={handleSelectFile} >Select your files</button>
                                            <input id="input-file" type="file" name="image-disable" hidden   />
                                        </div>
                                    </div>
                        

                                </div>
                                <div className="input-group row g-0 mb-3 mt-2">
                                    <label className="col-12 py-2 fs-5" htmlFor="price">Or add your favorite image url</label>
                                    <input onChange={handleInputChange} value={userFormData.image} className="col-12 form-control" name="image" type="" placeholder="url..." />
                                </div>
                            </div>
                            <div className="row g-0 mb-3 mt-5 justify-content-center">
                                    <button className="btn btn-success submitButton col-12 col-md-8 col-lg-4 mt-4" type="submit">Submit</button> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 