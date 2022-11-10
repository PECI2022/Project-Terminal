import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, ListGroup, Table } from 'react-bootstrap';

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
      
      <Container className="py-5">
        <h1>Index</h1>
        <ul>
          <li><a href="#idRequirements">Requirements</a></li>
          <li><a href="#idTools">Tools</a></li>
          <li><a href="#idUseCases">Use Cases</a></li>
          <li><a href="#idArquitecture">Arquitecture</a></li>
        </ul>

        {/* Ŝpacer */}
        <div style={{height:"50px"}}></div>
        <hr />
        <div style={{height:"50px"}}></div>

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
            
            <ul>
              <li>Good description and definition of the contents of each file as well as the 
            way they interact with others;</li>
              <li>Units of measure; </li>
              <li>Identification of the parameters of each table; </li>
              <li>Hardware and software requirements and restrictions;</li>
              <li>Specification of needed environmental conditions;</li>
              <li>Data processing guide;</li>
              <li>Description of associated datasets;</li>
              <li>Support contacts.</li>
            </ul>
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

        {/* Ŝpacer */}
        <div style={{height:"25px"}}></div>
        <hr />
        <div style={{height:"25px"}}></div>

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

        {/* Ŝpacer */}
        <div style={{height:"25px"}}></div>
        <hr />
        <div style={{height:"25px"}}></div>

        {/* Use Cases */}
        <h1 id="idUseCases">Use Cases</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Use Case</th>
              <th>Synopsis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1.1: Record Video</td>
              <td>The User, after accessing our WebSite, will be able to record his video and do all the kind of gestures he desires using his webcam.</td>
            </tr>
            <tr>
              <td>#1.2: Caption Recording</td>
              <td>After recording the gesture, the User must add a caption associated to it.</td>
            </tr>
            <tr>
              <td>#1.3: Add Gesture to DataBase</td>
              <td>Once this procedure is completed, the User should Confirm or Try Again if he desires so.</td>
            </tr>
            <tr>
              <td>#1.4: Merge Gestures</td>
              <td>User can merge sets to create a bigger DataSet.</td>
            </tr>
            <tr>
              <td>#1.4: Merge Gestures</td>
              <td>User can merge sets to create a bigger DataSet.</td>
            </tr>
            <tr>
              <td>#2.1: Use a Gesture Already Implemented</td>
              <td>User can browse from our DataBase and find the set that is the most suitable for him.</td>
            </tr>
            <tr>
              <td>#2.2: Test DataSet</td>
              <td>User can use our WebSite to test the selected set.</td>
            </tr>
            <tr>
              <td>#3.1: Crop The Video Performed By User</td>
              <td>The system must be able to recognise the di erent gestures from the recording.</td>
            </tr>
            <tr>
              <td>#3.2: Gathering Gestures From User</td>
              <td>This is the part where our team will perform the acquisition and add them into our DataBase of all the gestures captured by the users.</td>
            </tr>
          </tbody>
        </Table>

        {/* Ŝpacer */}
        <div style={{height:"25px"}}></div>
        <hr />
        <div style={{height:"25px"}}></div>

        {/* Architecture*/}
        <h1 id="idArquitecture">Architecture</h1>
        <img src="public/resources/Architecture.jpeg"  width="500" height="600"></img>

        {/* Ŝpacer */}
        <div style={{height:"500px"}}></div>

      </Container>
    </>
  );
}

export default App;
