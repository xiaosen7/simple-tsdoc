
### B1


Shortest name: `B1.B2.B3` Full name: {@link (B1:namespace).(B2:namespace).(B3:namespace)S}


类型：Namespace

### B2


类型：Namespace

### B3


类型：Namespace


#### functionB4


Shortest name: `B1.B2.B3.functionB4` Full name: `(B1:namespace).(B2:namespace).(B3:namespace).(functionB4:function)`


类型：Function

### ClassA1


Shortest name: `ClassA1` Full name: `(ClassA1:class)`


类型：Class


#### (constructor)


Shortest name: `(ClassA1:constructor)` Full name: `(ClassA1:constructor)`

NOTE: "ClassA1.constructor" is NOT correct. That would refer to a regular member whose name is "constructor".


类型：Constructor


#### memberA2


Shortest name: `ClassA1.memberA2` Full name: `(ClassA1:class).(memberA2:instance)`


类型：Method


#### memberA3


Shortest name: `ClassA1.(memberA3:instance)` Full name: `(ClassA1:class).(memberA3:instance)`

NOTE: The shortest name cannot omit "instance" because there is a static member with the same name.


类型：Method


#### memberA3


Shortest name: `ClassA1.(memberA3:static)` Full name: `(ClassA1:class).(memberA3:static)`


类型：Method

### ClassI1


Shortest name: `ClassI1` Full name: `(ClassI1:class)`


类型：Class


#### title


Shortest name: `ClassI1.title` Full name: `(ClassI1:class).(title:instance)`


类型：Property

### ClassJ2


Shortest name: `ClassJ2` Full name: `(ClassJ2:class)`


类型：Class


#### "𠮷"


Shortest name: `ClassJ2."𠮷"` Full name: `(ClassJ2:class).("𠮷":instance)`

NOTE: In TypeScript some characters require quotes, some do not. TSDoc should follow the same rules as TypeScript in this regard.


类型：Property


#### spaß


Shortest name: {@link ClassJ2.spaß} Full name: {@link (ClassJ2:class).(spaß:instance)}


类型：Property


#### static


Shortest name: {@link ClassJ2.static} Also valid: `ClassJ2."static"` Full name: {@link (ClassJ2:class).(static:static)}


类型：Property

### ClassM2


Shortest name: `ClassM2` Full name: `(ClassM2:class)`


类型：Class


#### [WellknownSymbolsM1.toNumberPrimitive]


Shortest name: `ClassM2.([WellknownSymbolsM1.toNumberPrimitive]:instance)` Full name: `(ClassM2:class).([(WellknownSymbolsM1:namespace).(toNumberPrimitive:variable)]:instance)`


类型：Method


参数列表：

- hint(`string`, `必须`) 



#### [WellknownSymbolsM1.toNumberPrimitive]


Shortest name: `ClassM2.([WellknownSymbolsM1.toNumberPrimitive]:static)` Full name: `(ClassM2:class).([(WellknownSymbolsM1:namespace).(toNumberPrimitive:variable)]:static)`


类型：Method


参数列表：

- hint(`string`, `必须`) 



#### [WellknownSymbolsM1.toStringPrimitive]


Shortest name: `ClassM2.[WellknownSymbolsM1.toStringPrimitive]` Full name: `(ClassM2:class).([(WellknownSymbolsM1:namespace).(toStringPrimitive:variable)]:instance)`


类型：Method


参数列表：

- hint(`string`, `必须`) 


### functionC1


Shortest name: `(functionC1:1)` Full name: `(functionC1:1)`


类型：Function


参数列表：

- y(`number`, `必须`) 


### functionC1


Shortest name: `(functionC1:2)` Full name: `(functionC1:2)`


类型：Function


参数列表：

- x(`string`, `必须`) 


### functionC1


类型：Function


参数列表：

- xy(`string | number`, `必须`) 


### functionD1


Shortest name: `(functionD1:WITH_NUMBERS)` Full name: `(functionD1:WITH_NUMBERS)`

{@label WITH_NUMBERS}


类型：Function


参数列表：

- y(`number`, `必须`) 


### functionD1


Shortest name: `(functionD1:WITH_LETTERS)` Full name: `(functionD1:WITH_LETTERS)`

{@label WITH_LETTERS}


类型：Function


参数列表：

- x(`string`, `必须`) 


### functionD1


Shortest name: `(functionD1:3)` Full name: `(functionD1:3)`

NOTE: If one label is omitted, the numeric indexers can still be used.


类型：Function

### functionD1


类型：Function


参数列表：

- xy(`string | number`, `可选`) 


### MergedE1


Shortest name: `(MergedE1:class)` Full name: `(MergedE1:class)`


类型：Class


#### (constructor)


Shortest name: `(MergedE1:constructor)` Full name: `(MergedE1:constructor)`

NOTE: MergedE1 is also a namespace, so it seems like we need a syntax like `(MergedE1:class,constructor)` or `(MergedE1:class:constructor)`. But only one selector is necessary because namespaces conveniently cannot have constructors.


类型：Constructor


#### memberE2


Shortest name: `(MergedE1:class).memberE2` Full name: `(MergedE1:class).(memberE2:instance)`

NOTES:

- The "instance" selector is optional because "(MergedE1:class)" already eliminates any ambiguity.

- Although "MergedE1.(memberE2:instance)" is theoretically also an unambiguous notation, the TSDoc standard discourages that, because resolving it might require unbounded backtracking.


类型：Method

### MergedE1


Shortest name: `(MergedE1:namespace)` Full name: `(MergedE1:namespace)`


类型：Namespace


#### memberE2


Shortest name: `(MergedE1:namespace).memberE2` Full name: `(MergedE1:namespace).(memberE2:function)`


类型：Function

### MergedF1


Shortest name: `(MergedF1:WITH_NUMBERS)` Full name: `(MergedF1:WITH_NUMBERS)`

{@label WITH_NUMBERS}


类型：Function


参数列表：

- y(`number`, `必须`) 


### MergedF1


Shortest name: `(MergedF1:2)` Full name: `(MergedF1:2)`


类型：Function


参数列表：

- x(`string`, `必须`) 


### MergedF1


类型：Function


参数列表：

- xy(`string | number`, `必须`) 


### MergedF1


Shortest name: `(MergedF1:namespace)` Full name: `(MergedF1:namespace)`


类型：Namespace

### MergedG1


Shortest name: `(MergedG1:namespace)` Full name: `(MergedG1:namespace)`


类型：Namespace

### WellknownSymbolsM1


Shortest name: `WellknownSymbolsM1` Full name: `(WellknownSymbolsM1:namespace)`


类型：Namespace
