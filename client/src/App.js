import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import "./App.scss";

const HomePage = lazy(() => import("./pages/home/home.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
// const SignInAndSignUpPage = lazy(() =>
//   import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
// );
const ContactPage = lazy(() => import("./pages/contact/contact.component"));
const SignIn = lazy(() => import("./pages/sign-in/sign-in.component"));
const SignUp = lazy(() => import("./pages/sign-up/sign-up.component"));
const ForgotPassword = lazy(() =>
  import("./pages/forgot-password/forgot-password.component")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
            />
            <Route
              exact
              path="/signup"
              render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
            />
            <Route exact path="/forgot-password" component={ForgotPassword} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
