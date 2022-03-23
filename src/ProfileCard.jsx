import React, {Component, useEffect, useState} from "react";

export const ProfileCardComponent = (props) => {
    const isFavourite =  props.isFavourite ? "fa fa-heart" : "fa fa-heart-o";
    /** Use Effects defined for monitoring purpose to see how hooks works**/
    useEffect(()=>{
        console.log("Get Derived State")
    })

    useEffect(()=>{
        console.log("Component Mounted")
    }, [props])

    useEffect(()=> {
        console.log("Component Mounted - No dependencies")
    }, [])

    useEffect(() => {
        return () => {
            console.log('unmount');
        }
    }, [])

    return (
        <div className="column">
            <div className="card">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:100}}></img>
                <h3>{props.name}</h3>
                <p><span className = "fa fa-envelope" />  {props.email}</p>
                <p><span className = "fa fa-phone" />    {props.phone}</p>
                <p><span className = "fa fa-globe" />     {props.website}</p>
                <div class = "btn-group">
                    <span id = "deleteProfile" className="fa fa-trash" onClick={() => props.deletehandler(props.id)}></span>
                    <span className={isFavourite} onClick={() => props.addToFavourite(props.id)}>   </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardComponent;