/* eslint-disable no-undef */
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routeModel";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardsPage from '../cards/pages/CardsPage'
import SignupPage from '../users/pages/SignupPage';
import Sandbox from '../sandbox/Sandbox';
import UseState from '../sandbox/hooks/UseState';
import UseStateWithComplexObject from '../sandbox/hooks/UseStateWithComplesObject'
import LoginPage from "../users/pages/LoginPage";
import CardsDetailsPage from "../cards/pages/CardsDetailsPage";
import Loops from "../sandbox/Loops";
import FatherPropTypes from "../sandbox/propTypes/FatherPropTypes";
// import PropTypes from "../sandbox/PropTypes";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooks";
import HooksWrapper from "../sandbox/hooks/HooksWrapper";
import SetPost from "../sandbox/hooks/SetPost"
import UseStateWithArray from "../sandbox/hooks/UseStateWithArray"
import UseStateWithFunction from "../sandbox/hooks/UseStateWithFunction"
import UseStateWithObject from "../sandbox/hooks/UseStateWithObject"
import EventsWrapper from "../sandbox/events/EventsWrapper";
import Onclick from "../sandbox/events/Onclick"
import PropsWrapper from "../sandbox/props/PropsWrapper";
import FatherPropsString from "../sandbox/props/props-string/FatherPropsString"
import FatherPropsTwoKeys from "../sandbox/props/props-two-keys/FatherPropsTwoKeys"
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependencies from "../sandbox/life-cycle-hooks/UseEffectNoDependancies";
import CustomHooks from "../sandbox/custom-hooks/CustomHooks";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import CustomName from "../sandbox/custom-hooks/CustomName";
import Memozation from "../sandbox/memozation/Memozation";
import UseCallBack from "../sandbox/memozation/use-callback/UseCallback";
import UseMemo from "../sandbox/memozation/use-callback/UseMemo";
import UseCounter from "../sandbox/memozation/use-callback/UseCounter";
import A from "../sandbox/context/components/A";
import Age from "../sandbox/context/comp2/A";
import FormTest from "../sandbox/forms/FormTest";
import CreateCardPage from "../cards/pages/CreateCardPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import EditUserPage from "../pages/EditUserPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import WelcomePage from "../cards/pages/WelcomePage";
import UsersProfile from "../users/pages/UsersProfile";
import CRM from "../users/pages/CRM";


const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />}></Route>
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            {/* <Route path={ROUTES.USER_PROFILE} element={<UsersProfile />} /> */}
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.CRM} element={<CRM />} />
            <Route path={`${ROUTES.CARDS_DETAILS}/:id`} element={<CardsDetailsPage />} />
            <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
            <Route path={`${ROUTES.EDIT_USER}/:id`} element={<EditUserPage />} />

            <Route path={ROUTES.SANDBOX} element={<Sandbox />}>

                <Route path="loops" element={<Loops />} />
                <Route path="useStateComplexObj" element={<UseStateWithComplexObject />} />

                <Route path="hooks" element={<HooksWrapper />}>
                    <Route path="set-post" element={<SetPost />}></Route>
                    <Route path="use-state" element={<UseState />}></Route>
                    <Route path="Use-State-With-Array" element={<UseStateWithArray />}></Route>
                    <Route path="Use-State-With-complex-obj" element={<UseStateWithComplexObject />}></Route>
                    <Route path="Use-State-With-function" element={<UseStateWithFunction />}></Route>
                    <Route path="Use-State-With-obj" element={<UseStateWithObject />}></Route>
                </Route>
                <Route path="events" element={<EventsWrapper />}>
                    <Route path="on-click" element={<Onclick />}></Route>
                </Route>
                <Route path="props" element={<PropsWrapper />}>
                    <Route path="props-obj" element={<FatherPropTypes />}></Route>
                    <Route path="props-str" element={<FatherPropsString />}></Route>
                    <Route path="props-two-keys" element={<FatherPropsTwoKeys />}></Route>
                </Route>

                <Route path="Life-cycle-hooks" element={<LifeCycleHooks />}>
                    <Route path="use-state-cycle" element={<UseStateCycle />}></Route>
                    <Route path="use-effect" element={<UseEffectAsComponentDidMount />}></Route>
                    <Route path="use-effect-update" element={<UseEffectAsComponentDidUpdate />}></Route>
                    <Route path="use-effect-unmount" element={<UseEffectAsComponentWillUnmount />}></Route>
                    <Route path="use-effect-update-no-deps" element={<UseEffectNoDependencies />}></Route>
                </Route>

                <Route path="custom-hook" element={<CustomHooks />}>
                    <Route path="custom-counter" element={<CustomCounterHook />}></Route>
                    <Route path="custom-name-hook" element={<CustomName />}></Route>
                </Route>


                <Route path="memozation" element={<Memozation />}>
                    <Route path="use-callback" element={<UseCallBack />}></Route>
                    <Route path="use-memo" element={<UseMemo />}></Route>
                    <Route path="use-counter" element={<UseCounter />}></Route>
                </Route>
                <Route path="context" element={<A />}></Route>
                <Route path="context-age" element={<Age />}></Route>
                <Route path="form-test" element={<FormTest />}></Route>

            </Route>
            <Route path="*" element={<ErrorPage />} />
            <Route path={ROUTES.ROOT} element={<WelcomePage />} />
        </Routes>
    )
}
export default Router;