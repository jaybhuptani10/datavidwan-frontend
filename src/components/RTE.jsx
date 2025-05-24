import BundledEditor from "../BundledEditor";

import {useRef} from "react";


const RTE = ({value, onChange}) => {
    const editorRef = useRef(null);

    return(
        <BundledEditor
            onInit={(evt) => editorRef.current = evt.target}
            value={value}
            onEditorChange={onChange}
            init={{
        height: 500,
        menubar: true,
       
        plugins: 'link image code lists table fullscreen emoticons wordcount autosave accessibilitychecker',
        toolbar:
          'undo redo | emoticons | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | fullscreen',
        toolbar_mode: 'floating',
        block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Quote=blockquote',
        content_style: `
          body { font-family: 'Inter', sans-serif; padding: 16px; }
          h1 { font-size: 2.25rem; margin-bottom: 1rem; }
          h2 { font-size: 1.5rem; margin-bottom: 0.75rem; }
          p { font-size: 1rem; line-height: 1.6; }
        `,
        placeholder: 'Start writing your blog post here...',
        branding: false,
        autosave_interval: '30s',
        autosave_prefix: 'rte-autosave-',
        autosave_restore_when_empty: true,
        autosave_retention: '2m',


        }}
        />
    )
}

export default RTE;