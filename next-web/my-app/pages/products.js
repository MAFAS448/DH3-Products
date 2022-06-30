import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link'
import { useState } from 'react';
//import Image from 'next/image'

const root_url = "http://localhost:1337";

export async function getStaticProps(context) {

  const products = await axios.get(root_url+"/api/products?populate=image");

  return {
    props: {
      products: products.data
    }, // will be passed to the page component as props
  }
}



export default function products({products}) {

    const [query, setQuery] = useState("");

    return (
       <>
       <Container>
       <Row className = "my-3">
         <Col>
              <h1 className='text-primary'>DH3 Store</h1>
          </Col>
           <Col>
              <input type="text" placeholder='Search...' className='search' onChange={e=>setQuery(e.target.value)}/>
           </Col>
           <Col>
               <div><Link href="/">
                <a>Cetagories</a>
                 </Link>
              </div>
            </Col>
            <Col>
               <div><Link href="/products">
                <a>Products</a>
                 </Link>
              </div>
            </Col>

       </Row>
       <Col md="9">
           <Row>
            {
              products?.data?.filter(product => product.attributes.Name.toLowerCase().includes(query)).map((product) => <Col md='4'>
          <Card style={{ width: '18rem', marginBottom:"40px" }}>
             {/* <Card.Img src={root_url + products.attributes.image.data.attributes.url}/> */}
             <Card.Body key={product.id}>
                <Card.Title>{product.attributes.Name}</Card.Title>
                    <Card.Text>
                        {product.attributes.Description}
                    </Card.Text>
                    <Card.Text>
                        Rs.{product.attributes.Price}
                    </Card.Text>
               <Button variant="primary">view</Button>
            </Card.Body>
          </Card>
          </Col>
          )}
          </Row>
          </Col>

       </Container>
       </>
        
      )
    } 
  