// pages/CarListing.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { getVehicles } from "../services/api";

const CarListing = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    // Llamar a la función para obtener la lista de vehículos cuando el componente se monta
    getVehicleList();
  }, []);

  const getVehicleList = async () => {
    try {
      const response = await getVehicles();
      setCarData(response.data);
    } catch (error) {
      console.error('Error fetching vehicle list:', error);
    }
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
