import { useEffect } from "react";
import api from '../../api/axios.config';
import { useParams } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm"; 
import { useRef } from "react";

import React from 'react'

const Reviews = ({getMovieData , movie , reviews=[],setReviews}) => {
    
    const revText =useRef();
    let params= useParams();
    const movieId = params.movieId;
    useEffect(()=>{
        getMovieData(movieId);
    },[])   

    const addReview = async (e) => {
        e.preventDefault();
        const rev= revText.current; 

        try{
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});
            if(response){
                const updateReviews = [ ...reviews,{body:rev.value}];
                rev.value="";
                setReviews(updateReviews);    
            }  
            else {
                // Display an appropriate message when the response is null
                alert("Failed to add review. Please try again later.");
            }
        }catch(err){
           console.error(err);
        }
    }
    return (
     <Container> 
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                 <img src={movie?.poster} alt=""/>
            </Col>
            <Col> 
                {
                    <> 
                      <Row>
                        <Col>
                        <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                            <hr/>
                        </Col>
                      </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                               <Row>
                                    <Col>{r.body}</Col>
                               </Row>
                               <Row>
                                    <Col>
                                        <hr/>
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
                <Col>
                <hr/>
                </Col>
        </Row>
     </Container>
  )
}

export default Reviews