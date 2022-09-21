
import { useSearch } from '../../hooks/useSearch';
import { AlertsTypes } from '../../ui/components';
import { HeroCard } from '../components';
import { Hero } from '../models';

type Props = {}


export const SearchPage = (props: Props) => { 

  const { heroesFind ,errorSearch ,showSearch,querySearch ,searchText ,onInputChange ,onSubmitForm } = useSearch()

  
  return (
    <>
      <h1 className="mt-2">Search your hero</h1>
      <hr />
      <div className="row">
        <div className="col-5">
        <h4>Searching...</h4>
        <hr />
        <form>
          <input 
            type="text" 
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            onChange={ onInputChange }
            value = { searchText }
          />
          <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
            onClick= { onSubmitForm }
          >
            Search
          </button>
        </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr /> 
          <AlertsTypes alertType={'primary'}>
            Search a Hero
          </AlertsTypes>
          {
            errorSearch 
            && <AlertsTypes alertType={'danger'}>
                Hero not exist with <b>{ querySearch }</b>
              </AlertsTypes>
          } 
          {
            showSearch && 
            <AlertsTypes alertType={'success'}>
              Found with: <b>{ querySearch }</b>
            </AlertsTypes>
          }
          {
            heroesFind.map((hero:Hero) =>(
              <HeroCard 
                key={hero.id} 
                { ...hero }
              />
            ))
          }
        </div>  
      </div>
      
    </>
  )
}