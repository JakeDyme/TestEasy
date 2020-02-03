import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { SetActionsList, FetchingActionsList } from '../actions'

const GET_ACTIONS_ENDPOINT = "https://localhost:5001/view/actions";
const dispatch = useDispatch;

const fetchActions = async () => {
    try {
      //setData({ isFetching: false });
      dispatch(FetchingActionsList(true));
      const response = await axios.get(GET_ACTIONS_ENDPOINT);
      dispatch(SetActionsList(response.data));
    //   setData({
    //     items: response.data.map(d => toEditable(d)),
    //     isFetching: false
    //   });
    
    } catch (e) {
      console.log(e);
    //   setData({
    //     isFetching: false 
    //   });
    } finally {
        dispatch(FetchingActionsList(false));
    }
  };

  export default fetchActions;