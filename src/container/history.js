import History from '../components/Hsitory';
import { connect } from 'react-redux';
import { } from '../module/app';

export const mapStateToProps = (state) => ({
    list: state.app.datalist,
    loading: state.app.loading
})

export const mapDispatchToProps = (dsipatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(History)