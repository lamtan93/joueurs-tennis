import { createSelector, } from 'reselect'

export const joueursSelector = (state) => state?.listJoueurs;
export const filterJoueurSelector = (state) => state?.filterJoueur;

export const listeJoueursSearchByName = createSelector(joueursSelector, filterJoueurSelector, (listeJoueurs, filter) => {
    return listeJoueurs?.listJoueursData?.filter( joueur => joueur?.firstname?.toLowerCase()?.includes(filter?.name?.toLowerCase())
    || joueur?.lastname?.toLowerCase()?.includes(filter?.name?.toLowerCase()) )
})

