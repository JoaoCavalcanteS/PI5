import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardAlertaMorador from './CardAlertaMorador';

function TabMorador() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Alertas/Avisos gerais">
          <CardAlertaMorador />
      </Tab>
      <Tab eventKey="profile" title="Alertas/Avisos pessoais">

      </Tab>

    </Tabs>
  );
}

export default TabMorador;
