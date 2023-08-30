class Component<T> {
  constructor(public props: T) {}
}

interface PageProps {
  title: string;
}
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
const pageProps: PageProps = { title: "My page" };
const page = new Page(pageProps);
page.pageInfo;

export {};
