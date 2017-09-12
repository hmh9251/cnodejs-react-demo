import React from 'react';
import {Panel, PanelHeader, PanelBody} from 'components/Panel/Panel'

function TopicCreate() {
    return (
        <Panel>
            <PanelHeader>主页/发布话题</PanelHeader>
            <PanelBody>
                <form action="/topic/create" method="post">
                    <fieldset>
                        <span class="tab-selector">选择版块：</span>
                        <select name="tab" id="tab-value">
                        <option value="">请选择</option>
                            <option value="share">分享</option>
                            <option value="ask">问答</option>
                            <option value="job">招聘</option>
                            <option value="dev">客户端测试</option>
                        </select>
                        <span id="topic_create_warn"></span>
                        <textarea autofocus="" class="span9" id="title" name="title" rows="1" placeholder="标题字数 10 字以上"></textarea>
                        <div class="markdown_editor in_editor">
                            <div class="markdown_in_editor">
                                <textarea class="editor" name="t_content" rows="20" placeholder="文章支持 Markdown 语法, 请注意标记代码" style="display: none;"></textarea><div class="editor-toolbar"><a class="eicon-bold"></a><a class="eicon-italic"></a><i class="separator">|</i><a class="eicon-quote"></a><a class="eicon-unordered-list"></a><a class="eicon-ordered-list"></a><i class="separator">|</i><a class="eicon-link"></a><a class="eicon-image"></a><i class="separator">|</i><a class="eicon-info" href="http://lab.lepture.com/editor/markdown" target="_blank"></a><a class="eicon-preview"></a><a class="eicon-fullscreen"></a></div><div class="CodeMirror cm-s-paper"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 4px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; padding: 0px; width: 1000px; height: 1em; outline: none; font-size: 4px;" tabindex="0"></textarea></div><div class="CodeMirror-hscrollbar" style="left: 0px;"><div style="height: 1px;"></div></div><div class="CodeMirror-vscrollbar"><div style="width: 1px;"></div></div><div class="CodeMirror-scrollbar-filler"></div><div class="CodeMirror-gutter-filler"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="min-width: 41.375px; margin-left: 0px; min-height: 36px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>​</span></pre></div><div style="position: relative; z-index: 1; display: none;"></div><div class="CodeMirror-code" style=""><pre>&nbsp;</pre></div><div class="CodeMirror-cursor" style="left: 4px; top: 5px; height: 17px; visibility: hidden;">&nbsp;</div><div class="CodeMirror-cursor CodeMirror-secondarycursor" style="display: none; visibility: hidden;">&nbsp;</div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px; top: 36px;"></div><div class="CodeMirror-gutters" style="display: none; height: 450px;"></div></div></div><div class="editor-statusbar"><span class="lines">1</span><span class="words">0</span><span class="cursor">0:0</span></div>
                                <div class="editor_buttons">
                                    <input type="submit" class="span-primary submit_btn" data-loading-text="提交中" value="提交" />
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="topic_tags" name="topic_tags" value="" />
                        <input type="hidden" name="_csrf" value="ta08zo0Q-MdCrZEKsHXV2Dv5G1OzA9yAYM7M" />
                    </fieldset>
                </form>
            </PanelBody>
        </Panel>
    )
}