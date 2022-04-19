import React from "react";
import { Container } from "react-bootstrap";
import image from "../../Images/questionAnswer.jpg";

const Blog = () => {
  return (
    <div className='text-white'>
      <img src={image} className='w-100' alt='' srcset='' height={400} />
      <Container>
        <div className='text-start py-5 w-75 mx-auto '>
          <h1 className='py-4 text-center fw-bold'>Question Answering</h1>
          <div>
            <h4 className='fw-bold my-1'>
              (Q) Difference between authorization and authentication?
            </h4>
            <h5 className='my-2 ps-3'>
              <strong>Answer :</strong>Authentication is the act of confirming a
              person's identity. Whereas authorisation is the process of
              confirming a user's access to certain apps, files, or data.{" "}
            </h5>
          </div>
          <div>
            <h4 className='fw-bold my-1'>
              (Q) Why are you using firebase? What other options do you have to
              implement authentication?
            </h4>
            <h5 className='my-2 ps-3'>
              <strong>Answer : </strong>It gives us safe access to the database
              directly from client-side code. The Firebase is Realtime Database,
              and so it allows us to create complex, collaborative apps. Data
              can also be stored locally, and realtime events continue to
              trigger even when the user is offline. By providing a responsive
              experience. <br />
              Other options except firebase : <br />
              It includes Back4App, Parse, AWS Amplify, Deployd, Hoodie, Kuzzle,
              etc.
            </h5>
          </div>
          <div>
            <h4 className='fw-bold my-1'>
              (Q) What other services does firebase provide other than
              authentication?
            </h4>
            <h5 className='my-2 ps-3'>
              <strong>Answer :</strong>
              <br />
              Cloud Firestore <br /> Cloud Functions <br />
              Hosting <br /> Cloud Storage <br /> Google Analytics <br />{" "}
              Predictions <br /> Cloud Messaging <br /> Dynamic Links <br />{" "}
              Remote Config <br />
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
