
### B1


Shortest name: `B1.B2.B3` Full name: {@link (B1:namespace).(B2:namespace).(B3:namespace)S}


Kind：Namespace

### B2


Kind：Namespace

### B3


Kind：Namespace


#### functionB4


Shortest name: `B1.B2.B3.functionB4` Full name: `(B1:namespace).(B2:namespace).(B3:namespace).(functionB4:function)`


Kind：Function

### ClassA1


Shortest name: `ClassA1` Full name: `(ClassA1:class)`


Kind：Class


#### (constructor)


Shortest name: `(ClassA1:constructor)` Full name: `(ClassA1:constructor)`

NOTE: "ClassA1.constructor" is NOT correct. That would refer to a regular member whose name is "constructor".


Kind：Constructor


#### memberA2


Shortest name: `ClassA1.memberA2` Full name: `(ClassA1:class).(memberA2:instance)`


Kind：Method


#### memberA3


Shortest name: `ClassA1.(memberA3:instance)` Full name: `(ClassA1:class).(memberA3:instance)`

NOTE: The shortest name cannot omit "instance" because there is a static member with the same name.


Kind：Method


#### memberA3


Shortest name: `ClassA1.(memberA3:static)` Full name: `(ClassA1:class).(memberA3:static)`


Kind：Method

### ClassI1


Shortest name: `ClassI1` Full name: `(ClassI1:class)`


Kind：Class


#### title


Shortest name: `ClassI1.title` Full name: `(ClassI1:class).(title:instance)`


Kind：Property

### ClassJ2


Shortest name: `ClassJ2` Full name: `(ClassJ2:class)`


Kind：Class


#### "𠮷"


Shortest name: `ClassJ2."𠮷"` Full name: `(ClassJ2:class).("𠮷":instance)`

NOTE: In TypeScript some characters require quotes, some do not. TSDoc should follow the same rules as TypeScript in this regard.


Kind：Property


#### spaß


Shortest name: {@link ClassJ2.spaß} Full name: {@link (ClassJ2:class).(spaß:instance)}


Kind：Property


#### static


Shortest name: {@link ClassJ2.static} Also valid: `ClassJ2."static"` Full name: {@link (ClassJ2:class).(static:static)}


Kind：Property

### ClassM2


Shortest name: `ClassM2` Full name: `(ClassM2:class)`


Kind：Class


#### [WellknownSymbolsM1.toNumberPrimitive]


Shortest name: `ClassM2.([WellknownSymbolsM1.toNumberPrimitive]:instance)` Full name: `(ClassM2:class).([(WellknownSymbolsM1:namespace).(toNumberPrimitive:variable)]:instance)`


Kind：Method


Parameters：

- hint(`string`, `necessary`) 



#### [WellknownSymbolsM1.toNumberPrimitive]


Shortest name: `ClassM2.([WellknownSymbolsM1.toNumberPrimitive]:static)` Full name: `(ClassM2:class).([(WellknownSymbolsM1:namespace).(toNumberPrimitive:variable)]:static)`


Kind：Method


Parameters：

- hint(`string`, `necessary`) 



#### [WellknownSymbolsM1.toStringPrimitive]


Shortest name: `ClassM2.[WellknownSymbolsM1.toStringPrimitive]` Full name: `(ClassM2:class).([(WellknownSymbolsM1:namespace).(toStringPrimitive:variable)]:instance)`


Kind：Method


Parameters：

- hint(`string`, `necessary`) 


### functionC1


Shortest name: `(functionC1:1)` Full name: `(functionC1:1)`


Kind：Function


Parameters：

- y(`number`, `necessary`) 


### functionC1


Shortest name: `(functionC1:2)` Full name: `(functionC1:2)`


Kind：Function


Parameters：

- x(`string`, `necessary`) 


### functionC1


Kind：Function


Parameters：

- xy(`string | number`, `necessary`) 


### functionD1


Shortest name: `(functionD1:WITH_NUMBERS)` Full name: `(functionD1:WITH_NUMBERS)`

{@label WITH_NUMBERS}


Kind：Function


Parameters：

- y(`number`, `necessary`) 


### functionD1


Shortest name: `(functionD1:WITH_LETTERS)` Full name: `(functionD1:WITH_LETTERS)`

{@label WITH_LETTERS}


Kind：Function


Parameters：

- x(`string`, `necessary`) 


### functionD1


Shortest name: `(functionD1:3)` Full name: `(functionD1:3)`

NOTE: If one label is omitted, the numeric indexers can still be used.


Kind：Function

### functionD1


Kind：Function


Parameters：

- xy(`string | number`, `optional`) 


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

### MergedE1


Shortest name: `(MergedE1:namespace)` Full name: `(MergedE1:namespace)`


Kind：Namespace


#### memberE2


Shortest name: `(MergedE1:namespace).memberE2` Full name: `(MergedE1:namespace).(memberE2:function)`


Kind：Function

### MergedF1


Shortest name: `(MergedF1:WITH_NUMBERS)` Full name: `(MergedF1:WITH_NUMBERS)`

{@label WITH_NUMBERS}


Kind：Function


Parameters：

- y(`number`, `necessary`) 


### MergedF1


Shortest name: `(MergedF1:2)` Full name: `(MergedF1:2)`


Kind：Function


Parameters：

- x(`string`, `necessary`) 


### MergedF1


Kind：Function


Parameters：

- xy(`string | number`, `necessary`) 


### MergedF1


Shortest name: `(MergedF1:namespace)` Full name: `(MergedF1:namespace)`


Kind：Namespace

### MergedG1


Shortest name: `(MergedG1:namespace)` Full name: `(MergedG1:namespace)`


Kind：Namespace

### WellknownSymbolsM1


Shortest name: `WellknownSymbolsM1` Full name: `(WellknownSymbolsM1:namespace)`


Kind：Namespace
