var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec1_1-Sets",
  "level": "1",
  "url": "sec1_1-Sets.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets",
  "body": " Sets  We all have an intuitive idea of what a set is. Still, the concept of a set has given headaches to several mathematicians throughout the history of the subject. This is perhaps because the intuitive definition of a set is too simple, yet easily misunderstood and misused. Consider for instance the following set :   This set gives rise to what is called Russell's Paradox, named after Russell, Bertrand Bertrand Russell (1872-1970), a Welsh mathematician and philosopher. It is easy to see that if an element belongs to then it cannot belong to , and if an element does not belong to , then it must be in . Quite a conundrum!  Sets like these called for a formal development of set theory. The achievement of this task is mostly attributed to Cantor, Georg Georg Cantor (1845-1918), and it is said to have driven Cantor certifiably insane. Many of the deep problems and questions of set theory are beyond the scope of this course, although a few of them are disturbingly `obvious'. Let us say for example that we want to choose an even number larger than the number of atoms in the world. This is something we assume feasible but... how would you find such a number? In order to deal with such questions the ability to choose an arbitrary element with a certain characteristic out of a set must be assumed. We use this assumption whenever we say `let', `choose', etc. in constructing a mathematical argument.  The assumption mentioned above is called the axiom of choice , and is an essential building block of most of modern mathematics. This axiom is equivalent, or closely related, to many other important assumptions we make every day when doing mathematics. We list here some of the more commonly used ones: Trichotomy (a real number is either positive, negative or zero), every vector space has a basis, the well-ordering principle (Axiom \\ref{WOPaxiom} on page \\pageref{WOPaxiom}), the Cartesian product (see Definition \\ref{cartesianproddef}) of two non-empty sets is non-empty, etc.  For this course we will not need much beyond what the following simple definition of a set will allow us to do.   Sets   A set is a non-ordered collection of items. The cardinality of a set , denoted , is the number of elements in (if has finitely many elements) or if the set contains infinitely many elements.        A subset of a set is a set which only contains elements that also belong to . A subset of that is not equal to is called a proper subset of .  , the union > of and , is the set that contains all the elements belonging to or (or both).  , the intersection of and , is the set that contains all the elements belonging to both and .  , the set difference of by , is the set that contains all the elements of that do not belong to . This set is sometimes denoted by .  The Cartesian product of and , denoted , is the set        The union and intersection of and can also be presented as Sets      Understanding how elements of sets interact, and how they can be grouped, classified, and structured, is the foundation of mathematics --- and algebra, in particular. To achieve this understanding we use relations and, in particular, functions.  Although you might be used to thinking that a function Functions is only something that looks like or , you need to recall that a function is just a special type of a relation, and that a relation is nothing but a subset of a Cartesian product of two sets. We formalize these ideas in the following definition.    Let and be non-empty sets.  A relation  from to is a subset of . By convention, the statement that is often written as . We say that is an image of under , or that is mapped , or assigned , to under .  If is a relation from to such that every element in is assigned to exactly one image in , then is said to be a function , and we write .  If , so that is a relation from to , we say that is a relation on . In this case, if , and we may write , or when is understood.      In the particular case of a relation Relations from to , relations might have special properties.    Let be a relation on a set .  We say is reflexive if for all ;  is symmetric if necessarily implies that ;  is transitive if whenever and , it follows that that .  If a relation satisfies all three properties listed above, then is said to be an equivalence relation  Equivalence Relations on .    "
},
{
  "id": "def-Set",
  "level": "2",
  "url": "sec1_1-Sets.html#def-Set",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": " Sets   A set is a non-ordered collection of items. The cardinality of a set , denoted , is the number of elements in (if has finitely many elements) or if the set contains infinitely many elements.   "
},
{
  "id": "def-SetDefinitions",
  "level": "2",
  "url": "sec1_1-Sets.html#def-SetDefinitions",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "    A subset of a set is a set which only contains elements that also belong to . A subset of that is not equal to is called a proper subset of .  , the union > of and , is the set that contains all the elements belonging to or (or both).  , the intersection of and , is the set that contains all the elements belonging to both and .  , the set difference of by , is the set that contains all the elements of that do not belong to . This set is sometimes denoted by .  The Cartesian product of and , denoted , is the set      "
},
{
  "id": "sec1_1-Sets-10",
  "level": "2",
  "url": "sec1_1-Sets.html#sec1_1-Sets-10",
  "type": "Remark",
  "number": "1.1.3",
  "title": "",
  "body": " The union and intersection of and can also be presented as Sets     "
},
{
  "id": "def-Relation",
  "level": "2",
  "url": "sec1_1-Sets.html#def-Relation",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  Let and be non-empty sets.  A relation  from to is a subset of . By convention, the statement that is often written as . We say that is an image of under , or that is mapped , or assigned , to under .  If is a relation from to such that every element in is assigned to exactly one image in , then is said to be a function , and we write .  If , so that is a relation from to , we say that is a relation on . In this case, if , and we may write , or when is understood.     "
},
{
  "id": "def-EqivalenceRelation",
  "level": "2",
  "url": "sec1_1-Sets.html#def-EqivalenceRelation",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "  Let be a relation on a set .  We say is reflexive if for all ;  is symmetric if necessarily implies that ;  is transitive if whenever and , it follows that that .  If a relation satisfies all three properties listed above, then is said to be an equivalence relation  Equivalence Relations on .   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
