import {
  Badge,
  Container,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";
import "./styles.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { Cart } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);
  // console.log(cart);
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search for product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge
                  className="badge-class"
                  bg="success"
                  style={{ fontSize: 15 }}
                >
                  {cart.length}
                </Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 280 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <div className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>${prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </div>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 5 }}>Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
