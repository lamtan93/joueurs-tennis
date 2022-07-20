import React from 'react';
import joueursTennisDico from '../common/joueursTeninsDico';
import JoueursTennisDetailView from '../JoueursTennisDetailView';
import '../../detailJoueur.css';

class JoueursTennisDetailHomePage extends React.Component {
    render(){
        return(
                <div className='joueursTennisDetailView'>
                    <JoueursTennisDetailView
                        words={joueursTennisDico}
                    />
                </div>
        )
    }
}

export default JoueursTennisDetailHomePage;