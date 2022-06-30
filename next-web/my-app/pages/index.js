// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
// import axios from 'axios';
// import Link from 'next/link'
// //import Image from 'next/image'


// const root_url = "http://localhost:1337";

// export async function getStaticProps(context) {

//   const categories = await axios.get(root_url+ "/api/categories");
//   const products = await axios.get(root_url+"/api/products?populate=image");

//   return {
//     props: {
//       categories: categories.data,
//       products: products.data
//     }, // will be passed to the page component as props
//   }
// }

// export default function Categories ({ categories }) {
//   return (
//     <>  
//         <Container>
//          <Row className = "my-3">
//             <Col>
//                   <h1 className='text-primary'>DH3 Store</h1>
//              </Col>
//              <Col>
//                <div><Link href="/">
//                 <a>Cetagories</a>
//                  </Link>
//               </div>
//             </Col>
//             <Col>
//                <div><Link href="/products">
//                 <a>Products</a>
//                  </Link>
//               </div>
//             </Col>
//          </Row>

//           <Row>
//             <Col md="10">
//               <ListGroup>
//               {
//                   categories?.data?.map((category) => <ListGroup.Item >{category.attributes.name}</ListGroup.Item>)
//                 }
//               </ListGroup>
//           </Col>
//          </Row>
//          </Container> 
//     </>
//   )
// }



import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link'
//import Image from 'next/image'


const root_url = "http://localhost:1337";

export async function getStaticProps(context) {

  const categories = await axios.get(root_url+ "/api/categories");
  const products = await axios.get(root_url+"/api/products?populate=image");

  return {
    props: {
      categories: categories.data,
      products: products.data
    }, // will be passed to the page component as props
  }
}

export default function Categories ({ categories }) {
  return (
    <>  
        <Container>
         <Row className = "my-3">
            <Col>
                  <h1 className='text-primary'>DH3 Store</h1>
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

          <Row>
            <Col md="10">
              <ListGroup>
              {
                  categories?.data?.map((category) => <ListGroup.Item>{category.attributes.Name}</ListGroup.Item>)
                }
              </ListGroup>
          </Col>
         </Row>
         </Container> 
    </>
  )
}
