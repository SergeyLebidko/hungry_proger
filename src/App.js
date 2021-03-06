import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TitleBlock from './TitleBlock/TitleBlock';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Skills from './Skills/Skills';
import Project from './Projects/Project';
import Demos from './Demos/Demos';
import Article from './Article/Article';
import NoMatch from './NoMatch/NoMatch';
import HeaderCover from './HeaderCover/HeaderCover';
import HeaderCanvas from './HeaderCanvas/HeaderCanvas';
import {Provider} from 'react-redux';
import {store} from './store';

// Импорты констант - контента
import {aboutMe, contacts, projects, skills, skillsDetail} from './content';

// Импорты demo-компонентов
import {Container as MainMenuDemoContainer} from './demo_components/main_menu_demo/Container/Container';
import {Container as GalleryDemoContainer} from './demo_components/gallery_demo/Container/Container';
import {Container as ShoppingListDemoContainer} from './demo_components/shopping_list_demo/Container/Container';
import {Container as ContextMenuDemoContainer} from './demo_components/context_menu_demo/Container/Container';
import {Container as SliderDemoContainer} from './demo_components/slider_demo/Container/Container';
import {Container as TaskListDemoContainer} from './demo_components/task_list_demo/Container/Container';

const DEMO_PATH = '/demo';
const DEMO_DATA = [
    {
        title: 'Главное меню',
        href: 'main_menu',
        component: <MainMenuDemoContainer/>
    },
    {
        title: 'Контекстное меню',
        href: 'context_menu',
        component: <ContextMenuDemoContainer/>
    },
    {
        title: 'Галерея',
        href: 'gallery',
        component: <GalleryDemoContainer/>
    },
    {
        title: 'Список покупок',
        href: 'shopping_list',
        component: <ShoppingListDemoContainer/>
    },
    {
        title: 'Слайдеры',
        href: 'sliders',
        component: <SliderDemoContainer/>
    },
    {
        title: 'Список задач',
        href: 'task_list',
        component: <TaskListDemoContainer/>
    }
];

function App() {
    return (
        <Provider store={store}>
            <Switch>
                <Route exact path="/">
                    <HeaderCover pk="h_cover"/>
                    <HeaderCanvas/>
                    <TitleBlock/>
                    <AboutMe content={aboutMe}/>
                    <Skills content={skills}/>
                    <Demos content={DEMO_DATA}/>
                    <Project content={projects}/>
                    <Contacts content={contacts}/>
                </Route>
                <Route exact path="/about_me">
                    <Article content={aboutMe} title="Обо мне"/>
                </Route>
                <Route exact path="/skills">
                    <Article content={skillsDetail} title="Технологии"/>
                </Route>
                {DEMO_DATA.map(data => <Route exact path={`${DEMO_PATH}/${data.href}`} key={data.href}>
                    {data.component}
                </Route>)}
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Provider>
    );
}

export default App;
