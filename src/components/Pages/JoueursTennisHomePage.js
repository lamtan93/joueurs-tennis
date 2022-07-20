import React from 'react';
import store from '../../redux/store';
import JoueursTennisView from '../JoueursTennisView';
import '../../config/axios-conf';
import * as axios from 'axios';
import listJoueursActions from '../../redux/actions/listJoueursActions';
import joueursTennisDico from '../common/joueursTeninsDico';
import '../../style/App.css';
import '../../style/App-mob.css';

const {
    fetchListJoueursDataRequest,
    fetchListJoueursDataSuccess,
    fetchListJoueursDataError
} = listJoueursActions || {};

class JoueursTennisHomePage extends React.Component {
    componentDidMount(){
        store.dispatch(fetchListJoueursDataRequest());
        setTimeout(() => this.fetchListeJoueursTennis() , 2000);
    }

    fetchListeJoueursTennis = () => {
        axios.get('/headtohead.json')
        .then(res => {
            store.dispatch(fetchListJoueursDataSuccess(res?.data))
        })
        .catch(error => {
            store.dispatch(fetchListJoueursDataError(error))
        })
    }
    
    render(){
        return(
                <div className='joueursTennisView'>
                    <JoueursTennisView 
                        words={joueursTennisDico}
                    />
                </div>
        )
    }
}

export default JoueursTennisHomePage;