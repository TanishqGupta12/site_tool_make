"use client"
import React , { useState } from "react";
import Footer_v1 from "@/components/footer/Footer_v1";
import Navbar_v1 from "@/components/navbar/Navbar_v1";

import {GetDataResponse} from "@/interface/types";

import { gql, useQuery } from '@apollo/client';


const GET_DATA = gql`
query {

    event(id: 1) {
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
        }
    }
}
`;

export default function Signup() {

    const [selectedOption, setSelectedOption] = useState("");
      const { loading, error, data } = useQuery<GetDataResponse>(GET_DATA);

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error fkc: {error.message}</p>;
      if (!data || !data?.event) return <p>No data available </p>;
    {console.log(data)}
  return (
    <>
        <Navbar_v1 />
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div
                    className="card shadow-2-strong card-registration"
                    style={{ borderRadius: "15px" }}
                    >
                    <div className="card-body p-4 p-md-5">
                        <form>
                        {/* First & Last Name */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                                <input
                                type="text"
                                id="firstName"
                                className="form-control form-control-lg"
                                />
                                <label className="form-label" htmlFor="firstName">
                                First Name
                                </label>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                                <input
                                type="text"
                                id="lastName"
                                className="form-control form-control-lg"
                                />
                                <label className="form-label" htmlFor="lastName">
                                Last Name
                                </label>
                            </div>
                            </div>
                        </div>

                        {/* Birthday & Gender */}
                        <div className="row">
                            <div className="col-md-6 mb-4 d-flex align-items-center">
                            <div data-mdb-input-init className="form-outline datepicker w-100">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                id="birthdayDate"
                                />
                                <label htmlFor="birthdayDate" className="form-label">
                                Birthday
                                </label>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <h6 className="mb-2 pb-1">Gender: </h6>
                            <div className="form-check form-check-inline">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="femaleGender"
                                value="female"
                                defaultChecked
                                />
                                <label className="form-check-label" htmlFor="femaleGender">
                                Female
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="maleGender"
                                value="male"
                                />
                                <label className="form-check-label" htmlFor="maleGender">
                                Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="otherGender"
                                value="other"
                                />
                                <label className="form-check-label" htmlFor="otherGender">
                                Other
                                </label>
                            </div>
                            </div>
                        </div>

                        {/* Email & Phone Number */}
                        <div className="row">
                            <div className="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init className="form-outline">
                                <input
                                type="email"
                                id="emailAddress"
                                className="form-control form-control-lg"
                                />
                                <label className="form-label" htmlFor="emailAddress">
                                Email
                                </label>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init className="form-outline">
                                <input
                                type="tel"
                                id="phoneNumber"
                                className="form-control form-control-lg"
                                />
                                <label className="form-label" htmlFor="phoneNumber">
                                Phone Number
                                </label>
                            </div>
                            </div>
                        </div>

                        {/* Select Option */}
                        <div className="row">
                            <div className="col-12">
                                <div className="form-outline">
                                <select
                                    className="select form-control-lg"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                >
                                    <option value="" disabled>
                                    Choose an option
                                    </option>
                                    <option value="subject1">Subject 1</option>
                                    <option value="subject2">Subject 2</option>
                                    <option value="subject3">Subject 3</option>
                                </select>
                                <label className="form-label select-label">Choose an option</label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4 pt-2">
                            <button
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                            type="submit"
                            >
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
