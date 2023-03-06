
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";



function Trederdash() {

    return (
        <div>

            <br></br><br></br>

            <Row>
        
               <Col sm="2"></Col>
                <Col sm="3">
                    <Card body>

                        <CardTitle tag="h1">
                            Buy New Product
                        </CardTitle>


                        <Button href="buy" className="btn btn-danger" type="submit">
                            Buy
                        </Button>
                    </Card>
                </Col>

               

            
            
            

                <Col sm="3">
                    <Card body>
                        <CardTitle tag="h1">
                            Add New Stock
                        </CardTitle>
                        <Button href="addstock" className="btn btn-danger" type="submit">
                            Add Stock
                        </Button>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card body>
                        <CardTitle tag="h1">
                            View Your Stock
                        </CardTitle>
                        <Button href="stock" className="btn btn-danger" type="submit">
                            View
                        </Button>
                    </Card>
                </Col>


            </Row>
            <br></br><br></br><br></br><br></br><br></br>

        </div>
    );
}

export default Trederdash;