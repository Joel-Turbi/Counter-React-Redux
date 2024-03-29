import {connect} from 'react-redux';
import Counter from '../Components/Component'

const mapStateToProps = state=>({

    count: state.count
});

const mapDispatchToProps =dispatch=>({

    increment: ()=>dispatch({type:'INCREMENT'}),
    decrement: ()=>dispatch({type:'DECREMENT'})
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)