var levels = [
  {
    helpTitle : "Sélectionner les éléments par leur balise",
    selectorName : "Sélecteur de type",
    doThis : "Selectionner les assiettes",
    selector : "assiette",
    syntax : "A",
    help : "Sélectionner tous les éléments du type <strong>A</strong>. Le type correspond au type de balise, donc <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <assiette/>
    <assiette/>
    `
  },
  {
    doThis : "Selectionner les bento boxes",
    selector : "bento",
    syntax : "A",
    helpTitle : "Sélectionner les éléments par leur balise",
    selectorName : "Type Selector",
    help : "Sélectionner tous les éléments du type <strong>A</strong>. Le type correspond au type de balise, donc <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <assiette/>
    <bento/>
    `
  },
  {
    doThis : "Selectionner la belle assiette",
    selector : "#belle",
    selectorName: "Sélecteur par ID",
    helpTitle: "Sélectionner les éléments avec un ID",
    syntax: "#id",
    help : 'Sélectionne les éléments avec un <strong>id</strong> spécifique. Il est possible de combiner le sélecteur par ID avec le sélecteur de balise.',
    examples : [
      '<strong>#cool</strong> sélectionne les éléments qui ont <strong>id="cool"</strong>',
      '<strong>ul#long</strong> sélectionne <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <assiette id="belle"/>
    <assiette/>
    <bento/>
    `
  },
  {
    doThis : "Sélectionner les petites pommes",
    selector : ".petite",
    selectorName: "Sélecteur de classe",
    helpTitle: "Selectionner des éléments par leur classe",
    syntax: ".classname",
    help : 'Le sélecteur de classe sélectionne tous les éléments avec cette classe. Les éléments ne peuvent avoir qu\'un ID mais plusieurs classes.',
    examples : [
    '<strong>.neato</strong> sélectionne tous les éléments avec <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <pomme/>
    <pomme class="petite"/>
    <assiette>
      <pomme class="petite"/>
    </assiette>
    <assiette/>
    `
  },
  {
    helpTitle: "Sélectionne un élément dans un élément",
    selectorName : "Sélecteur descendant",
    doThis : "Selectionner la pomme dans l'assiette",
    selector : "assiette pomme",
    syntax: "A&nbsp;&nbsp;B",
    help : "Sélectionne tous les <strong>B</strong> qui sont dans <strong>A</strong>.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> sélectionne tous les éléments <tag>strong</tag> qui sont dans un <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont dans un élément avec <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <assiette>
      <pomme/>
    </assiette>
    <pomme/>
    `
  },
  {
    doThis : "Sélectionner le cornichon dans la belle assiette",
    selector : "#belle cornichon",
    helpTitle: "Combiner les sélecteurs hierarchique et sélecteurs ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Vous pouvez combiner tous les sélecteurs avec le sélecteur hierarchique',
    examples : [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont dans un élément <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <assiette id="belle">
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon/>
    </assiette>
    `
  },
  {
    doThis : "Sélectionner les petites oranges",
    selector : "orange.petite",
    helpTitle: "Combiner le sélecteur de classe",
    syntax: "A.className",
    help : 'Vous pouvez combiner le sélecteur de classe avec d\'autres sélecteurs.',
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> qui ont <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous les éléments avec <strong>id="big"</strong> et <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <pomme/>
    <pomme class="petite"/>
    <bento>
      <orange class="petite"/>
    </bento>
    <assiette>
      <orange/>
    </assiette>
    <assiette>
      <orange class="petite"/>
    </assiette>`
  },
  {
    doThis : "Select toutes les pommes à côté d'une assiette",
    selectorName: "Sélecteur de voisin direct",
    selector : "assiette + pomme",
    syntax : "A + B",
     helpTitle: "",
    help : '',
    examples : [],
    boardMarkup : `
    <bento>
      <pomme class="petite"/>
    </bento>
    <assiette />
    <pomme class="petite"/>
    <assiette />
    <pomme/>
    <pomme class="petite"/>
    <pomme class="petite"/>
    `
  },
  {
    selectorName: "Sélecteur de voisins",
    syntax: "A ~ B",
    doThis : "Selectionner les cornichons après un bento",
    selector : "bento ~ cornichon",
    boardMarkup : `
    <cornichon/>
    <bento>
      <orange class="petite"/>
    </bento>
    <cornichon class="petite"/>
    <cornichon/>
    <assiette>
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon class="petite"/>
    </assiette>
    `
  },
  {
    selectorName: "Sélecteur enfant",
    syntax: "A > B&nbsp;",
    doThis : "Selectionner la pomme directement sur une assiette",
    selector : "assiette > pomme",
    boardMarkup: `
    <assiette>
      <bento>
        <pomme/>
      </bento>
    </assiette>
    <assiette>
      <pomme/>
    </assiette>
    <assiette/>
    <pomme/>
    <pomme class="petite"/>
    `
  },
  {
    doThis : "Sélectionner les petites oranges dans les bentos",
    selector : "bento orange.petite",
    syntax: "C'est parti !",
    helpTitle: "Tu peux le faire...",
    help : 'Combiner tout ce que vous avez appris pour résoudre ce problème',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="petite"/>
    <bento>
      <orange class="petite"/>
    </bento>
    <bento>
      <pomme class="petite"/>
    </bento>
    <bento>
      <orange class="petite"/>
    </bento>
    `
  },
  {
    doThis : "Sélectionner toutes les assiettes et les bentos",
    selector : "assiette,bento",
    selectorName : "Combinaison par virgule",
    helpTitle: "Combiner des sélecteurs avec des virgules",
    syntax : "A, B",
    help : 'Sélectionenr tous les élements <strong>A</strong> et <strong>B</strong>. Vous pouvez combiner autant de sélecteurs que vous le souhaitez.',
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> et ceux qui ont <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
    ],
    boardMarkup : `
    <cornichon class="petite"/>
    <cornichon/>
    <assiette>
      <pickle/>
    </assiette>
    <bento>
      <cornichon/>
    </bento>
    <assiette>
      <cornichon/>
    </assiette>
    <cornichon/>
    <cornichon class="petite"/>
    `
  },
  {
    doThis : "Sélectionner tout",
    selector : "*",
    selectorName:  "Sélecteur universel",
    helpTitle: "Vous pouvez tout sélectionner ! ",
    syntax : "*",
    help : '',
    examples : [],
    boardMarkup : `
    <pomme/>
    <assiette>
      <orange class="petite" />
    </assiette>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <assiette id="belle"/>
    `
  },
  {
    doThis : "Selectionner tout sur une assiette",
    selector : "assiette *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "",
    help : '',
    examples : [],
    boardMarkup: `
    <assiette id="belle">
      <orange class="petite"/>
    </assiette>
    <assiette>
      <pickle/>
    </assiette>
    <pomme class="petite"/>
    <pomme>
      <apple/>
    </assiette>`
  },
];
