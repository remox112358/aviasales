import { RootState } from '../redux/reducers' 
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector