import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



const Footer = () => {


  return (
     <div style={{display:"flex" , flexDirection:"column"}}>
       <div style={{height:"5vh" ,width:'100vw' }}></div>
    <MDBFooter color="cyan"  className="font-small darken-3 pt-0 footer">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a href="https://www.facebook.com/" className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://twitter.com/" className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://github.com" className="gplus-ic">
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://www.linkedin.com/" className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://www.instagram.com/" className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://in.pinterest.com/" className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;