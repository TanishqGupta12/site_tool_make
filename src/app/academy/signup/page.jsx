"use client";
import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
import Footer_v1 from "@/components/footer/Footer_v1";
import Navbar_v1 from "@/components/navbar/Navbar_v1";

import { useForm } from 'react-hook-form';

const GET_DATA = gql`
  query EventData($eventId: ID!) {
    event(id: $eventId) {
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

export default function Signup() {
  const { register,handleSubmit, formState: { errors },} = useForm();
  const [eventId, setEventId] = useState(null);

  useEffect(() => {
    const storedEventId = localStorage.getItem("event_id");
    if (storedEventId) setEventId(storedEventId);
  }, []);


  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { eventId },
    skip: !eventId, // Skip the query if eventId is not set
  });

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
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-12 col-xl-8">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <Typography className="ml-4 mt-3 pb-2 pb-md-0" variant="h4" component="h6">
                  {form?.caption}
                </Typography>
                <div className="card-body p-4 p-md-5">
                  <form  onSubmit={handleSubmit((data) => console.log(data))} className="d-flex flex-wrap">
                    {section_fields.map((item, index) => (
                      <div key={item.id} style={item.is_single_column ? { width: "100%" } : { width: "50%" }}>
                        {/* Email Field */}
                        {item.data_field === "email" && (
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                {item.caption}
                              </label>
                              <input
                                type="email"
                                id={`${item.data_field}-${index}`}
                                name={item.field_type}
                                className="form-control form-control-lg"
                                placeholder={item.placeholder}
                                required={item.is_required}
                                {...register(item.field_type, item.is_required ? { required: `${item.caption} is required` } : {})}
                              />
                                {errors[item.field_type] && <p style={{ color: "red" }}>{errors[item.field_type].message}</p>}
                              <small className="form-text text-muted d-block mt-1" htmlFor={`${item.data_field}-${index}`}>
                                Hint: {item.field_hint}
                              </small>
                            </div>
                          </div>
                        )}

                        {/* Password Field */}
                        {item.data_field === "password" && (
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                {item.caption}
                              </label>
                              <input
                                type="password"
                                id={`${item.data_field}-${index}`}
                                name={item.field_type}
                                className="form-control form-control-lg"
                                placeholder={item.placeholder}
                                required={item.is_required}
                                {...register(item.field_type, item.is_required ? { required: `${item.caption} is required` } : {})}
                              />
                                  {errors[item.field_type] && <p style={{ color: "red" }}>{errors[item.field_type].message}</p>}
                              <small className="form-text text-muted d-block mt-1" htmlFor={`${item.data_field}-${index}`}>
                                Hint: {item.field_hint}
                              </small>
                            </div>
                          </div>
                        )}

                        {/* number Field */}
                        {item.data_field === "number" && (
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor={`${item.data_field}-${index}`}>
                                {item.caption}
                              </label>
                              <input
                                type="number"
                                id={`${item.data_field}-${index}`}
                                name={item.field_type}
                                className="form-control form-control-lg"
                                placeholder={item.placeholder}
                                required={item.is_required}
                                {...register(item.field_type, item.is_required ? { required: `${item.caption} is required` } : {})}
                              />
                                  {errors[item.field_type] && <p style={{ color: "red" }}>{errors[item.field_type].message}</p>}
                              <small className="form-text text-muted d-block mt-1" htmlFor={`${item.data_field}-${index}`}>
                                Hint: {item.field_hint}
                              </small>
                            </div>
                          </div>
                        )}

                        {/* Radio Field */}
                        {item.data_field === "radio" && (
        
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              <label className="form-label d-block">{item.caption}:</label>
                              {item.form_field_choices.map((choice, idx) => (
                                <div className="form-check form-check-inline" key={idx}>
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    id={`${item.data_field}-${index}-${idx}`}
                                    name={`${item.data_field}-${index}`}
                                    value={choice.caption}
                                    required={item.is_required}
                                    defaultChecked={idx === 0}
                                    {...register(item.field_type, item.is_required ? { required: `${item.caption} is required` } : {})}
                                  />
                                  <label className="form-check-label fw-bold text-primary" htmlFor={`${item.data_field}-${index}-${idx}`}>
                                    {choice.caption}
                                  </label>
                                </div>
                              ))}
                                  {errors[item.field_type] && <p style={{ color: "red" }}>{errors[item.field_type].message}</p>}
                                <small className="form-text text-muted d-block mt-1" htmlFor={`${item.data_field}-${index}`}>
                                  {item.field_hint}
                                </small>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                  <div className="mt-auto pt-2 text-center">
                    <button className="btn btn-primary btn-lg px-4 py-2 fw-semibold shadow-sm" type="submit">
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