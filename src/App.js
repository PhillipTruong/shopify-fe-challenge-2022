import { Page, Card, Layout } from '@shopify/polaris';

const App = () => {
  return (
      <Page title="Spacestagram" subtitle='Image-sharing from the final frontier'>
        <Layout>
          <Card title="Images" sectioned>
            <p>Nasa images go here :p </p>
          </Card>
        </Layout>
      </Page>

  );
}

export default App;
