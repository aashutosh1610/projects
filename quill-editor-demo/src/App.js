import QuillEditor from './components/QuillEditor';
import './App.css';

const App = () => {
    const dummyHTMLContent = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dummy HTML Content</title>
  <link rel="stylesheet" href="App.css">
</head>

<body>
  <h1>This is a Dummy HTML Content</h1>
  <div class="wrapper">
    <div class="column-1" style="color: red;">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum gravida arcu, in consectetur mauris. Nullam
          in pharetra justo. Aliquam erat volutpat. Fusce nec metus sit amet odio varius lacinia. Phasellus sodales justo in
          nunc aliquam, eget tincidunt odio dignissim. Sed efficitur gravida lectus, at vestibulum nulla vestibulum vel.
      </p>
      Integer ullamcorper erat vitae ligula tristique, a accumsan purus condimentum. Fusce efficitur massa sed augue
        facilisis, nec convallis metus efficitur. Ut finibus aliquam lacus, sed feugiat ligula feugiat in. Ut vel risus
        nisi.
        Sed vitae massa eu nisi dictum commodo.
    </div>
    <img src="https://picsum.photos/300/200" alt="test-1">
  </div>
</body>

</html>`;

  function extractBodyFromHTML(htmlContent) {
    const bodyRegex = /<body[^>]*>[\s\S]*?<\/body>/gi;
    const match = bodyRegex.exec(htmlContent);
    return match ? match[0] : "";
  }

  const bodyContent = extractBodyFromHTML(dummyHTMLContent);
  
  const handleSubmit = async (updatedContent) => {
    // Send updated HTML content to backend
    console.log("Updated Content:", updatedContent);
    // Implement your logic to send data to backend
  };

  return (
    <div className="App">
      <header>Quill Editor</header>
      <QuillEditor initialContent={bodyContent} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
