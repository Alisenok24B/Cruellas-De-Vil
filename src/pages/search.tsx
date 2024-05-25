import React from "react";
import { useEffect, useState } from "react";

import { PreviewsList } from "../components/previews-list";
import { Container } from '../components/container';
import { TitleH1 } from '../components/title-h1';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { DivSearch } from '../components/div-search';
import { ErrorBoundary } from '../components/error-boundary';

import { StyledFind, StyledFinded, StyledMain, StyledMap, StyledPreviewMap } from './search.styled';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { URLs } from "../__data__/urls";

const Search = () => {
    const [formValues, setFormValues] = useState({ 'where-find': '', 'sort-by': '' });
    const [currenctCoord, setcurrenctCoord] = useState([55.753215, 37.622504]);
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch(`${URLs.api.main}/users`);
            const userData = await response.json();
            const filteredUsers = userData.filter(user => user.role === 'dogsitter');
            setUsers(filteredUsers);
          } catch (error) {
            console.error('Error fetching users data: ', error);
          }
        };
    
        fetchUsers();
      }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=cd99061c-900b-4ae4-a9ae-60d9e98c6827&lang=ru_RU';
        script.async = true;

        script.onload = () => {
            console.log('Yandex Maps API loaded');
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
        
    }, []);

    useEffect(() => {
        ymaps.ready(function () {  
           let currentPosition = ymaps.geocode(formValues["where-find"])
         
           currentPosition.then((res)=>
            {
                let coord = res.geoObjects.get(0).geometry.getCoordinates()
                setcurrenctCoord(coord)
            }
        );});
    }, [formValues]);

    const [points, setPoints] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newPoints = await Promise.all(users.map(async user => {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=cd99061c-900b-4ae4-a9ae-60d9e98c6827&geocode=${encodeURI(user.location)}`);
            const data = await response.json();
            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse();

            return {
                coordinates: coordinates,
                id: user.id
            };
        }));

        setPoints(newPoints);
        };

        fetchData();
  }, [users]);

  const [currentPoint, setCurrentPoint] = useState(null);

  return (
    <ErrorBoundary>
        <Header currentNavElement={"Карта"}/>
        <StyledMain>
            <Container>
                <StyledFind>
                    <TitleH1>Найти догситера</TitleH1>
                </StyledFind>
                <DivSearch formValues={formValues} setFormValues={setFormValues} users={users} setUsers={setUsers}/>
                <StyledFinded>Найдено: 2 догситтера</StyledFinded>
                <StyledPreviewMap>
                    <PreviewsList users={users} currentPoint={currentPoint}/>
                    <StyledMap>
                        <YMaps>
                            <Map state={{ center: currenctCoord, zoom: 10 }} width="100%" height="100%">
                                {points.map((point, index) => (
                                    <Placemark geometry={point.coordinates} properties={{ iconContent: `${index + 1}` }} onClick={() => setCurrentPoint(point)}/>
                                ))}
                            </Map>
                        </YMaps>
                    </StyledMap>
                </StyledPreviewMap>
            </Container>
        </StyledMain>
        <Footer/>
    </ErrorBoundary>
  );
};

export default Search;