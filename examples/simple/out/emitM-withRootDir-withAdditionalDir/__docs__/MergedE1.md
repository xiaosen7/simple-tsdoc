
### MergedE1


Shortest name: `(MergedE1:namespace)` Full name: `(MergedE1:namespace)`


Kind：Namespace


#### memberE2


Shortest name: `(MergedE1:namespace).memberE2` Full name: `(MergedE1:namespace).(memberE2:function)`


Kind：Function
ike we need a syntax like `(MergedE1:class,constructor)` or `(MergedE1:class:constructor)`. But only one selector is necessary because namespaces conveniently cannot have constructors.


Kind：Constructor


#### memberE2


Shortest name: `(MergedE1:class).memberE2` Full name: `(MergedE1:class).(memberE2:instance)`

NOTES:

- The "instance" selector is optional because "(MergedE1:class)" already eliminates any ambiguity.

- Although "MergedE1.(memberE2:instance)" is theoretically also an unambiguous notation, the TSDoc standard discourages that, because resolving it might require unbounded backtracking.


Kind：Method
