import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import TitleBlock from './TitleBlock/TitleBlock';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Skills from './Skills/Skills';
import Project from './Projects/Project';
import Demos from './Demos/Demos';
import Article from './Article/Article';
import NoMatch from './NoMatch/NoMatch';
import {store} from './store';
import HeaderCover from './HeaderCover/HeaderCover';
import HeaderCanvas from './HeaderCanvas/HeaderCanvas';

// Импорты demo-компонентов
import {Container as MainMenuDemoContainer} from './demo_components/main_menu_demo/Container/Container';
import {Container as GalleryDemoContainer} from './demo_components/gallery_demo/Container/Container';
import {Container as ShoppingListDemoContainer} from './demo_components/shopping_list_demo/Container/Container';
import {Container as ContextMenuDemoContainer} from './demo_components/context_menu_demo/Container/Container';
import {Container as SliderDemoContainer} from './demo_components/slider_demo/Container/Container';
import {Container as TaskListDemoContainer} from './demo_components/task_list_demo/Container/Container';

export const Context = React.createContext(store); // вот это неправильное подключение redux, под капотом он делает почти тоже самое, посмотри как правильно подключать
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
    let [windowSize, setWindowSize] = useState({'windowWidth': window.innerWidth, 'windowHeight': window.innerHeight});

    let resizeTimeout = null;
    window.addEventListener('resize', () => {  // есть ощущение, что ты пытаешься через javascript решить то, что решается версткой, медиа-запросы и резиновая верстка должны решать этот вопрос
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setWindowSize({'windowWidth': window.innerWidth, 'windowHeight': window.innerHeight});
        }, 600);
    });

    let [aboutMeContent, setAboutMeContent] = useState(null);
    let [projectsContent, setProjectsContent] = useState(null);
    let [skillsList, setSkillsList] = useState(null);
    let [contactsList, setContactsList] = useState(null);
    let [skillsDetail, setSkillsDetail] = useState(null);

    useEffect(() => {
        axios.get('./content/about_me.txt').then(response => setAboutMeContent(response.data)); // это явное переусложнение, тебе нужен контент, положи его в объект и импортируй 
        axios.get('./content/projects.txt').then(response => setProjectsContent(response.data)); // import { AboutMe } from './content/about_me.js' и работай как с объектом
        axios.get('./content/skills.txt').then(response => setSkillsList(response.data)); // строки с 71 по 84 не нужны и не будет дополнительной нагрузки на сеть и сервер, доп запросы не нужны
        axios.get('./content/contacts.txt').then(response => setContactsList(response.data));
        axios.get('./content/skills_detail.txt').then(response => setSkillsDetail(response.data));
        axios.get('./content/skills_detail.txt').then(response => setSkillsDetail(response.data));
    }, []);

    return (
        <Switch>
            <Route exact path="/">
                <HeaderCover/>
                <HeaderCanvas/>
                <TitleBlock windowSize={windowSize}/>
                <AboutMe windowSize={windowSize} content={aboutMeContent}/>
                <Skills windowSize={windowSize} content={skillsList}/>
                <Demos windowSize={windowSize} content={DEMO_DATA}/>
                <Project windowSize={windowSize} content={projectsContent}/>
                <Contacts windowSize={windowSize} content={contactsList}/>
            </Route>
            <Route exact path="/about_me">
                {aboutMeContent === null ? <Redirect to="/"/> : <Article content={aboutMeContent} title="Обо мне"/> /* вот тут проверка будет не нужна, если избавишься от подгрузки файлов выше */} 
            </Route>
            <Route exact path="/skills">
                {aboutMeContent === null ? <Redirect to="/"/> : <Article content={skillsDetail} title="Технологии"/>}
            </Route>
            {DEMO_DATA.map(data => <Route exact path={`${DEMO_PATH}/${data.href}`} key={data.href}>
                {data.component}
            </Route>)}
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
    );
}

export default App;
