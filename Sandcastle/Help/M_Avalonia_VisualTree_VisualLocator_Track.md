---
title:Track Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Track Method




## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IObservable<Visual?> Track(
	Visual relativeTo,
	int ancestorLevel,
	Type? ancestorType = null
)
```
**VB**
``` VB
Public Shared Function Track ( 
	relativeTo As Visual,
	ancestorLevel As Integer,
	Optional ancestorType As Type = Nothing
) As IObservable(Of Visual)
```
**F#**
``` F#
static member Track : 
        relativeTo : Visual * 
        ancestorLevel : int * 
        ?ancestorType : Type 
(* Defaults:
        let _ancestorType = defaultArg ancestorType null
*)
-> IObservable<Visual> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_Visual">Visual</a>)

## See Also


#### Reference
<a href="T_Avalonia_VisualTree_VisualLocator">VisualLocator Class</a>  
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  
