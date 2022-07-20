import React from 'react';

const JoueurTennis = ({
    words,
    joueur,
}) => {
    const styleImg = {
        background: ` url(${joueur?.picture})top center `,
    }
    return (
    <>
        <div style={styleImg} className='hisImg'> </div>
        <div className='hisInfos'>
            <div className='nameJoueur'>{`${joueur?.firstname} ${joueur?.lastname}`}</div>
            <div className='details'>
            <div className='detail-joueur '>
                <div className='detail-category'>{words?.RANK_LABEL}</div>
                <div className='detail-val'>{joueur?.data?.rank}</div>
            </div>
            <div className='detail-joueur '>
                <div className='detail-category'>{words?.POINTS_LABEL}</div>
                <div className='detail-val'>{joueur?.data?.points}</div>
            </div>
            <div className='detail-joueur '>
                <div className='detail-category'>{words?.COUNTRY_LABEL}</div>
                <div className='detail-val'>{joueur?.country?.code}</div>
            </div>
            </div>
        </div>
    </>
    )
}

export default JoueurTennis;