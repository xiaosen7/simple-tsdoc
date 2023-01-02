
### MergedE1


Shortest name: `(MergedE1:class)` Full name: `(MergedE1:class)`


Kind：Class


#### (constructor)


Shortest name: `(MergedE1:constructor)` Full name: `(MergedE1:constructor)`

NOTE: MergedE1 is also a namespace, so it seems like we need a syntax like `(MergedE1:class,constructor)` or `(MergedE1:class:constructor)`. But only one selector is necessary because namespaces conveniently cannot have constructors.


Kind：Constructor


#### memberE2


Shortest name: `(MergedE1:class).memberE2` Full name: `(MergedE1:class).(memberE2:instance)`

NOTES:

- The "instance" selector is optional because "(MergedE1:class)" already eliminates any ambiguity.

- Although "MergedE1.(memberE2:instance)" is theoretically also an unambiguous notation, the TSDoc standard discourages that, because resolving it might require unbounded backtracking.


Kind：Method
