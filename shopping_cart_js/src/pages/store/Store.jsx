import ItemCard from "../../components/StoreItem/cards/ItemCard"
import storeItems from "../../shared/constants/items.json"
import { Col, Row} from "react-bootstrap"

const Store = () => {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} lg={3} xs={1} className="g-3">
                {storeItems?.map(item => (
                    <Col key={item.id}>
                        <ItemCard data={item}  />
                    </Col>
                ))}
            </Row>
        </>
        )
}

export default Store
