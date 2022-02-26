import React, { Component, useState } from 'react'

function logout() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userToken: localStorage.getItem('userToken')})
    }

    fetch("http://localhost:8080/api/logout", requestOptions)
      .then(response => response.json())
      .then(localStorage.removeItem('userToken'))
      .then(navigate("/login"));
}