import {Switch, Route} from "react-router-dom";
import {AddBook, AllBookList, EditBook, ViewBook} from "./pages";
import {Layout} from "./components";

function App() {
    return (
        <>
            <Layout>
                <Switch>
                    <Route path="/" exact component={AllBookList}/>
                    <Route path="/add-book" exact component={AddBook}/>
                    <Route path="/view/:id" exact component={ViewBook}/>
                    <Route path="/:id" exact component={EditBook}/>
                </Switch>
            </Layout>
        </>
    );
}

export default App;
