webpackJsonp([646043723490],{271:function(e,a){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Express",doc:3,section:3,type:"doc"},fields:{slug:"/express"}}},{node:{frontmatter:{title:"FAQ",doc:5,section:1,type:"doc"},fields:{slug:"/faq"}}},{node:{frontmatter:{title:"Generators",doc:3,section:1,type:"doc"},fields:{slug:"/generators"}}},{node:{frontmatter:{title:"Quick Start",doc:1,section:1,type:"doc"},fields:{slug:"/quick-start"}}},{node:{frontmatter:{title:"Packages",doc:1,section:2,type:"doc"},fields:{slug:"/packages"}}},{node:{frontmatter:{title:"React Native",doc:2,section:3,type:"doc"},fields:{slug:"/react-native"}}},{node:{frontmatter:{title:"Redux",doc:1,section:3,type:"doc"},fields:{slug:"/redux"}}},{node:{frontmatter:{title:"Standalone",doc:2,section:2,type:"doc"},fields:{slug:"/standalone"}}},{node:{frontmatter:{title:"Templates",doc:2,section:1,type:"doc"},fields:{slug:"/templates"}}}]},postBySlug:{html:'<p>Sharing generators cross-projects and cross-teams can be done simply by copying or any custom tooling your teams come up with that perfectly fits your workflow.</p>\n<p>The <code>hygen-add</code> tool offers a streamlined way to do this by introducing <em>Packages</em>. Packages are a compiled set of generators which are published as a node module that you can install and share with others.</p>\n<h2 id="popular-packages"><a href="#popular-packages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Popular Packages</h2>\n<ul>\n<li><a href="https://github.com/jondot/hygen-CRA">hygen-cra (create-react-app)</a> - generate a full set of component, storybook and test for your <a href="https://github.com/facebook/create-react-app">Create React App</a> project.</li>\n</ul>\n<h2 id="installing-a-package"><a href="#installing-a-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing a Package</h2>\n<p>First, you need to install the <code>hygen-add</code> tool, it\'s one of the tools in the <code>hygen</code> toolbelt.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ yarn global add hygen-add\n</code></pre>\n      </div>\n<p>Now pick <a href="https://www.npmjs.com/search?q=hygen-">a published module</a> on <code>npm</code> and install it. For a module called <code>hygen-acme-generators</code>, run this, without the prefix <code>hygen-</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ hygen-add acme-generators\n</code></pre>\n      </div>\n<p>This installs the <code>acme-generators</code> package with the embedded <code>yarn</code> so it\'s versioned and locked, and adds the generators to your current project. Technically, it will <em>copy</em> the generators to your local <code>_templates</code> directory, because copying is more resilient and robust rather than referncing something that can change unexpectedly.</p>\n<p>Once that\'s done, you can remove <code>acme-generators</code> using <code>yarn</code>, or leave it if you\'d like to sync your templates once in a while.</p>\n<h2 id="installing-from-github"><a href="#installing-from-github" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing from Github</h2>\n<p><code>hygen-add</code> supports installing from Github, in the same way <code>yarn</code> supports it because it uses <code>yarn</code> under the hood. It will try to infer the package name from the Github repo URL.</p>\n<p>Running this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ hygen-add https://github.com/acme/acme-generators\n</code></pre>\n      </div>\n<p>Will install the package <code>acme-generators</code>. The package name <code>acme-generators</code> was parsed out of the Github URL.</p>\n<p>If for some reason your Github URL doesn\'t reveal anything about the package name, you can manually specify the package name (remember: the package name is the <code>name</code> property in the package project\'s <code>package.json</code> file).</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ hygen-add https://github.com/acme/archive --name acme-generators\n</code></pre>\n      </div>\n<h2 id="name-clashes"><a href="#name-clashes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Name Clashes</h2>\n<p>If you want to install a <code>react</code> package from both <code>acme</code> and <code>awesome</code>, you can prefix one of those, or both, to avoid name clashes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ hygen-add acme-react\n$ hygen-add awesome-react --prefix awsm\n</code></pre>\n      </div>',timeToRead:2,excerpt:"Sharing generators cross-projects and cross-teams can be done simply by copying or any custom tooling your teams come up with that perfectly…",frontmatter:{title:"Packages"},fields:{slug:"/packages"}}},pathContext:{slug:"/packages"}}}});
//# sourceMappingURL=path---packages-4c43fa4672880f6cbeb8.js.map