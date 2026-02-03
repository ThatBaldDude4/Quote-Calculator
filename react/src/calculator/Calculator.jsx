import {useState} from 'react'
import  Form  from './components/Form'
import  Input  from './components/Input'

export default function Calculator() {
    const [promoAmount, setPromoAmount] = useState(0)
    const [fairMarketAmont, setFairMarketAmount] = useState(0)
    const [phoneCost, setPhoneCost] = useState(0)

    function calculateMontlyBillCredit() {
        let result = ((promoAmount - fairMarketAmont) / 24).toFixed(2)
        return result
    }

    return (
        <Form>
            <Input 
                label="Promo amount"
                type="number"
                id="promo-amount"
                key="promo-amount"
                onChange={setPromoAmount}
            />
            <Input 
                label="Fair Market Value"
                type="number"
                id="fair-market-value"
                key="fair-market-value"
                onChange={setFairMarketAmount}
            />
            <Input 
                label="Desired device cost"
                type="number"
                id="phone-cost"
                key="phone-cost"
                onChange={setPhoneCost}
            />
            <div className="bill-credit">
                Monthly Bill Credit: {calculateMontlyBillCredit()}
            </div>
            {<p>Total of all nums for tests: {Number(promoAmount) * Number(fairMarketAmont) + Number(phoneCost)}</p>}
        </Form>
    )
}