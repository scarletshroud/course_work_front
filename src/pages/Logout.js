import React, { Component, useState, useEffect } from 'react'
import {Link, useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userToken: localStorage.getItem('userToken')})
    }
  
    fetch("http://localhost:8080/api/logout", requestOptions)
      .then(localStorage.removeItem('userToken'), localStorage.setItem('authenticated', false), navigate("/login"));
  }, []);

  return null;
}