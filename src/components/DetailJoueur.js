import React from 'react';

const DetailJoueur = () => {
    return(

        <div className='detail-joueur-container'>
            <div className='hisImg-detail'></div>
            <div className='detail-infos-gen'>
                <div className='detail-infos-gen-name'>
                    <span>Novak</span>
                    <br />
                    <span>Djokovi</span>
                </div>
                <div className='infos-gen-cols'>
                    <div className='infos-gen-col'>
                        <div className='infos-gen-col-bloc'>
                            <div className='infos-gen-col-bloc-label'>RANK</div>
                            <div className='infos-gen-col-bloc-val'>#1</div>
                        </div>
                        
                        <div className='infos-gen-col-bloc'>
                            <div className='infos-gen-col-bloc-label'>BIRTHDAY</div>
                            <div className='infos-gen-col-bloc-val'>22/05/1987</div>
                        </div>

                        <div className='infos-gen-col-bloc'>
                            <div className='infos-gen-col-bloc-label'>WEIGHT</div>
                            <div className='infos-gen-col-bloc-val'>77kg</div>
                        </div>
                    </div>
                    <div className='infos-gen-col'>
                        <div className='infos-gen-col-bloc'>
                            <div className='infos-gen-col-bloc-label'>POINTS</div>
                            <div className='infos-gen-col-bloc-val'>11015</div>
                        </div>
                        
                        <div className='infos-gen-col-bloc'>
                            <div className='infos-gen-col-bloc-label'>AGE</div>
                            <div className='infos-gen-col-bloc-val'>34</div>
                        </div>

                        <div className='infos-gen-col-bloc'>
                            <div className='infos-gen-col-bloc-label'>HEIGHT</div>
                            <div className='infos-gen-col-bloc-val'>188cm</div>
                        </div>
                    </div>
                    <div className='infos-gen-col'>
                        <div className='infos-gen-col-bloc'>
                            <div className='infos-gen-col-bloc-label'>COUNTRY</div>
                            <div className='infos-gen-col-bloc-val'>Serbie</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='infos-career'>
                <div className='drapeau-zone'>
                    <div className='drapeau'></div> 
                    <div className='codePays'>S R B</div>
                </div>
                <div className='infos-career-details'>
                        <div className='infos-career-details-title'>CAREER TITLE</div> 
                        <div>
                            <div className='infos-career-details-title-years'>2021 - 5</div>
                            <div className='tournaments'>ATP Master 1000 PAris(Indoor/Hard)</div>
                            <div className='tournaments'>Wimbledon (Outdoor/Grass)</div>
                            <div className='tournaments'>Roland Garros (Outdoor/Clay)</div>
                            <div className='tournaments'>Belgrade 2 (Outdoor/Clay)</div>
                            <div className='tournaments'>Autstralian Open (Outdoor/Hard)</div>
                        </div> 
                    <div>
                        <div>
                            <div className='infos-career-details-title-years'>2020 - 4</div>
                            <div className='tournaments'>ATP Master 1000 Rome (Outdoor/Clay)</div>
                            <div className='tournaments'>ATP Master Cincinati (OUtdoor/Hard)</div>
                            <div className='tournaments'>Dubai (Outdoor/Hard)</div>
                            <div className='tournaments'>Australian Open (Outdoor/Hard)</div>
                        </div>
                        <div>
                            <div className='infos-career-details-title-years'>2019 - 4</div>
                            <div className='tournaments'>ATP Master 1000 PAris</div>
                            <div className='tournaments'>Tokyo(Outdoor/Hard)</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DetailJoueur;