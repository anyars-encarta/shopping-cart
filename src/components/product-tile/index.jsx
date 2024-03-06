import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addToCart, removeFromCart } from '../../store/slices/card-slice';

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>

        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">{product?.title}</h1>
        </div>

        <div className="flex items-center justify-center w-full mt-5">
          <button
            type="button"
            onClick={cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {
              cart.some((item) => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

ProductTile.propTypes = {
  product: PropTypes.string.isRequired,
};

export default ProductTile;
