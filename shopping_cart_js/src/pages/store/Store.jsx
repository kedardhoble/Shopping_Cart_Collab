import Slider from "../../components/carousel/Slider";

const Store = ({categories}) => {
    return (
        <>  
            <h1>Store</h1>
            <div className="store-page">
                {categories.map((category) => (
                    <div key={category.name} className="category-section">
                        <h2>{category.name}</h2>
                        <Slider items={category.items} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Store
