import {
  useRouter
} from "@unsetsoft/ryunixjs"

import routes from "./pages/routes"



const App = () => {

  const { Children, NavLink } = useRouter(routes);

  return (
    <div>
      <header>
        <nav>
          <ul>
            {routes.map((i, index) => {
              if (i.NotFound || i.noRenderLink) return;
              return <li><NavLink to={i.path}>{i.label}</NavLink></li>
            })}

            <li><NavLink to="/test/1234?message=hello-world">Test params & query</NavLink></li>

            <li><NavLink to="/notice-me-senpai">Test 404 Error page</NavLink></li>

            <li>
              <a href="https://github.com/Neyunse/demo-navigation-ryunixjs" target="_blank">
                Github navigation demo SRC
              </a>
            </li>

            <li>
              <a href="https://ryunixjs.unsetsoft.com/" target="_blank">
                RyunixJS Doc
              </a>
            </li>

          </ul>
        </nav>
      </header>
      <main>
        <div ryunix-class="container">
          <Children />
        </div>
      </main>
    </div>
  );
};

export default App
