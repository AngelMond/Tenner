import React from "react";


export default function SupplierCard() {


    return (
        <div className="container-fluid supplier-card-container">
            <div className="row justify-content-center border border-danger p-4">
                <div className="border border-warning p-3">
                    <form className="row border border-primary justify-content-center">
                        <div className="col-4 px-4 m-4 border rounded shadow">
                            <h4 className="text-center p-2 fw-bold">Create your presentation card</h4>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="description">Short description of your service</label>
                                <textarea className="col-12 form-control descriptionInputCardSupplier" name="description" type="text" value="" placeholder="Ex: I will design your IOS Android" ></textarea>
                            </div>
                            <div className="input-group row g-0 mb-3">
                                <label className="col-12 py-2 fs-5" htmlFor="price">Add your starting price</label>
                                <input className="col-12 form-control" name="price" type="" value="" placeholder="$ 0.00" />
                            </div>
                            <div className="input-group row g-0 mb-3 justify-content-center">
                                <h4 className="text-center py-2 fs-5">Add an Image</h4>
                                <div className="drag-area row justify-content-center rounded">
                                    <h6 className="text-center col-12 py-2 ">Drag and drop or</h6>
                                    <div className="col-12 ">
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary col-4">Select your files</button>
                                        </div>
                                    </div>
                                    <input id="input-file" type="file" name="image" hidden multiple />
                                </div>
                                <div id="preview"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 