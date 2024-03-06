import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeFromCart } from '../../store/slices/card-slice';

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <>
      <div className="flex flex-col items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex items-center flex-col p-3">
          <img src={cartItem?.image} alt={cartItem?.title} className="h-28 w-28 rounded-lg" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">
              Price:
              {' '}
              {' $'}
              {cartItem?.price}
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

CartTile.propTypes = {
  cartItem: PropTypes.string.isRequired,
};

export default CartTile;
