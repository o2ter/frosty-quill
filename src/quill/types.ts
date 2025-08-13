//
//  types.ts
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

import { ComponentPropsWithoutRef, Ref } from 'frosty';
import Quill from 'quill';
import type { QuillOptions, Range } from 'quill';
import type _Delta from 'quill-delta';

export { Quill };
  
export const Delta = Quill.import('delta') as typeof _Delta;
export type Delta = typeof Delta

export type RichTextInputProps = ComponentPropsWithoutRef<'div'> & {
  ref?: Ref<RichTextInputRef | null | undefined>;
  value?: Delta;
  options?: QuillOptions;
  readOnly?: boolean;
  onChangeText?: (value: Delta, quill: Quill) => void;
  onChangeSelection?: (range: Range, quill: Quill) => void;
};

export type RichTextInputRef = {
  value?: Delta;
  editor?: Quill;
  container?: HTMLDivElement;
  assets: string[];
  replaceAssets(assets: Record<string, string>): void;
};
