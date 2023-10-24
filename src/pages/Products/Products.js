import ProductsItem from "./ProductsItem";
import styled from "styled-components";


const products = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/247782/pexels-photo-247782.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/973510/pexels-photo-973510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/3250031/pexels-photo-3250031.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1070603/pexels-photo-1070603.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/4059155/pexels-photo-4059155.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1009921/pexels-photo-1009921.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1552616/pexels-photo-1552616.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/4056604/pexels-photo-4056604.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <ProductsItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;