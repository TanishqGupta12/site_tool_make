"use client"
import React, { useState, useEffect } from "react";

import { GetDataResponse } from "@/interface/types";
import Error from "@/components/error/error";
import Loading from "@/components/loading/loading";
import { gql, useQuery } from '@apollo/client';

// const teachers = [
//     { id: 1, img: "img/team-1.jpg", name: "John Doe", role: "Web Designer" },
//     { id: 2, img: "img/team-2.jpg", name: "Jane Smith", role: "UI/UX Designer" },
//     { id: 3, img: "img/team-3.jpg", name: "Alice Brown", role: "Software Engineer" },
//     { id: 4, img: "img/team-4.jpg", name: "David Wilson", role: "Full Stack Developer" },
// ];


const GET_DATA = gql`
  query {
    events {
      id
      teachers {
        id
        email
        salutation
        first_name
        last_name
        position
        organization
        address
        city
        mobile
        online_status
        locale
        avatar
        custom_fields
        createdAt
        updatedAt
        roleId
        f1            
        f2            
        f3            
        f4            
        f5            
        f6            
        f7            
        f8            
        f9            
        f10            
        f11            
        f12            
        f13            
        f14            
        f15
        role {
          id
          name
        }
      }
    }
  }
`;

export default function Teacher() {

    const { loading, error, data } = useQuery(GET_DATA);
    const [event, Setevent] = useState(null);
    const [teachers, Setteacher] = useState(null);
    
    useEffect(() => {
        if (data) {
            // Assuming the first event is the one you want to use
            // console.log(data?.events[0]);
            localStorage.setItem('event_id', data?.events[0]?.id)
            console.log(data?.events[0]);
            
            Setevent(data?.events[0]);
            Setteacher(data?.events[0]?.teachers)
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    console.log( data );
    console.log(error);
    
    
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Teachers</h5>
                    <h1>Meet Our Teachers</h1>
                </div>
                <div className="row">
                    {teachers ? teachers.map((teacher) => (
                        <div key={teacher.id} className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={teacher.img} alt={`Teacher ${teacher?.name}`} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>`{teacher.first_name} {teacher.last_name}`</h5>
                                    <p className="m-0">{teacher.role}</p>
                                </div>
                            </div>
                        </div>
                    )) : " Teacher Not Available"}
                </div>
            </div>
        </div>
    );
}
