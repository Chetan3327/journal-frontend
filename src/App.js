import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import AdvisoryBoard from './components/Boards/AdvisoryBoard';
import EditorialBoard from './components/Boards/EditorialBoard';
import NavBar from './components/NavBar';
import Aim from './components/Aim'
import Policy from './components/Policy'
import Contact from './components/Contact'
import Faqs from './components/Faqs';
import Login from './components/Login';
import AuthorGuidelines from './components/Authors/AuthorGuidelines';
import SubmitManuscript from './components/Authors/SubmitManuscript';
import PaperForm from './components/Papers/PaperForm';
import PeerReview from './components/Review/PeerReview'
import JoinReviewer from './components/Review/JoinReviewer'
import ReviewerForm from './components/Papers/ReviewerForm'
import ContactForm from './components/Forms/ContactForm'
import AdvisoryForm from './components/Forms/AdvisoryForm';
import EditorialForm from './components/Forms/EditorialForm'
import MemberForm from './components/Forms/MemberForm';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AdvisoryBoard' element={<AdvisoryBoard />} />
          <Route path='/EditorialBoard' element={<EditorialBoard />} />
          <Route path='/Aim' element={<Aim />} />
          <Route path='/Policy' element={<Policy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/guidelines' element={<AuthorGuidelines />} />
          <Route path='/submitManuscript' element={<SubmitManuscript />}/>
          <Route path='/paperForm' element={<PaperForm />}/>
          <Route path='/PeerReview' element={<PeerReview />}/>
          <Route path='/joinReviewer' element={<JoinReviewer />}/>
          <Route path='/ReviewerForm' element={<ReviewerForm />}/>
          <Route path='/addContact' element={<ContactForm />}/>
          <Route path='/addAdvisorymember' element={<AdvisoryForm />}/>
          <Route path='/addEditorialmember' element={<EditorialForm />}/>
          <Route path='/addmember' element={<MemberForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
