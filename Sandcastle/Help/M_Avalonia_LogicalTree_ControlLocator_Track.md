---
title:Track Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Track Method




## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IObservable<ILogical?> Track(
	ILogical relativeTo,
	int ancestorLevel,
	Type? ancestorType = null
)
```
**VB**
``` VB
Public Shared Function Track ( 
	relativeTo As ILogical,
	ancestorLevel As Integer,
	Optional ancestorType As Type = Nothing
) As IObservable(Of ILogical)
```
**F#**
``` F#
static member Track : 
        relativeTo : ILogical * 
        ancestorLevel : int * 
        ?ancestorType : Type 
(* Defaults:
        let _ancestorType = defaultArg ancestorType null
*)
-> IObservable<ILogical> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>)

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_ControlLocator">ControlLocator Class</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  
