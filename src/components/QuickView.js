import { Dialog } from '@headlessui/react';
import { useState } from 'react';

const QuickView = ({ product, open, setOpen }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = () => {
    setCartItems([...cartItems, { product, selectedColor, selectedSize }]);
    setShowCart(true);
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    {product.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <img src={product.imageSrc} alt={product.imageAlt} className="w-full object-cover object-center" />
                    <p className="text-sm text-gray-500">{product.price}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <button
                type="button"
                onClick={addToCart}
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>

      {/* Shopping Cart Modal */}
      {showCart && (
        <Dialog open={showCart} onClose={() => setShowCart(false)} className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  Shopping Cart
                </Dialog.Title>
                <div className="mt-2">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between mt-2">
                      <p>{item.product.name}</p>
                      <p>{item.product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <Dialog open={showCheckout} onClose={() => setShowCheckout(false)} className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  Checkout
                </Dialog.Title>
                <div className="mt-2">
                  {/* Dummy payment form */}
                  <p>Please enter your payment information:</p>
                  <input type="text" placeholder="Card number" className="border border-gray-300 px-3 py-2 mt-2" />
                  <input type="text" placeholder="Expiry date" className="border border-gray-300 px-3 py-2 mt-2" />
                  <input type="text" placeholder="CVV" className="border border-gray-300 px-3 py-2 mt-2" />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setShowCheckout(false)}
                >
                  Confirm Payment
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </Dialog>
  );
};

export default QuickView;
