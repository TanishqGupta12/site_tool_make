"use client";
import React, { useState, useEffect } from "react";
import Footer_v1 from "@/components/footer/Footer_v1";
import Navbar_v1 from "@/components/navbar/Navbar_v1";
import { gql, useQuery } from '@apollo/client';
import Typography from "@mui/material/Typography";

const GET_DATA = gql`
query {
  event(id: 2) {
    id
    forms {
      id
      caption
      Description
      startDate
      slug
      is_active
      registration_successful_message
      registration_updated_successful_message
      form_section_fields {
        id
        is_single_column
        caption
        placeholder
        field_hint
        field_type
        data_field
        sequence
        is_required
        is_active
        file_upload_filed
        file_upload_type
        form_field_choices {
          id
          sequence
          caption
          isActive
          specificFieldIfOther
        }
      }
    }
  }
}
`;


// import { GetDataResponse } from "@/interface/types";
export default function Signup() {
    // const { loading, error, data } = useQuery<GetDataResponse>(GET_DATA);
    const [selectedOption, setSelectedOption] = useState("");
    const { loading, error, data } = useQuery(GET_DATA);
    const [form, setForm] = useState(null);
    const [section_fields, setFields] = useState([]);

    useEffect(() => {
        if (data?.event?.forms?.length > 0) {
            setForm(data.event.forms[0]);
            setFields(data.event.forms[0].form_section_fields);
        }
    }, [data?.event]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.event.forms) return <p>No data available</p>;

    return (
        <>

        <Navbar_v1 />
        <div className="container">
            <p>{form?.Description}</p>
        </div>
        <section className="vh-auto gradient-custom">
            <div className="container py-5 h-100 w-100">
                <div className=" row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-12 col-xl-8">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                            <Typography className="ml-4 mt-3 pb-2 pb-md-0" variant="h4" component="h6">{form?.caption}</Typography>
                            <div className="card-body p-4 p-md-5">
                                <form className= "d-flex flex-wrap">
                                    {section_fields && section_fields.map((item, index) => {
                                        return (
                                            <div style={item?.is_single_column === true ? { width: '100%' } : { width: '50%' }}   key={item.id}>
                                                
                                                {/* Email Field */}
                                                {item.data_field === 'email' && ( 
                                                    <div className = "col-md-12 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                                                {item?.caption}
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id={`${item.data_field}-${index}`}
                                                                name={item.field_type}
                                                                className="form-control form-control-lg"
                                                                placeholder={item?.placeholder}
                                                                required={item?.is_required}
                                                            />
                                                            <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                                            Hint: {item?.field_hint}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Password Field */}

                                                {item.data_field === 'password' && (
                                                    <div className = "col-md-12 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                                                {item?.caption}
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id={`${item.data_field}-${index}`}
                                                                name={item.field_type}
                                                                className="form-control form-control-lg"
                                                                placeholder={item?.placeholder}
                                                                required={item?.is_required}
                                                            />
                                                            <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                                            Hint: {item?.field_hint}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* radio Field */}

                                                {item.data_field === 'radio' && (
                                                    <div className = "col-md-12 mb-4">
                                                    <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor={`${item.data_field}-${index}`}>{item.caption}: </label>
                                                    { item.form_field_choices.map((choice, index) => {
                          
                                                        return (
                                                            <div className="form-check form-check-inline" key={index}>
                                                                <label  className="form-check-label" htmlFor={choice?.caption}>
                                                                    {choice?.caption}
                                                                </label>
                                                                <input

                                                                    type="radio"
                                                                    className=" form-control form-check-input"
                                                                    id={`${item.data_field}-${index}`}
                                                                    name={item.field_type}
                                                                    placeholder={item?.placeholder}
                                                                    required={item?.is_required}

                                                                    defaultChecked
                                                                />
                                                            </div>
                                                        )
                                                    })}

                                                    {/* <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                                    {item?.field_hint}
                                                    </label> */}
                                                    </div>
                                                    </div>
                                                )}

                                                {/* Additional Fields */}
                                                {/* Add more conditional rendering blocks for other field types here */}
                                            </div>
                                        );
                                    })}

                                    <div className="mt-4 pt-2">
                                        <button data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer_v1 />
    </>
    );
}