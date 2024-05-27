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

import { getFeatures } from "@ijl/cli";

const Search = () => {
    const [formValues, setFormValues] = useState({ 'where-find': '', 'sort-by': '' });
    const [currenctCoord, setcurrenctCoord] = useState([55.801619, 49.08803]);
    const [users, setUsers] = useState([]);

    const { showDogsitters } = getFeatures("cruellas-de-vil");

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch(`${URLs.api.main}/users`);
            const userData = await response.json();
            const filteredUsers = userData.filter(user => Array.isArray(user.role) ? user.role.includes('dogsitter') : user.role === 'dogsitter');
            setUsers(filteredUsers);
          } catch (error) {
            console.error('Error fetching users data: ', error);
          }
        };
        
        if (showDogsitters) {
            fetchUsers();
        }
      }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=35bccd6d-a845-4fcd-a7dc-ef66e5fcadfc&lang=ru_RU';
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
        const fetchData = async () => {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=816d8c8d-fa03-4ba1-85d9-bbb1ebbac0a6&geocode=${encodeURI(formValues['where-find'])}`);
            const data = await response.json();
            
            if (data.response.GeoObjectCollection.featureMember.length > 0) {
                const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse();
                setcurrenctCoord(coordinates);
            } else {
                setcurrenctCoord([]);
            }
        };
    
        fetchData();
    }, [formValues['where-find']]);

    const [points, setPoints] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newPoints = await Promise.all(users.map(async user => {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=35bccd6d-a845-4fcd-a7dc-ef66e5fcadfc&geocode=${encodeURI(user.location)}`);
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
                <StyledFinded>Найдено: {users.length} догситтера</StyledFinded>
                <StyledPreviewMap>
                    { showDogsitters && <PreviewsList users={users} currentPoint={currentPoint}/> }
                    <StyledMap>
                        <YMaps>
                            <Map state={{ center: currenctCoord, zoom: 10 }} width="100%" height="100%">
                                {points.map((point, index) => (
                                    <Placemark key={index} geometry={point.coordinates} properties={{ iconContent: `${index + 1}` }} onClick={() => setCurrentPoint(point.id)}/>
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