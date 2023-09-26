import { useState } from 'react';
import './App.css';
import ExtractFieldsFromLinesComponent from './components/ExtractFieldsFromLinesComponent';
import UploadForm from './components/UploadForm';
import LineInstructionsForm from './components/LineInstructionsForm';
import {FloatButton } from 'antd'

function App() {
  const [uploadedTextFile, setUploadedTextFile] = useState();
  const [showLineInstructionsFormBoolean, setShowLineInstructionsFormBoolean] = useState(false)

  const [lineInstructions, setLineInstructions] = useState([
    {
      startLine: 1,
      endLine: 1,
      fields: [
        { name: 'Nome da empresa', startPos: 1, endPos: 27 },
        { name: 'Ano atual', startPos: 28, endPos: 31 },
      ],
    },
    {
      startLine: 2,
      endLine: 10,
      fields: [
        { name: 'Campo 1 ao 8', startPos: 1, endPos: 8 },
        { name: 'Outro campo', startPos: 8, endPos: 28 },
      ],
    },
  ]);

  return (
    <div>
      <ExtractFieldsFromLinesComponent 
      lineInstructions={lineInstructions} 
      uploadedTextFile={uploadedTextFile}
      />
      <br />
      {}
      <UploadForm
        uploadedTextFile={uploadedTextFile}
        setUploadedTextFile={setUploadedTextFile} 
      />
      <FloatButton onClick={() => {setShowLineInstructionsFormBoolean(!showLineInstructionsFormBoolean)}}/>
      {showLineInstructionsFormBoolean && <LineInstructionsForm lineInstructions={lineInstructions}  setLineInstructions={setLineInstructions} />}
    </div>
  );
}

export default App;
