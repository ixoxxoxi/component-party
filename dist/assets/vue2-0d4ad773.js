const s=[{frameworkId:"vue2",snippetId:"声明",files:[{fileName:"Name.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;张三&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;你好 {{ name }}&lt;/</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/1-响应式/1-声明/vue2"},{frameworkId:"vue2",snippetId:"更新",files:[{fileName:"Name.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;张三&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">created</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;李四&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;你好 {{ name }}&lt;/</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/1-响应式/2-更新/vue2"},{frameworkId:"vue2",snippetId:"计算属性",files:[{fileName:"DoubleCount.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">count</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">computed</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">doubleCount</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">count</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">*</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;{{ doubleCount }}&lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/1-响应式/3-计算属性/vue2"},{frameworkId:"vue2",snippetId:"最小-template",files:[{fileName:"HelloWorld.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;这是一段示范文字&lt;/</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/2-模板语法/1-最小Template/vue2"},{frameworkId:"vue2",snippetId:"样式",files:[{fileName:"CssStyle.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">class</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;title&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      我是红色的</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">style</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;font-size: 10rem&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      我是一个按钮</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">style</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">scoped</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #D19A66">.title</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  color: </span><span style="color: #D19A66">red</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">style</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/2-模板语法/2-样式/vue2"},{frameworkId:"vue2",snippetId:"dom循环",files:[{fileName:"Colors.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">colors</span><span style="color: #ABB2BF">: [</span><span style="color: #98C379">&quot;红&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;绿&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;蓝&quot;</span><span style="color: #ABB2BF">],</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">ul</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">li</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">v-for</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;color in colors&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">:key</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;color&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      {{ color }}</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">li</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">ul</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/2-模板语法/3-Dom循环/vue2"},{frameworkId:"vue2",snippetId:"点击事件",files:[{fileName:"Counter.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">count</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">incrementCount</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">count</span><span style="color: #56B6C2">++</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;计数器: {{ count }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;incrementCount&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      +1</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/2-模板语法/4-点击事件/vue2"},{frameworkId:"vue2",snippetId:"dom的-ref",files:[{fileName:"InputFocused.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">mounted</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">$refs</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">inputElement</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">focus</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">input</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">ref</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;inputElement&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/2-模板语法/5-DOM的Ref/vue2"},{frameworkId:"vue2",snippetId:"条件渲染",files:[{fileName:"TrafficLight.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">TRAFFIC_LIGHTS</span><span style="color: #ABB2BF">: [</span><span style="color: #98C379">&quot;红灯&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;黄灯&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;绿灯&quot;</span><span style="color: #ABB2BF">],</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">lightIndex</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">computed</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">light</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">TRAFFIC_LIGHTS</span><span style="color: #ABB2BF">[</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">lightIndex</span><span style="color: #ABB2BF">];</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">nextLight</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF"> (</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">lightIndex</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">&gt;</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">TRAFFIC_LIGHTS</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">length</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">-</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">lightIndex</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">      } </span><span style="color: #C678DD">else</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">lightIndex</span><span style="color: #56B6C2">++</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">      }</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;nextLight&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      下一个灯</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;现在亮着的是: {{ light }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      你应该</span></span>
<span class="line"><span style="color: #ABB2BF">      &lt;</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-if</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;light === &#39;红灯&#39;&quot;</span><span style="color: #ABB2BF">&gt;停下&lt;/</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      &lt;</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-else-if</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;light === &#39;黄灯&#39;&quot;</span><span style="color: #ABB2BF">&gt;慢行&lt;/</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      &lt;</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-else-if</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;light === &#39;绿灯&#39;&quot;</span><span style="color: #ABB2BF">&gt;赶紧走&lt;/</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/2-模板语法/6-条件渲染/vue2"},{frameworkId:"vue2",snippetId:"页面加载",files:[{fileName:"PageTitle.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">pageTitle</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">mounted</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">pageTitle</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">document</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">title</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;页面标题: {{ pageTitle }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/3-生命周期/1-页面加载/vue2"},{frameworkId:"vue2",snippetId:"页面卸载",files:[{fileName:"Time.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">time</span><span style="color: #ABB2BF">: </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Date</span><span style="color: #ABB2BF">().</span><span style="color: #61AFEF">toLocaleTimeString</span><span style="color: #ABB2BF">(),</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">timer</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">null</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">mounted</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">timer</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">setInterval</span><span style="color: #ABB2BF">(() </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">time</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Date</span><span style="color: #ABB2BF">().</span><span style="color: #61AFEF">toLocaleTimeString</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }, </span><span style="color: #D19A66">1000</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">beforeUnmount</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">clearInterval</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">timer</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;当前时间: {{ time }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/3-生命周期/2-页面卸载/vue2"},{frameworkId:"vue2",snippetId:"props",files:[{fileName:"App.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">UserProfile</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;./UserProfile.vue&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">UserProfile</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">UserProfile</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #D19A66">name</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;张三&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #D19A66">:age</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;20&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #D19A66">:favorite-colors</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;[&#39;green&#39;, &#39;blue&#39;, &#39;red&#39;]&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #D19A66">is-available</span></span>
<span class="line"><span style="color: #ABB2BF">  /&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`},{fileName:"UserProfile.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">props</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">type</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">String</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">required</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">default</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">type</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Number</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">required</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">default</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">null</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">favoriteColors</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">type</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Array</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">required</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #61AFEF">default</span><span style="color: #ABB2BF">: () </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> [],</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">isAvailable</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">type</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Boolean</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">required</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">default</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;我的名字是 {{ props.name }}!&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;我的年龄是 {{ props.age }}!&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;My favorite colors are {{ props.favoriteColors.join(&quot;, &quot;) }}!&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;我现在 {{ props.isAvailable ? &#39;离职状态&#39; : &#39;在职&#39; }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/4-组件组合使用/1-props/vue2"},{frameworkId:"vue2",snippetId:"emit事件",files:[{fileName:"App.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">AnswerButton</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;./AnswerButton.vue&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">AnswerButton</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">happy</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">onAnswerNo</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">happy</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">onAnswerYes</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">happy</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;你快乐吗?&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">AnswerButton</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">@yes</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;onAnswerYes&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">@no</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;onAnswerNo&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    /&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">style</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;font-size: 50px&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      {{ happy ? &quot;😀&quot; : &quot;😥&quot; }}</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`},{fileName:"AnswerButton.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">clickYes</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">$emit</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;yes&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">clickNo</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">$emit</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;no&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;clickYes&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      是的！</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;clickNo&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      不是！</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/4-组件组合使用/2-Emit事件/vue2"},{frameworkId:"vue2",snippetId:"slot",files:[{fileName:"App.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;./FunnyButton.vue&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF">&gt; 点我! &lt;/</span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`},{fileName:"FunnyButton.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">button</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #D19A66">style</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;</span></span>
<span class="line"><span style="color: #98C379">      background: rgba(0, 0, 0, 0.4);</span></span>
<span class="line"><span style="color: #98C379">      color: #fff;</span></span>
<span class="line"><span style="color: #98C379">      padding: 10px 20px;</span></span>
<span class="line"><span style="color: #98C379">      font-size: 30px;</span></span>
<span class="line"><span style="color: #98C379">      border: 2px solid #fff;</span></span>
<span class="line"><span style="color: #98C379">      margin: 8px;</span></span>
<span class="line"><span style="color: #98C379">      transform: scale(0.9);</span></span>
<span class="line"><span style="color: #98C379">      box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>
<span class="line"><span style="color: #98C379">      transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>
<span class="line"><span style="color: #98C379">      outline: 0;</span></span>
<span class="line"><span style="color: #98C379">    &quot;</span></span>
<span class="line"><span style="color: #ABB2BF">  &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">slot</span><span style="color: #ABB2BF"> </span><span style="color: #FFFFFF">/</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/4-组件组合使用/3-slot/vue2"},{frameworkId:"vue2",snippetId:"slot内容",files:[{fileName:"App.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;./FunnyButton.vue&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF"> /&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF">&gt; 这是传到slot的内容! &lt;/</span><span style="color: #E06C75">FunnyButton</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`},{fileName:"FunnyButton.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">button</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #D19A66">style</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;</span></span>
<span class="line"><span style="color: #98C379">      background: rgba(0, 0, 0, 0.4);</span></span>
<span class="line"><span style="color: #98C379">      color: #fff;</span></span>
<span class="line"><span style="color: #98C379">      padding: 10px 20px;</span></span>
<span class="line"><span style="color: #98C379">      font-size: 30px;</span></span>
<span class="line"><span style="color: #98C379">      border: 2px solid #fff;</span></span>
<span class="line"><span style="color: #98C379">      margin: 8px;</span></span>
<span class="line"><span style="color: #98C379">      transform: scale(0.9);</span></span>
<span class="line"><span style="color: #98C379">      box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>
<span class="line"><span style="color: #98C379">      transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>
<span class="line"><span style="color: #98C379">      outline: 0;</span></span>
<span class="line"><span style="color: #98C379">    &quot;</span></span>
<span class="line"><span style="color: #ABB2BF">  &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">slot</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      &lt;</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF">&gt;默认slot内容&lt;/</span><span style="color: #E06C75">span</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">slot</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/4-组件组合使用/4-slot内容/vue2"},{frameworkId:"vue2",snippetId:"多层级组件通信",files:[{fileName:"App.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">UserProfile</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;./UserProfile.vue&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: { </span><span style="color: #E06C75">UserProfile</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">provide</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">user</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">Object</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">assign</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">user</span><span style="color: #ABB2BF">, {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">updateUsername</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">updateUsername</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      }),</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">user</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">id</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">username</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;abcdefg&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">email</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;abcdefg@example.com&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      },</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">updateUsername</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">newUsername</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">user</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">username</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">newUsername</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;欢迎回来, {{ user.username }}&lt;/</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">UserProfile</span><span style="color: #ABB2BF"> /&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`},{fileName:"UserProfile.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">inject</span><span style="color: #ABB2BF">: [</span><span style="color: #98C379">&quot;user&quot;</span><span style="color: #ABB2BF">],</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;我的简介&lt;/</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;用户名: {{ user.username }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;邮箱: {{ user.email }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;() =&gt; user.updateUsername(&#39;李四&#39;)&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      更新用户名为李四</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/4-组件组合使用/5-多层级组件通信/vue2"},{frameworkId:"vue2",snippetId:"文字输入框",files:[{fileName:"InputHello.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">text</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;这是一段示范文字&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;{{ text }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">input</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-model</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;text&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/6-表单/1-文字输入框/vue2"},{frameworkId:"vue2",snippetId:"勾选框",files:[{fileName:"IsAvailable.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">isAvailable</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">input</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">id</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;is-available&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">v-model</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;isAvailable&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">type</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;checkbox&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">label</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">for</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;is-available&quot;</span><span style="color: #ABB2BF">&gt;这是一个checkbox&lt;/</span><span style="color: #E06C75">label</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/6-表单/2-勾选框/vue2"},{frameworkId:"vue2",snippetId:"单选",files:[{fileName:"PickPill.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">picked</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;red&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;你选择了: {{ picked }}&lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">input</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">id</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;blue-pill&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">v-model</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;picked&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">type</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;radio&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">value</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;blue&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">label</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">for</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;blue-pill&quot;</span><span style="color: #ABB2BF">&gt;蓝色&lt;/</span><span style="color: #E06C75">label</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">input</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">id</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;red-pill&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">v-model</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;picked&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">type</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;radio&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">value</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;red&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">label</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">for</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;red-pill&quot;</span><span style="color: #ABB2BF">&gt;红色&lt;/</span><span style="color: #E06C75">label</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/6-表单/3-单选/vue2"},{frameworkId:"vue2",snippetId:"下拉选择",files:[{fileName:"ColorSelect.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">selectedColorId</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">colors</span><span style="color: #ABB2BF">: [</span></span>
<span class="line"><span style="color: #ABB2BF">        { </span><span style="color: #E06C75">id</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">text</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;红&quot;</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">        { </span><span style="color: #E06C75">id</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">text</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;蓝&quot;</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">        { </span><span style="color: #E06C75">id</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">text</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;绿&quot;</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">        { </span><span style="color: #E06C75">id</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">4</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">text</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;灰&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">isDisabled</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">      ],</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">select</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-model</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;selectedColorId&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">option</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">v-for</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;color in colors&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">:key</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;color.id&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">:value</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;color.id&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">:disabled</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;color.isDisabled&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      {{ color.text }}</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">option</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">select</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/6-表单/4-下拉选择/vue2"},{frameworkId:"vue2",snippetId:"渲染app",files:[{fileName:"index.html",ext:"html",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;!</span><span style="color: #E06C75">DOCTYPE</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">html</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">html</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">body</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">id</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;app&quot;</span><span style="color: #ABB2BF">&gt;&lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">type</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;module&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">src</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;./main.js&quot;</span><span style="color: #ABB2BF">&gt;&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">body</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">html</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`},{fileName:"App.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;这是一段示范文字&lt;/</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;App&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`},{fileName:"main.js",ext:"js",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vue</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">App</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Vue</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">el</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;#app&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: { </span><span style="color: #E06C75">App</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;&lt;App/&gt;&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/7-web功能/1-渲染app/vue2"},{frameworkId:"vue2",snippetId:"fetch-data",files:[{fileName:"App.vue",ext:"vue",contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">isLoading</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">error</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">undefined</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">users</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">undefined</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">mounted</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">fetchData</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">async</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">fetchData</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">isLoading</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">try</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">response</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">await</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">fetch</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;https://randomuser.me/api/?results=3&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75">results</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">users</span><span style="color: #ABB2BF"> } </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">await</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">response</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">json</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">users</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">users</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">error</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">undefined</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">      } </span><span style="color: #C678DD">catch</span><span style="color: #ABB2BF"> (</span><span style="color: #E06C75">error</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">error</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">error</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">      } </span><span style="color: #C678DD">finally</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">users</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">undefined</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">isLoading</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">      }</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-if</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;isLoading&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    正在获取用户信息</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-else-if</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;error&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    获取用户信息出错</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">ul</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">v-else-if</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;users&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">li</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">v-for</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;user in users&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #D19A66">:key</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;user.login.uuid&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      &lt;</span><span style="color: #E06C75">img</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #D19A66">:src</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;user.picture.thumbnail&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #D19A66">alt</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;user&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">      &gt;</span></span>
<span class="line"><span style="color: #ABB2BF">      &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">        {{ user.name.first }}</span></span>
<span class="line"><span style="color: #ABB2BF">        {{ user.name.last }}</span></span>
<span class="line"><span style="color: #ABB2BF">      &lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;/</span><span style="color: #E06C75">li</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">ul</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre>`}],playgroundURL:"",markdownFiles:[],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/7-web功能/2-fetch-data/vue2"},{frameworkId:"vue2",snippetId:"router-link",files:[],playgroundURL:"",markdownFiles:[{fileName:"nuxt3.md",ext:"md",content:`\`\`\`vue\r
<template>\r
  <ul>\r
    <li>\r
      <RouterLink to="/"> 首页 </RouterLink>\r
    </li>\r
    <li>\r
      <RouterLink to="/about"> 关于 </RouterLink>\r
    </li>\r
  </ul>\r
</template>\r
\`\`\`\r
`,contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #ABB2BF">&#x3C;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">  &#x3C;</span><span style="color: #E06C75">ul</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">    &#x3C;</span><span style="color: #E06C75">li</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">      &#x3C;</span><span style="color: #E06C75">RouterLink</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">to</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">"/"</span><span style="color: #ABB2BF">> 首页 &#x3C;/</span><span style="color: #E06C75">RouterLink</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">    &#x3C;/</span><span style="color: #E06C75">li</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">    &#x3C;</span><span style="color: #E06C75">li</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">      &#x3C;</span><span style="color: #E06C75">RouterLink</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">to</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">"/about"</span><span style="color: #ABB2BF">> 关于 &#x3C;/</span><span style="color: #E06C75">RouterLink</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">    &#x3C;/</span><span style="color: #E06C75">li</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">  &#x3C;/</span><span style="color: #E06C75">ul</span><span style="color: #ABB2BF">></span></span>
<span class="line"><span style="color: #ABB2BF">&#x3C;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">></span></span></code></pre>`}],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/7-web功能/3-router-link/vue2"},{frameworkId:"vue2",snippetId:"routing",files:[],playgroundURL:"",markdownFiles:[{fileName:"nuxt3.md",ext:"md",content:'```\r\n|-- pages/\r\n    |-- index.vue // index page "/"\r\n    |-- about.vue // about page "/about"\r\n```\r\n',contentHtml:`<pre class="shiki one-dark-pro-for-component-party" style="background-color: #0D1117"><code><span class="line"><span style="color: #abb2bf">|-- pages/</span></span>
<span class="line"><span style="color: #abb2bf">    |-- index.vue // index page "/"</span></span>
<span class="line"><span style="color: #abb2bf">    |-- about.vue // about page "/about"</span></span></code></pre>`}],snippetEditHref:"https://github.com/lainbo/component-party/tree/main/content/7-web功能/4-routing/vue2"}];export{s as default};
