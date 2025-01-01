import { Route, Routes } from 'react-router-dom';
import NotFound from './notfound';
import Acceuill from './pageAcceuil';
import Pagedetail from './pagedetail';
import Caracteristique from './caractéristique';
import SignupPage from './signupPage';
import LoginPage from './loginPage';
import Populair from './populair';
import Filter from './filter';
import Card21 from './Card21';
import BestComments from './bestComments';
import Header from "./header";
import PublishPage from './publishpage';
import FirstPage from './firssst';
import MacBookAir1 from './detail3';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/acceuil' element={<Acceuill/>}/>
    <Route path='/' element={<FirstPage/>}/>
    <Route path='/publish' element={<PublishPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path="/details/:id" element={<Pagedetail />} />
    <Route path="/cretique" element={<MacBookAir1 />} />
    <Route path="/populair" element={<Populair />} />
    <Route path="/card21" element={<Card21 />} />
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
/*<Route path='/login' element={<Login/>}/>
<Route path='/sign-up' element={<Signin/>}/>
<Route path='/acceuil' element={<Acceuil/>}/>
<Route path='/search-result' element={<Result/>}/>
<Route path='/publish' element={<Publish/>}/>*/