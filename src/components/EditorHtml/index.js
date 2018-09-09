import React from 'react'
import { Editor, createEditorState, Block, rendererFn } from 'medium-draft'

import css from './index.css'
import AtomicEmbedComponent from './AtomicEmbedComponent'
import AtomicBlock from './AtomicBlock'

export default class EditorComponent extends React.Component {
  constructor(props) {
    super(props)
    const { rawContent } = this.props.storyData
    this.state = {
      editorState: createEditorState(rawContent)
    }
  }

  overideRendererFn = (setEditorState, getEditorState) => {
    const embed = AtomicEmbedComponent
    const rFnOld = rendererFn(setEditorState, getEditorState)
    const rFnNew = contentBlock => {
      const type = contentBlock.getType()
      switch (type) {
        case Block.ATOMIC:
          return {
            component: AtomicBlock,
            editable: false,
            props: {
              components: { embed },
              getEditorState
            }
          }
        default:
          return rFnOld(contentBlock)
      }
    }
    return rFnNew
  }

  render() {
    return (
      <div className={css.editorComponentWrapper}>
        <Editor
          onChange={() => {}}
          editorEnabled={false}
          editorState={this.state.editorState}
          rendererFn={this.overideRendererFn}
        />

        <style jsx global>{`
          .DraftEditor-editorContainer h3 {
            font-size: 30px;
            line-height: 1.15;
            font-weight: 600;
          }
          .md-block-paragraph {
            margin-top: 21px;
          }
          .md-block-paragraph span {
            font-size: 18px;
            line-height: 1.58;
            letter-spacing: -0.004em;
          }

          .md-block-image-inner-container img {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}
