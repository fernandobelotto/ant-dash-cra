import {
    BrowserRouter,
    Routes as ReactRoutes,
    Route
} from "react-router-dom";
import Home from "../pages/Home";

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <ReactRoutes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/:productId" element={<ProducDetailPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/success" element={<SuccessPage />} />
                    <Route path="/error" element={<ErrorPage />} /> */}
                </ReactRoutes>
            </BrowserRouter>
        </>
    )
}

