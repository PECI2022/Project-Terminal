import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, ListGroup } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Data Acquisition Modular Framework</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
      <ul>
        <li><a href="#idRequirements">Requirements</a></li>
        <li><a href="#idTools">Tools</a></li>
      </ul>

      {/* Requirements */}
      <h1 id="id1">Requirements</h1>
      <p><strong>R.1 - </strong>High investment in metadata quality, with the use of a standard ( 
        Dublin Core adaptation) that third-parties can easily follow as well which allows 
        for an automation  of merges and a comprehension of required hardware, data 
        interpretation processes and other necessary conditions.
      </p>
      <p>
        <strong>R.2 - </strong>Have as much data as possible open to the public in repositories such as 
        Git, Zenodo, Harvard Dataverse... 
        Private data can exist but only if necessary.
      </p>
      <p>
        <strong>R.3 - </strong>Minimize restrictions as much as possible in order to fully embrace a “ 
        as free as possible “ philosophy. For this, block only specific uses of the dataset, 
        ensure due credit to contributors and authors and avoid licenses.
      </p>
      <p>
        <strong>R.4 - </strong>Create well documented “README” files to facilitate third-parties 
          interactions with our data. 
          This includes but is not restricted to: <br />
          {'>'} Good description and definition of the contents of each file as well as the 
          way they interact with others; <br />
          {'>'} Units of measure; <br />
          {'>'} Identification of the parameters of each table; <br />
          {'>'} Hardware and software requirements and restrictions; <br />
          {'>'} Specification of needed environmental conditions; <br />
          {'>'} Data processing guide; <br />
          {'>'} Description of associated datasets; <br />
          {'>'} Support contacts.
      </p>
      <p>
        <strong>R.5 - </strong>Maintain a high and consistent abstraction level to ensure the 
        dataset is flexible enough to be merged or used for the broadest amount of 
        goals.
      </p>
      <p>
        <strong>R.6 - </strong>Implement a program structure with future mergers and expansions 
        from submissions in mind, following a crowd-sourced approach. 
      </p>
      <p>
        <strong>R.7 - </strong>Basic UI with main focus on the travel between a select few number 
        of pages essential to the user (video submission, video editing, dataset uses, 
        etc...) with the implementation of a small amount of features such as 
        recording, uploading and downloading content.
      </p>
      <p>
        <strong>R.8 - </strong>Modular framework to minimize the impact of errors and ease work 
        load distribution between peers.
      </p>

      {/* Tools */}
      <h1 id="idTools">Tools</h1>
      <p>
        <strong>Hardware - </strong>RGB camera, Specific environment conditions (tbd)
      </p>
      <p>
        <strong>Software - </strong>Mongo DB // Python // React // Flask or Node.js
      </p>
      <p>
        <strong>Version Control & Communication - </strong>GitHub // Discord // Microsoft Teams //  Pen and Paper
      </p>
      <p>
        <strong>Documentation - </strong>Yet to be determined. Possibly Overleaf, Microsoft Word and Excel
      </p>
      

      </Container>
    </>
  );
}

export default App;
