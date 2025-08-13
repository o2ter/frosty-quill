//
//  index.ts
//
//  The MIT License
//  Copyright (c) 2021 - 2025 O2ter Limited. All rights reserved.
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//

import _ from 'lodash';
import './quill.scss';

import { Delta, Quill, RichTextInputProps } from './types';
import { ImageResize } from './modules/imageResize';

export { Quill, Delta };

Quill.register('modules/imageResize', ImageResize);

const imgAttrs = [
  'alt',
  'height',
  'width',
] as const;

Quill.register(class extends (Quill.import('formats/image') as any) {
  static formats(domNode: HTMLImageElement) {
    const attrs = _.filter(imgAttrs, s => domNode.hasAttribute(s));
    return {
      ..._.fromPairs(_.map(attrs, s => [s, domNode.getAttribute(s)])),
    };
  }
  format(name: string, value: any) {
    if (_.includes(imgAttrs, name)) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}, true);

export const QuillEditor = ({
  ref,
  value,
  options,
  readOnly,
  onChangeText,
  onChangeSelection,
  ...props
}: RichTextInputProps) => {
  return <div {...props} />;
};
