import React, {useState} from "react";


function MyComponent(){
     
    const [name, setName] = useState("");
    const [quan, setQuan] = useState();
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);

    }

    function handleQuanChange(event){
        setQuan(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    return(<>
    <div>
    <input type="text" placeholder="Wrtie your name: " value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input type="number" value={quan} onChange = {handleQuanChange} />
        <p>Quantity: {quan}</p>

        <select value={payment} onChange={handlePaymentChange} name="" id="">
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value = "Pick Up" 
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}/>
            Pick Up
        </label>
        
        <label>
        <input type="radio" value = "Delivery" 
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
        
        
    </>)
}

export default MyComponent;


